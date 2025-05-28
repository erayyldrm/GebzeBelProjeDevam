// src/pages/EditPageForm.tsx
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, X, AlertCircle, Eye } from 'lucide-react';
import AdminLayout from '../_LayoutAdminPanel.tsx';
import Loader from '../../loader.tsx';
import {
    PageAPI,
    BaskanAPI,
    YonetimSemasiAPI,
    CombinedPageService,
    PageEntity,
    handleApiError,
    convertDeltaToStatus,
    convertStatusToDelta
} from '../services/pageService.tsx';

// Bu dosya zaten admin panelde seçilen herhangi bir sayfanın (ör: /admin/pages/:id) başlık, slug, kategori, durum, yazar ve içerik alanlarını düzenlemenizi sağlar.
// Quill editörü ile içerik düzenlenir ve Kaydet butonuna basınca PageAPI.updatePage ile veritabanında güncelleme yapılır.
// Yani, admin panelde seçtiğiniz herhangi bir sayfanın içeriğini (baskan, misyon, vizyon, ilkelerimiz, yönetim şeması hariç) bu sayfa üzerinden düzenleyebilirsiniz.

// Kurumsal veya yönetim şeması sayfaları için ise uyarı verilir ve güncelleme yapılmaz.

// Kodda herhangi bir değişiklik yapmanıza gerek yoktur; mevcut yapı admin panelde seçilen sayfanın içeriğini düzenleyip kaydetmenizi sağlar.

interface EditPageFormProps {
}

