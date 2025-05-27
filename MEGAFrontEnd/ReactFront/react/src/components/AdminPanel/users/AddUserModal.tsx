// src/components/AddUserModal.tsx
import React, { useState } from 'react';
import { User } from '../services/userService.tsx';
import { X } from 'lucide-react';
import {createUser} from '../services/userService.tsx';


// Düzenlenebilir statüler (Filtrelerdeki "All Status" hariç)
const assignableStatusOptions = ['Active', 'Inactive', 'Pending'];

// Spring Boot API endpoint

interface AddUserModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (newUser: User) => void;
}
const defaultYetkiler = {
    "kurumsal": {"goruntuleme": true, "duzenleme": false, "ekleme": false},
    "gebze": {"goruntuleme": true, "duzenleme": false},
    "hizmetler": {"goruntuleme": true, "duzenleme": false, "silme": false}
};


export default function AddUserModal({ isOpen, onClose, onAdd }: AddUserModalProps) {
    const [formData, setFormData] = useState<Partial<User>>({
        tcno: '',
        isim: '',
        password: '',
        status: assignableStatusOptions[0],
        yetkilerJson: JSON.stringify(defaultYetkiler),

    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    // Modal kapalıysa hiçbir şey render etme
    if (!isOpen) {
        return null;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage(null);

        try {
            if (formData.tcno && formData.isim && formData.password && formData.yetkilerJson && formData.status) {
                const newUserData = {
                    tcno: formData.tcno,
                    isim: formData.isim,
                    password: formData.password,
                    yetkilerJson: formData.yetkilerJson,
                    status: formData.status,
                };

                // Use the createUser service function instead of direct axios call
                const createdUser = await createUser(newUserData);

                onAdd(createdUser);
                onClose(); // Close the modal
            } else {
                throw new Error('Please fill in all required fields');
            }
        } catch (error: any) {
            console.error('Failed to add user:', error);
            // Use the error message from the service function
            setErrorMessage(error.message || 'User creation failed');
        } finally {
            setIsSubmitting(false);
        }
    };

    // İptal butonu veya X butonu ile modal'ı kapat
    const handleClose = () => {
        console.log('Closing modal'); // Debugging için
        setFormData({
            tcno: '',
            isim: '',
            password: '',
            status: assignableStatusOptions[0],
        });
        setErrorMessage(null);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">Add User</h3>
                    <button
                        type="button" // Explicitly set type to avoid form submission
                        onClick={handleClose}
                        className="text-gray-500 hover:text-gray-700 focus:outline-none"
                        aria-label="Close modal"
                    >
                        <X size={24} />
                    </button>
                </div>

                {errorMessage && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                        {errorMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="tcno" className="block text-sm font-medium text-gray-700 mb-1">
                            TC Kimlik No
                        </label>
                        <input
                            type="text"
                            id="tcno"
                            name="tcno"
                            value={formData.tcno || ''}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                           Parola
                        </label>
                        <input
                            type="text"
                            id="password"
                            name="password"
                            value={formData.password || ''}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="isim" className="block text-sm font-medium text-gray-700 mb-1">
                            İsim Soyisim
                        </label>
                        <input
                            type="text"
                            id="isim"
                            name="isim"
                            value={formData.isim || ''}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                            Status
                        </label>
                        <select
                            id="status"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            {assignableStatusOptions.map((status) => (
                                <option key={status} value={status}>
                                    {status}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Yetkiler alanını gizli input olarak ekleyelim */}
                    <input
                        type="hidden"
                        name="yetkilerJson"
                        value={formData.yetkilerJson}
                    />

                    <div className="flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={handleClose}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 disabled:bg-gray-300 disabled:text-gray-500"
                            disabled={isSubmitting}
                        >
                            İptal
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Ekleniyor...' : 'Ekle'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}