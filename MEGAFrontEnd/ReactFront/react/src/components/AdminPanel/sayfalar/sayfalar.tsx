import { useEffect, useRef, useState, useMemo } from 'react';
import { FileText, Filter, ChevronDown, ChevronUp, MoreHorizontal, Plus, Trash, Edit, Eye } from 'lucide-react';
import AdminLayout from '../_LayoutAdminPanel.tsx';
import { useSearch } from '../context/SearchContext.tsx';
import { useClickOutside } from '../../useClickOutside.tsx';
import Loader from '../../loader.tsx';

// Sayfalar için veri servis fonksiyonları
const fetchPages = async () => {
    // Normalde burası API'dan veri çekecek
    return [
        { id: 1, baslik: "Tarihi Yerler", tablo: "GEBZE_TARİHİ_YERLER", durum: "Active", son_guncelleme: "2025-05-01" },
        { id: 2, baslik: "Sanal Tur", tablo: "GEBZE_FOTOĞRAF_SANAL_TUR", durum: "Active", son_guncelleme: "2025-04-15" },
        { id: 3, baslik: "Kardeş Şehirler", tablo: "GEBZE_KARDESSEHIRLER", durum: "Active", son_guncelleme: "2025-03-22" },
        { id: 4, baslik: "Mahalle Muhtarları", tablo: "GEBZE_MAHALLEMUHTARLARI", durum: "Active", son_guncelleme: "2025-05-10" },
        { id: 5, baslik: "Bugünkü Gebze", tablo: "GEBZE_TARIHCE_BUGUNKUGEBZE", durum: "Inactive", son_guncelleme: "2025-02-18" },
        { id: 6, baslik: "Tarihi Yerler Aktiviteler", tablo: "GEBZE_TARIHIYERLER_AKTIVITELER", durum: "Active", son_guncelleme: "2025-04-30" },
        { id: 7, baslik: "Tarihi Yerler Galeri", tablo: "GEBZE_TARIHIYERLER_GALERI", durum: "Active", son_guncelleme: "2025-04-28" },
        { id: 8, baslik: "Üye Olduğumuz Birlikler", tablo: "GEBZE_UYE_OLDUGUMUZ_BIRLIKLER", durum: "Active", son_guncelleme: "2025-03-15" },
        { id: 9, baslik: "Hizmetler Detay", tablo: "HIZMETLER_DETAY", durum: "Active", son_guncelleme: "2025-05-05" },
        { id: 10, baslik: "Hizmetler Detaylı Bilgi", tablo: "HIZMETLER_DETAYLI_BILGI", durum: "Active", son_guncelleme: "2025-05-05" },
        { id: 11, baslik: "Geri Dönüşüm", tablo: "HİZMETLER_GERİ_DONUSUM", durum: "Pending", son_guncelleme: "2025-05-12" },
        { id: 12, baslik: "Tüm Hizmetler", tablo: "HIZMETLER_TUMU", durum: "Active", son_guncelleme: "2025-05-14" },
        { id: 13, baslik: "Gebze Üye Olduğumuz Birlikler", tablo: "HTE_GEBZE_UYE_OLDUGUMUZ_BIRLIKLER", durum: "Inactive", son_guncelleme: "2025-03-01" },
        { id: 14, baslik: "Kullanıcılar", tablo: "KULLANICILAR", durum: "Active", son_guncelleme: "2025-05-15" },
        { id: 15, baslik: "Başkan Misyon Vizyon İlkelerimiz", tablo: "KURUMSAL_BASKAN_MISYON_VIZYON_ILKELERIMIZ", durum: "Active", son_guncelleme: "2025-01-20" },
        { id: 16, baslik: "Etik Arabuluculuk", tablo: "KURUMSAL_ETIK_ARABULUCULUK", durum: "Active", son_guncelleme: "2025-02-25" },
        { id: 17, baslik: "Meclis", tablo: "KURUMSAL_MECLIS", durum: "Active", son_guncelleme: "2025-04-10" },
        { id: 18, baslik: "Eski Başkanlar", tablo: "KURUMSAL_MECLIS_ESKIBASKANLAR", durum: "Active", son_guncelleme: "2025-01-15" },
        { id: 19, baslik: "Yönetim Şeması", tablo: "KURUMSAL_YONETIM_SEMASI", durum: "Active", son_guncelleme: "2025-03-05" },
        { id: 20, baslik: "Kurumsal Dokümanlar", tablo: "MECLIS_KARARLARI_KURUMSAL_KIMLIK_KURUMSAL_RAPORLAR_KURUMSAL_DÖKÜMANLAR", durum: "Active", son_guncelleme: "2025-05-03" },
        { id: 21, baslik: "Müdürlükler", tablo: "MUDURLUKLER", durum: "Active", son_guncelleme: "2025-04-20" }
    ];
};