const EditPageForm: React.FC<EditPageFormProps> = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState<PageEntity | null>(null);
    const [isPreview, setIsPreview] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        category: 'Diğer',
        status: 'Taslak' as PageEntity['status'],
        content: '',
        author: ''
    });

    const editorRef = useRef<HTMLDivElement>(null);
    const quillInstance = useRef<any>(null);

    const categoryOptions = [
        'Kurumsal',
        'Yönetim',
        'Tarihi Yerler',
        'Hizmetler',
        'Fotoğraf ve Tur',
        'Meclis ve Belgeler',
        'Diğer'
    ];

    const statusOptions: PageEntity['status'][] = ['Yayınlandı', 'Taslak', 'Arşivlendi'];

    useEffect(() => {
        if (id) {
            fetchPage();
        }
    }, [id]);

    const fetchPage = async () => {
        if (!id) return;

        setLoading(true);
        setError(null);

        try {
            const pageId = parseInt(id);

            // Check if this is a converted entity (ID > 10000 means YonetimSemasi)
            if (pageId > 10000) {
                // Fetch from YonetimSemasi
                const yonetimData = await YonetimSemasiAPI.getYonetimSemasi();
                const danismanlar = await YonetimSemasiAPI.getBaskanDanismanlari();

                const allYonetimData = [
                    ...yonetimData.baskan,
                    ...yonetimData.baskanYardimcilari,
                    ...danismanlar
                ];

                const originalId = pageId - 10000;
                const yonetimEntity = allYonetimData.find(item => item.id === originalId);

                if (yonetimEntity) {
                    const convertedPage = CombinedPageService.convertToPageFormat([], [yonetimEntity])[0];
                    setPage(convertedPage);
                    setFormData({
                        title: convertedPage.title,
                        slug: convertedPage.slug,
                        category: convertedPage.category,
                        status: convertedPage.status || 'Taslak',
                        content: convertedPage.content || '',
                        author: convertedPage.author
                    });
                } else {
                    throw new Error('Yönetim şeması kaydı bulunamadı');
                }
            } else {
                // Check if this is a Kurumsal entity
                try {
                    // Try to fetch from different Kurumsal endpoints
                    let kurumsalEntity = null;

                    try {
                        const baskanData = await BaskanAPI.getActiveBaskan();
                        kurumsalEntity = baskanData.find(item => item.id === pageId);
                    } catch {
                    }

                    if (!kurumsalEntity) {
                        try {
                            const misyonData = await BaskanAPI.getActiveMisyon();
                            kurumsalEntity = misyonData.find(item => item.id === pageId);
                        } catch {
                        }
                    }

                    if (!kurumsalEntity) {
                        try {
                            const vizyonData = await BaskanAPI.getActiveVizyon();
                            kurumsalEntity = vizyonData.find(item => item.id === pageId);
                        } catch {
                        }
                    }

                    if (!kurumsalEntity) {
                        try {
                            const ilkelerimizData = await BaskanAPI.getActiveIlkelerimiz();
                            kurumsalEntity = ilkelerimizData.find(item => item.id === pageId);
                        } catch {
                        }
                    }

                    if (kurumsalEntity) {
                        const convertedPage = CombinedPageService.convertToPageFormat([kurumsalEntity], [])[0];
                        setPage(convertedPage);
                        setFormData({
                            title: convertedPage.title,
                            slug: convertedPage.slug,
                            category: convertedPage.category,
                            status: convertedPage.status || 'Taslak',
                            content: convertedPage.content || '',
                            author: convertedPage.author
                        });
                    } else {
                        // Try to fetch from PageAPI
                        const pageData = await PageAPI.getPageById(pageId);
                        const normalizedPage = CombinedPageService.normalizePage(pageData);
                        setPage(normalizedPage);
                        setFormData({
                            title: normalizedPage.title,
                            slug: normalizedPage.slug,
                            category: normalizedPage.category,
                            status: normalizedPage.status || 'Taslak',
                            content: normalizedPage.content || '',
                            author: normalizedPage.author
                        });
                    }
                } catch (error) {
                    console.error('Error fetching kurumsal or page data:', error);
                    throw error;
                }
            }

        } catch (err) {
            const errorInfo = handleApiError(err);
            setError(errorInfo.message);
            console.error('Failed to fetch page:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Auto-generate slug from title
        if (name === 'title') {
            const slug = value
                .toLowerCase()
                .replace(/[^a-z0-9\s-]/g, '')
                .replace(/\s+/g, '-')
                .replace(/-+/g, '-')
                .trim();
            setFormData(prev => ({
                ...prev,
                slug: slug
            }));
        }
    };

    const handleSave = async () => {
        if (!page) return;

        // Kurumsal sayfa ise kaydetme!
        if (page.category === 'Kurumsal') {
            alert('Kurumsal sayfalar kurumsal yönetim panelinden düzenlenmelidir.');
            return;
        }

        setSaving(true);
        setError(null);

        try {
            // Yönetim şeması sayfası ise kaydetme!
            if (page.id > 10000) {
                alert('Yönetim şeması sayfaları yönetim panelinden düzenlenmelidir.');
                setSaving(false);
                return;
            }

            // Quill editöründen güncel içeriği her zaman al
            let updatedContent = formData.content;
            if (quillInstance.current) {
                updatedContent = quillInstance.current.root.innerHTML;
            }

            // Eğer başlık veya slug boşsa, backend'e boş string gönderilmesini engelle
            const safeTitle = formData.title ?? page.title ?? '';
            const safeSlug = formData.slug ?? page.slug ?? '';

            // Güncel formData ile veritabanını güncelle
            const updatedPage = await PageAPI.updatePage(page.id, {
                title: safeTitle,
                slug: safeSlug,
                category: formData.category,
                status: formData.status,
                content: updatedContent,
                author: formData.author
            });

            setPage(updatedPage);
            setFormData({
                title: updatedPage.title,
                slug: updatedPage.slug,
                category: updatedPage.category,
                status: updatedPage.status || 'Taslak',
                content: updatedPage.content || '',
                author: updatedPage.author
            });

            alert('Sayfa başarıyla güncellendi!');
            navigate('/panel/sayfalar');

        } catch (err) {
            const errorInfo = handleApiError(err);
            setError(errorInfo.message);
            console.error('Failed to update page:', err);
        } finally {
            setSaving(false);
        }
    };

    const handleCancel = () => {
        if (confirm('Değişiklikler kaydedilmedi. Sayfadan çıkmak istediğinizden emin misiniz?')) {
            navigate('/admin/pages');
        }
    };

    const togglePreview = () => {
        setIsPreview(!isPreview);
    };

    // Quill stylesheet'i ekle
    useEffect(() => {
        if (!document.getElementById('quill-cdn-css')) {
            const link = document.createElement('link');
            link.id = 'quill-cdn-css';
            link.rel = 'stylesheet';
            link.href = 'https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.snow.css';
            document.head.appendChild(link);
        }
    }, []);

    // Quill editör değişikliklerini formData.content'e aktar
    useEffect(() => {
        if (!quillInstance.current) return;
        const quill = quillInstance.current;
        const handleChange = () => {
            setFormData(prev => ({
                ...prev,
                content: quill.root.innerHTML
            }));
        };
        quill.on('text-change', handleChange);
        return () => {
            quill.off('text-change', handleChange);
        };
    }, [quillInstance.current]);

    // Quill editörünü başlat ve içeriği yükle
    useEffect(() => {
        if (!editorRef.current) return;

        const loadQuill = () => {
            if ((window as any).Quill && editorRef.current) {
                if (!quillInstance.current) {
                    quillInstance.current = new (window as any).Quill(editorRef.current, {
                        theme: 'snow'
                    });
                    // İçeriği yükle
                    quillInstance.current.root.innerHTML = formData.content || '';
                }
            }
        };

        if (!(window as any).Quill) {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.js';
            script.onload = loadQuill;
            document.body.appendChild(script);
        } else {
            loadQuill();
        }

        return () => {
            quillInstance.current = null;
        };
    }, [editorRef, formData.title]);

    // formData.content değiştiğinde editöre aktar
    useEffect(() => {
        if (quillInstance.current && formData.content !== quillInstance.current.root.innerHTML) {
            quillInstance.current.root.innerHTML = formData.content || '';
        }
    }, [formData.content]);

    if (loading) {
        return <Loader />;
    }

    if (!page) {
        return (
            <AdminLayout>
                <main className="flex-1 overflow-y-auto p-6">
                    <div className="text-center py-8">
                        <AlertCircle size={64} className="mx-auto text-red-300 mb-4" />
                        <h3 className="text-lg font-medium text-gray-500 mb-1">Sayfa bulunamadı</h3>
                        <p className="text-gray-400 mb-4">Bu sayfa mevcut değil veya silinmiş olabilir.</p>
                        <button
                            onClick={() => navigate('/admin/pages')}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                        >
                            Sayfalara Geri Dön
                        </button>
                    </div>
                </main>
            </AdminLayout>
        );
    }

    return (
        <AdminLayout>
            <main className="flex-1 overflow-y-auto p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                        <button
                            onClick={() => navigate('/admin/pages')}
                            className="mr-4 p-2 text-gray-500 hover:text-gray-700"
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">Sayfa Düzenle</h2>
                            <p className="text-gray-500">{page.title}</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <button
                            onClick={togglePreview}
                            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center"
                        >
                            <Eye size={16} className="mr-2" />
                            {isPreview ? 'Düzenleme' : 'Önizleme'}
                        </button>
                        <button
                            onClick={handleCancel}
                            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center"
                        >
                            <X size={16} className="mr-2" />
                            İptal
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={saving}
                            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg flex items-center"
                        >
                            <Save size={16} className="mr-2" />
                            {saving ? 'Kaydediliyor...' : 'Kaydet'}
                        </button>
                    </div>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                        <div className="flex items-center">
                            <AlertCircle size={20} className="text-red-600 mr-2" />
                            <div>
                                <h3 className="text-red-800 font-medium">Hata</h3>
                                <p className="text-red-600 text-sm">{error}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Form */}
                <div className="bg-white rounded-lg shadow">
                    {!isPreview ? (
                        <div className="p-6">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                                {/* Title */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Sayfa Başlığı *
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Sayfa başlığını girin"
                                        required
                                    />
                                </div>

                                {/* Slug */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        URL Slug *
                                    </label>
                                    <input
                                        type="text"
                                        name="slug"
                                        value={formData.slug}
                                        onChange={handleInputChange}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="url-slug"
                                        required
                                    />
                                    <p className="text-xs text-gray-500 mt-1">
                                        URL: /pages/{formData.slug}
                                    </p>
                                </div>

                                {/* Category */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Kategori
                                    </label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleInputChange}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        {categoryOptions.map(category => (
                                            <option key={category} value={category}>
                                                {category}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Status */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Durum
                                    </label>
                                    <select
                                        name="status"
                                        value={formData.status}
                                        onChange={handleInputChange}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        {statusOptions.map(status => (
                                            <option key={status} value={status}>
                                                {status}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Author */}
                                <div className="lg:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Yazar
                                    </label>
                                    <input
                                        type="text"
                                        name="author"
                                        value={formData.author}
                                        onChange={handleInputChange}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Yazar adını girin"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    İçerik
                                </label>
                                {/* Quill editör container */}
                                <div ref={editorRef} id="editor" style={{ minHeight: 300 }} />
                            </div>
                        </div>
                    ) : (
                        <div className="p-6">
                            {/* Preview Mode */}
                            <div className="prose max-w-none">
                                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                    {formData.title || 'Sayfa Başlığı'}
                                </h1>

                                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                                    <span>Kategori: {formData.category}</span>
                                    <span>•</span>
                                    <span>Durum: {formData.status}</span>
                                    <span>•</span>
                                    <span>Yazar: {formData.author || 'Belirtilmemiş'}</span>
                                </div>

                                <div className="text-gray-700 leading-relaxed whitespace-pre-wrap"
                                     dangerouslySetInnerHTML={{ __html: formData.content || 'İçerik henüz eklenmemiş...' }} />
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </AdminLayout>
    );
};

export default EditPageForm;
