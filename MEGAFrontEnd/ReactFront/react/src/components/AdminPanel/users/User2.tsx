// src/pages/UsersPage.tsx
import { useEffect, useRef, useState, useMemo } from 'react';
import { Users, Filter, ChevronDown, ChevronUp, MoreHorizontal, Plus, Trash, Edit, Eye } from 'lucide-react';
import AdminLayout from '../_LayoutAdminPanel.tsx';
import { useSearch } from '../context/SearchContext.tsx';
import { fetchUsers, User, updateUser, deleteUser } from '../services/userService.tsx';
import { useClickOutside } from '../../useClickOutside.tsx';
import Loader from '../../loader.tsx';
import EditUserModal from './EditUserModal.tsx';
import AddUserModal from './AddUserModal.tsx';

// Role options for filtering
const roleOptions = ['All Roles', 'Admin', 'Editor', 'User'];
const statusOptions = ['All Status', 'Active', 'Inactive', 'Pending'];

// Main Users Page component
export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedRole, setSelectedRole] = useState('All Roles');
    const [selectedStatus, setSelectedStatus] = useState('All Status');
    const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
    const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
    const [sortField, setSortField] = useState<keyof User>('tcno');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
    const [actionDropdownId, setActionDropdownId] = useState<number | null>(null);
    const { searchQuery, setSearchQuery } = useSearch();
    const actionDropdownRef = useRef<HTMLDivElement>(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [currentUserToEdit, setCurrentUserToEdit] = useState<User | null>(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const handleAddUser = (newUser: User) => {
        setUsers((prev) => [...prev, newUser]);
        setIsAddModalOpen(false); // Close modal after adding
    };

    useEffect(() => {
        setLoading(true);
        fetchUsers()
            .then(setUsers)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    useClickOutside(actionDropdownRef, () => {
        setActionDropdownId(null);
    });
    const handleDeleteUser = async (userId: number) => {
        if (!window.confirm('Are you sure you want to delete this user?')) {
            return;
        }
        try {
            await deleteUser(userId);
            setUsers(users.filter(user => user.id !== userId));
            setActionDropdownId(null); // Close the dropdown after deletion
        } catch (error) {
            console.error('Failed to delete user:', error);
            // You might want to show an error message to the user here
        }
    };
    // Filter and sort users
    const filteredAndSortedUsers = useMemo(() => {
        return users
            .filter((user) => {
                const role = user?.role ?? '';
                const status = user?.status ?? '';
                const tcno = user?.tcno?.toString() ?? '';
                const isim = user?.isim?.toLowerCase() ?? '';
                const searchLower = searchQuery.toLowerCase();

                const matchesSearch =
                    tcno.includes(searchLower) || isim.includes(searchLower) || role.toLowerCase().includes(searchLower);
                const matchesRole = selectedRole === 'All Roles' || role === selectedRole;
                const matchesStatus = selectedStatus === 'All Status' || status === selectedStatus;

                return matchesSearch && matchesRole && matchesStatus;
            })
            .sort((a, b) => {
                const fieldA = a[sortField] || '';
                const fieldB = b[sortField] || '';

                // Sayısal sıralama için tcno kontrolü
                if (sortField === 'tcno') {
                    const valA = Number(fieldA);
                    const valB = Number(fieldB);
                    if (sortDirection === 'asc') {
                        return valA < valB ? -1 : valA > valB ? 1 : 0;
                    } else {
                        return valA > valB ? -1 : valA < valB ? 1 : 0;
                    }
                }

                if (sortDirection === 'asc') {
                    return fieldA < fieldB ? -1 : fieldA > fieldB ? 1 : 0;
                } else {
                    return fieldA > fieldB ? -1 : fieldA < fieldB ? 1 : 0;
                }
            });
    }, [users, searchQuery, selectedRole, selectedStatus, sortField, sortDirection]);

    const handleSort = (field: keyof User) => {
        if (sortField === field) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortDirection('asc');
        }
    };

    const toggleSelectAll = () => {
        if (selectedUsers.length === filteredAndSortedUsers.length && filteredAndSortedUsers.length > 0) {
            setSelectedUsers([]);
        } else {
            setSelectedUsers(filteredAndSortedUsers.map((user) => user.id));
        }
    };

    const toggleSelectUser = (userId: number) => {
        if (selectedUsers.includes(userId)) {
            setSelectedUsers(selectedUsers.filter((id) => id !== userId));
        } else {
            setSelectedUsers([...selectedUsers, userId]);
        }
    };

    const handleOpenEditModal = (user: User) => {
        setCurrentUserToEdit(user);
        setIsEditModalOpen(true);
        setActionDropdownId(null);
    };

    const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
        setCurrentUserToEdit(null);
    };

    const handleSaveUser = async (userid: number, updatedUser: User) => {
        try {
            const savedUser = await updateUser(userid, updatedUser);
            setUsers((prevUsers) => prevUsers.map((u) => (u.id === savedUser.id ? savedUser : u)));
            handleCloseEditModal();
        } catch (error) {
            console.error('Failed to update user:', error);
        }
    };

    const handleClearFilters = () => {
        setSelectedRole('All Roles');
        setSelectedStatus('All Status');
        if (setSearchQuery) {
            setSearchQuery('');
        }
    };

    const handleOpenAddModal = () => {
        console.log('Opening AddUserModal'); // Debugging
        setIsAddModalOpen(true);
    };

    const handleCloseAddModal = () => {
        console.log('Closing AddUserModal'); // Debugging
        setIsAddModalOpen(false);
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <AdminLayout>
            <main className="flex-1 overflow-y-auto p-6">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Kullanıcılar</h2>
                        <p className="text-gray-500">Kullanıcıları Listele ve yönet</p>
                    </div>
                    <button
                        onClick={handleOpenAddModal}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
                    >
                        <Plus size={20} className="mr-2" />
                        Kullanıcı Ekle
                    </button>
                </div>

                {/* Filters */}
                <div className="bg-white p-4 rounded-lg shadow mb-6">
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="text-gray-700 font-medium">Filters:</div>

                        {/* Role Filter */}
                        <div className="relative">
                            <button
                                onClick={() => {
                                    setIsRoleDropdownOpen(!isRoleDropdownOpen);
                                    setIsStatusDropdownOpen(false);
                                }}
                                className="flex items-center px-3 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200"
                            >
                                <Filter size={16} className="mr-2" />
                                {selectedRole}
                                {isRoleDropdownOpen ? <ChevronUp size={16} className="ml-2" /> : <ChevronDown size={16} className="ml-2" />}
                            </button>
                            {isRoleDropdownOpen && (
                                <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg">
                                    <ul className="py-1">
                                        {roleOptions.map((role) => (
                                            <li key={role}>
                                                <button
                                                    onClick={() => {
                                                        setSelectedRole(role);
                                                        setIsRoleDropdownOpen(false);
                                                    }}
                                                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                                                        selectedRole === role ? 'bg-blue-50 text-blue-700' : ''
                                                    }`}
                                                >
                                                    {role}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Status Filter */}
                        <div className="relative">
                            <button
                                onClick={() => {
                                    setIsStatusDropdownOpen(!isStatusDropdownOpen);
                                    setIsRoleDropdownOpen(false);
                                }}
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

                        {(selectedRole !== 'All Roles' || selectedStatus !== 'All Status' || searchQuery) && (
                            <button onClick={handleClearFilters} className="text-blue-600 hover:text-blue-800 text-sm">
                                Filtreleri temizle
                            </button>
                        )}

                        {selectedUsers.length > 0 && (
                            <div className="ml-auto flex items-center">
                                <span className="text-gray-700">{selectedUsers.length} selected</span>
                                <button onClick={() => setSelectedUsers([])} className="ml-2 text-red-600 hover:text-red-800 text-sm">
                                    Seçimi temizle
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Users Table */}
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
                                            checked={filteredAndSortedUsers.length > 0 && selectedUsers.length === filteredAndSortedUsers.length}
                                            onChange={toggleSelectAll}
                                            disabled={filteredAndSortedUsers.length === 0}
                                        />
                                    </div>
                                </th>
                                <th className="px-4 py-3 text-left">
                                    <button
                                        onClick={() => handleSort('tcno')}
                                        className="flex items-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Tc numarası
                                        {sortField === 'tcno' && (
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
                                        onClick={() => handleSort('isim')}
                                        className="flex items-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        İsim Soyisim
                                        {sortField === 'isim' && (
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
                                        onClick={() => handleSort('role')}
                                        className="flex items-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Role
                                        {sortField === 'role' && (
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
                                        onClick={() => handleSort('status')}
                                        className="flex items-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Statü
                                        {sortField === 'status' && (
                                            sortDirection === 'asc' ? (
                                                <ChevronUp size={14} className="ml-1" />
                                            ) : (
                                                <ChevronDown size={14} className="ml-1" />
                                            )
                                        )}
                                    </button>
                                </th>
                                <th className="px-4 py-3 text-right">Actions</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            {filteredAndSortedUsers.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-4 whitespace-nowrap">
                                        <input
                                            type="checkbox"
                                            className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                                            checked={selectedUsers.includes(user.id)}
                                            onChange={() => toggleSelectUser(user.id)}
                                        />
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                                                {user.isim ? user.isim.charAt(0).toUpperCase() : user.tcno.toString().charAt(0)}
                                            </div>
                                            <div className="ml-3">
                                                <div className="text-sm font-medium text-gray-900">{user.tcno}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{user.isim || '-'}</div>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap">
                      <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              user.role === 'Admin'
                                  ? 'bg-red-100 text-red-800'
                                  : user.role === 'Editor'
                                      ? 'bg-yellow-100 text-yellow-800'
                                      : 'bg-green-100 text-green-800'
                          }`}
                      >
                        {user.role}
                      </span>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap">
                      <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              user.status === 'Active'
                                  ? 'bg-green-100 text-green-800'
                                  : user.status === 'Inactive'
                                      ? 'bg-red-100 text-red-800'
                                      : 'bg-yellow-100 text-yellow-800'
                          }`}
                      >
                        {user.status}
                      </span>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium relative">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setActionDropdownId(actionDropdownId === user.id ? null : user.id);
                                            }}
                                            className="text-gray-500 hover:text-gray-700"
                                        >
                                            <MoreHorizontal size={16} />
                                        </button>
                                        {actionDropdownId === user.id && (
                                            <div
                                                ref={actionDropdownRef}
                                                className="absolute right-4 mt-2 w-48 bg-white rounded-md shadow-lg z-20"
                                            >
                                                <ul className="py-1">
                                                    <li>
                                                        <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                                                            <Eye size={16} className="mr-2" />
                                                            View Details
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button
                                                            onClick={() => handleOpenEditModal(user)}
                                                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                                        >
                                                            <Edit size={16} className="mr-2" />
                                                            Edit User
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button
                                                            onClick={() => handleDeleteUser(user.id)}
                                                            className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                                                        >
                                                            <Trash size={16} className="mr-2" />
                                                            Kullanıcıyı Sil
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    {filteredAndSortedUsers.length === 0 && (
                        <div className="text-center py-8">
                            <Users size={64} className="mx-auto text-gray-300 mb-4" />
                            <h3 className="text-lg font-medium text-gray-500 mb-1">Kullanıcı bulunamadı</h3>
                            <p className="text-gray-400">Arama veya filtre kriterlerinizi ayarlamayı deneyin</p>
                        </div>
                    )}

                    <div className="px-6 py-4 flex items-center justify-between border-t">
                        <div className="text-sm text-gray-500">
                            Showing <span className="font-medium">{filteredAndSortedUsers.length}</span> of{' '}
                            <span className="font-medium">{users.length}</span> Kullanıcılar
                        </div>
                        <div className="flex items-center space-x-2">
                            <button className="px-3 py-1 border rounded text-sm disabled:opacity-50">Previous</button>
                            <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm">1</button>
                            <button className="px-3 py-1 border rounded text-sm">Next</button>
                        </div>
                    </div>
                </div>

                {/* Edit User Modal */}
                <EditUserModal
                    isOpen={isEditModalOpen}
                    onClose={handleCloseEditModal}
                    user={currentUserToEdit}
                    onSave={handleSaveUser}
                />

                {/* Add User Modal */}
                <AddUserModal
                    isOpen={isAddModalOpen}
                    onClose={handleCloseAddModal}
                    onAdd={handleAddUser}
                />
            </main>
        </AdminLayout>
    );
}