const updatePage = async (id, updatedPage) => {
    console.log('Updating page:', id, updatedPage);
    // Burada API'a update isteği atılacak
    return { ...updatedPage, id };
};

const deletePage = async (id) => {
    console.log('Deleting page:', id);
    // Burada API'a delete isteği atılacak
    return true;
};

const createPage = async (newPage) => {
    console.log('Creating new page:', newPage);
    // Burada API'a create isteği atılacak
    return { ...newPage, id: Math.floor(Math.random() * 1000) + 100 };
};

// Filtre seçenekleri
const statusOptions = ['Tüm Durumlar', 'Active', 'Inactive', 'Pending'];

// Düzenleme Modal
const EditPageModal = ({ isOpen, onClose, page, onSave }) => {
    const [formData, setFormData] = useState({
        baslik: '',
        tablo: '',
        durum: 'Active'
    });

    useEffect(() => {
        if (page) {
            setFormData({
                baslik: page.baslik || '',
                tablo: page.tablo || '',
                durum: page.durum || 'Active'
            });
        }
    }, [page]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(page.id, { ...page, ...formData });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
                <h2 className="text-xl font-bold mb-4">Sayfa Düzenle</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Başlık</label>
                        <input
                            type="text"
                            value={formData.baslik}
                            onChange={(e) => setFormData({ ...formData, baslik: e.target.value })}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Tablo Adı</label>
                        <input
                            type="text"
                            value={formData.tablo}
                            onChange={(e) => setFormData({ ...formData, tablo: e.target.value })}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Durum</label>
                        <select
                            value={formData.durum}
                            onChange={(e) => setFormData({ ...formData, durum: e.target.value })}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </div>
                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100"
                        >
                            İptal
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            Kaydet
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// Ekleme Modal
const AddPageModal = ({ isOpen, onClose, onAdd }) => {
    const [formData, setFormData] = useState({
        baslik: '',
        tablo: '',
        durum: 'Active'
    });

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPage = {
            ...formData,
            son_guncelleme: new Date().toISOString().split('T')[0]
        };
        onAdd(newPage);
        setFormData({ baslik: '', tablo: '', durum: 'Active' });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
                <h2 className="text-xl font-bold mb-4">Yeni Sayfa Ekle</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Başlık</label>
                        <input
                            type="text"
                            value={formData.baslik}
                            onChange={(e) => setFormData({ ...formData, baslik: e.target.value })}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Tablo Adı</label>
                        <input
                            type="text"
                            value={formData.tablo}
                            onChange={(e) => setFormData({ ...formData, tablo: e.target.value })}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Durum</label>
                        <select
                            value={formData.durum}
                            onChange={(e) => setFormData({ ...formData, durum: e.target.value })}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </div>
                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100"
                        >
                            İptal
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            Ekle
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// İçerik Görüntüleme Modal
const ViewPageContentModal = ({ isOpen, onClose, page }) => {
    if (!isOpen || !page) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">{page.baslik} İçeriği</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="border p-4 rounded-lg mb-4">
                    <div className="mb-2">
                        <span className="font-bold">Tablo Adı:</span> {page.tablo}
                    </div>
                    <div className="mb-2">
                        <span className="font-bold">Durum:</span> {page.durum}
                    </div>
                    <div className="mb-2">
                        <span className="font-bold">Son Güncelleme:</span> {page.son_guncelleme}
                    </div>
                    <div className="mb-2">
                        <span className="font-bold">İçerik Örneği:</span>
                    </div>
                    <div className="bg-gray-100 p-3 rounded">
                        <p className="text-gray-700">
                            Bu {page.baslik} sayfasının içeriği veritabanından yüklenecektir. İçerik şu anda demo amaçlı gösterilmektedir.
                            Gerçek uygulamada, bu içerik {page.tablo} tablosundan çekilecektir.
                        </p>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Kapat
                    </button>
                </div>
            </div>
        </div>
    );
};

// Ana Sayfa Yönetim Bileşeni
export default function PagesManagement() {
    const [pages, setPages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedStatus, setSelectedStatus] = useState('Tüm Durumlar');
    const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
    const [sortField, setSortField] = useState('baslik');
    const [sortDirection, setSortDirection] = useState('asc');
    const [selectedPages, setSelectedPages] = useState([]);
    const [actionDropdownId, setActionDropdownId] = useState(null);
    const { searchQuery, setSearchQuery } = useSearch();
    const actionDropdownRef = useRef(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [currentPageToEdit, setCurrentPageToEdit] = useState(null);
    const [currentPageToView, setCurrentPageToView] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetchPages()
            .then(setPages)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    useClickOutside(actionDropdownRef, () => {
        setActionDropdownId(null);
    });

    const handleDeletePage = async (pageId) => {
        if (!window.confirm('Bu sayfayı silmek istediğinizden emin misiniz?')) {
            return;
        }
        try {
            await deletePage(pageId);
            setPages(pages.filter(page => page.id !== pageId));
            setActionDropdownId(null);
        } catch (error) {
            console.error('Failed to delete page:', error);
        }
    };

    // Filtre ve sıralama
    const filteredAndSortedPages = useMemo(() => {
        return pages
            .filter((page) => {
                const status = page?.durum ?? '';
                const baslik = page?.baslik?.toLowerCase() ?? '';
                const tablo = page?.tablo?.toLowerCase() ?? '';
                const searchLower = searchQuery.toLowerCase();

                const matchesSearch =
                    baslik.includes(searchLower) || tablo.includes(searchLower);
                const matchesStatus = selectedStatus === 'Tüm Durumlar' || status === selectedStatus;

                return matchesSearch && matchesStatus;
            })
            .sort((a, b) => {
                const fieldA = a[sortField] || '';
                const fieldB = b[sortField] || '';

                if (sortDirection === 'asc') {
                    return fieldA < fieldB ? -1 : fieldA > fieldB ? 1 : 0;
                } else {
                    return fieldA > fieldB ? -1 : fieldA < fieldB ? 1 : 0;
                }
            });
    }, [pages, searchQuery, selectedStatus, sortField, sortDirection]);

    const handleSort = (field) => {
        if (sortField === field) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortDirection('asc');
        }
    };

    const toggleSelectAll = () => {
        if (selectedPages.length === filteredAndSortedPages.length && filteredAndSortedPages.length > 0) {
            setSelectedPages([]);
        } else {
            setSelectedPages(filteredAndSortedPages.map((page) => page.id));
        }
    };

    const toggleSelectPage = (pageId) => {
        if (selectedPages.includes(pageId)) {
            setSelectedPages(selectedPages.filter((id) => id !== pageId));
        } else {
            setSelectedPages([...selectedPages, pageId]);
        }
    };

    const handleOpenEditModal = (page) => {
        setCurrentPageToEdit(page);
        setIsEditModalOpen(true);
        setActionDropdownId(null);
    };

    const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
        setCurrentPageToEdit(null);
    };

    const handleOpenViewModal = (page) => {
        setCurrentPageToView(page);
        setIsViewModalOpen(true);
        setActionDropdownId(null);
    };

    const handleCloseViewModal = () => {
        setIsViewModalOpen(false);
        setCurrentPageToView(null);
    };

    const handleSavePage = async (pageId, updatedPage) => {
        try {
            const savedPage = await updatePage(pageId, updatedPage);
            setPages((prevPages) => prevPages.map((p) => (p.id === savedPage.id ? savedPage : p)));
            handleCloseEditModal();
        } catch (error) {
            console.error('Failed to update page:', error);
        }
    };

    const handleAddPage = async (newPage) => {
        try {
            const createdPage = await createPage(newPage);
            setPages([...pages, createdPage]);
            setIsAddModalOpen(false);
        } catch (error) {
            console.error('Failed to add page:', error);
        }
    };

    const handleClearFilters = () => {
        setSelectedStatus('Tüm Durumlar');
        if (setSearchQuery) {
            setSearchQuery('');
        }
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <AdminLayout>
            <main className="flex-1 overflow-y-auto p-6">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Sayfalar</h2>
                        <p className="text-gray-500">Web sayfalarını listele ve yönet</p>
                    </div>
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
                    >
                        <Plus size={20} className="mr-2" />
                        Sayfa Ekle
                    </button>
                </div>

                {/* Filters */}
                <div className="bg-white p-4 rounded-lg shadow mb-6">
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="text-gray-700 font-medium">Filtreler:</div>

                        {/* Status Filter */}
                        <div className="relative">
                            <button
                                onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
                                className="flex items-center px-3 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200"
                            >
                                <Filter size={16} className="mr-2" />
                                {selectedStatus}
                                {isStatusDropdownOpen ? <ChevronUp size={16} className="ml-2" /> : <ChevronDown size={16} className="ml-2" />}
                            </button>
                            {isStatusDropdownOpen && (
                                <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg">
                                    <ul className="py-1">
                                        {statusOptions.map((status) => (
                                            <li key={status}>
                                                <button
                                                    onClick={() => {
                                                        setSelectedStatus(status);
                                                        setIsStatusDropdownOpen(false);
                                                    }}
                                                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                                                        selectedStatus === status ? 'bg-blue-50 text-blue-700' : ''
                                                    }`}
                                                >
                                                    {status}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {(selectedStatus !== 'Tüm Durumlar' || searchQuery) && (
                            <button onClick={handleClearFilters} className="text-blue-600 hover:text-blue-800 text-sm">
                                Filtreleri temizle
                            </button>
                        )}

                        {selectedPages.length > 0 && (
                            <div className="ml-auto flex items-center">
                                <span className="text-gray-700">{selectedPages.length} seçili</span>
                                <button onClick={() => setSelectedPages([])} className="ml-2 text-red-600 hover:text-red-800 text-sm">
                                    Seçimi temizle
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Pages Table */}
                <div className="bg-white rounded-lg shadow">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-3 text-left">
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                                            checked={filteredAndSortedPages.length > 0 && selectedPages.length === filteredAndSortedPages.length}
                                            onChange={toggleSelectAll}
                                            disabled={filteredAndSortedPages.length === 0}
                                        />
                                    </div>
                                </th>
                                <th className="px-4 py-3 text-left">
                                    <button
                                        onClick={() => handleSort('baslik')}
                                        className="flex items-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Başlık
                                        {sortField === 'baslik' && (
                                            sortDirection === 'asc' ? (
                                                <ChevronUp size={14} className="ml-1" />
                                            ) : (
                                                <ChevronDown size={14} className="ml-1" />
                                            )
                                        )}
                                    </button>
                                </th>
                                <th className="px-4 py-3 text-left">
                                    <button
                                        onClick={() => handleSort('tablo')}
                                        className="flex items-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Tablo Adı
                                        {sortField === 'tablo' && (
                                            sortDirection === 'asc' ? (
                                                <ChevronUp size={14} className="ml-1" />
                                            ) : (
                                                <ChevronDown size={14} className="ml-1" />
                                            )
                                        )}
                                    </button>
                                </th>
                                <th className="px-4 py-3 text-left">
                                    <button
                                        onClick={() => handleSort('durum')}
                                        className="flex items-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Durum
                                        {sortField === 'durum' && (
                                            sortDirection === 'asc' ? (
                                                <ChevronUp size={14} className="ml-1" />
                                            ) : (
                                                <ChevronDown size={14} className="ml-1" />
                                            )
                                        )}
                                    </button>
                                </th>
                                <th className="px-4 py-3 text-left">
                                    <button
                                        onClick={() => handleSort('son_guncelleme')}
                                        className="flex items-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Son Güncelleme
                                        {sortField === 'son_guncelleme' && (
                                            sortDirection === 'asc' ? (
                                                <ChevronUp size={14} className="ml-1" />
                                            ) : (
                                                <ChevronDown size={14} className="ml-1" />
                                            )
                                        )}
                                    </button>
                                </th>
                                <th className="px-4 py-3 text-right">İşlemler</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            {filteredAndSortedPages.map((page) => (
                                <tr key={page.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-4 whitespace-nowrap">
                                        <input
                                            type="checkbox"
                                            className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                                            checked={selectedPages.includes(page.id)}
                                            onChange={() => toggleSelectPage(page.id)}
                                        />
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                                                {page.baslik ? page.baslik.charAt(0).toUpperCase() : '?'}
                                            </div>
                                            <div className="ml-3">
                                                <div className="text-sm font-medium text-gray-900">{page.baslik}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{page.tablo}</div>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap">
                      <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              page.durum === 'Active'
                                  ? 'bg-green-100 text-green-800'
                                  : page.durum === 'Inactive'
                                      ? 'bg-red-100 text-red-800'
                                      : 'bg-yellow-100 text-yellow-800'
                          }`}
                      >
                        {page.durum}
                      </span>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{page.son_guncelleme}</div>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium relative">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setActionDropdownId(actionDropdownId === page.id ? null : page.id);
                                            }}
                                            className="text-gray-500 hover:text-gray-700"
                                        >
                                            <MoreHorizontal size={16} />
                                        </button>
                                        {actionDropdownId === page.id && (
                                            <div
                                                ref={actionDropdownRef}
                                                className="absolute right-4 mt-2 w-48 bg-white rounded-md shadow-lg z-20"
                                            >
                                                <ul className="py-1">
                                                    <li>
                                                        <button
                                                            onClick={() => handleOpenViewModal(page)}
                                                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                                        >
                                                            <Eye size={16} className="mr-2" />
                                                            İçeriği Görüntüle
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button
                                                            onClick={() => handleOpenEditModal(page)}
                                                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                                        >
                                                            <Edit size={16} className="mr-2" />
                                                            Sayfayı Düzenle
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button
                                                            onClick={() => handleDeletePage(page.id)}
                                                            className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                                                        >
                                                            <Trash size={16} className="mr-2" />
                                                            Sayfayı Sil
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}