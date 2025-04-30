import {useEffect, useRef, useState} from 'react';
import {Users, Filter, ChevronDown, ChevronUp, MoreHorizontal, Plus, Trash, Edit, Eye} from 'lucide-react';
import AdminLayout from './_LayoutAdminPanel.tsx';
import {useSearch} from "./context/SearchContext.tsx";
import {fetchUsers, User} from "./services/userService.tsx";
import {useClickOutside} from "../useClickOutside.tsx";



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
    const {searchQuery} = useSearch();
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Filter and sort users
    const filteredUsers = users.filter(user => {
        // Filter by search query
        const role = user?.role ?? ''; // If role is null or undefined, treat it as empty string ''

        const matchesSearch =
            role.toLowerCase().includes(searchQuery.toLowerCase());
        // Filter by role
        const matchesRole = selectedRole === 'All Roles' || role === selectedRole;

        return matchesSearch && matchesRole;
    }).sort((a, b) => {
        // Handle sorting
        const fieldA = a[sortField] || '';
        const fieldB = b[sortField] || '';

        if (sortDirection === 'asc') {
            return fieldA < fieldB ? -1 : fieldA > fieldB ? 1 : 0;
        } else {
            return fieldA > fieldB ? -1 : fieldA < fieldB ? 1 : 0;
        }
        // Close dropdown when clicking outside

    });

    // Handle sort changes
    const handleSort = (field: keyof User) => {
        if (sortField === field) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortDirection('asc');
        }
    };

    // Toggle all user selection
    const toggleSelectAll = () => {
        if (selectedUsers.length === filteredUsers.length) {
            setSelectedUsers([]);
        } else {
            setSelectedUsers(filteredUsers.map(user => user.id));
        }
    };

    // Toggle single user selection
    const toggleSelectUser = (userId: number) => {
        if (selectedUsers.includes(userId)) {
            setSelectedUsers(selectedUsers.filter(id => id !== userId));
        } else {
            setSelectedUsers([...selectedUsers, userId]);
        }
    };

    useEffect(() => {
        fetchUsers()
            .then(setUsers)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);
    // Close dropdown when clicking outside
    useClickOutside(dropdownRef, () => {
        setActionDropdownId(null);
    });
    return (
        <AdminLayout>

            {/* Content */}
            <main className="flex-1 overflow-y-auto p-6">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-2xl font-bold">Users Management</h2>
                        <p className="text-gray-500">Manage and monitor user accounts</p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center">
                        <Plus size={16} className="mr-2"/>
                        Add New User
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
                                <Filter size={16} className="mr-2"/>
                                {selectedRole}
                                <ChevronDown size={16} className="ml-2"/>
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
                                                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${selectedRole === role ? 'bg-blue-50 text-blue-700' : ''}`}
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
                                <Filter size={16} className="mr-2"/>
                                {selectedStatus}
                                <ChevronDown size={16} className="ml-2"/>
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
                                                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${selectedStatus === status ? 'bg-blue-50 text-blue-700' : ''}`}
                                                >
                                                    {status}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Clear Filters */}
                        {(selectedRole !== 'All Roles' || selectedStatus !== 'All Status' || searchQuery) && (
                            <button
                                onClick={() => {
                                    setSelectedRole('All Roles');
                                    setSelectedStatus('All Status');
                                }}
                                className="text-blue-600 hover:text-blue-800 text-sm"
                            >
                                Clear filters
                            </button>
                        )}

                        {/* Show selected count */}
                        {selectedUsers.length > 0 && (
                            <div className="ml-auto flex items-center">
                                <span className="text-gray-700">{selectedUsers.length} selected</span>
                                <button
                                    onClick={() => setSelectedUsers([])}
                                    className="ml-2 text-red-600 hover:text-red-800 text-sm"
                                >
                                    Clear selection
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
                                            checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                                            onChange={toggleSelectAll}
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
                                            sortDirection === 'asc' ?
                                                <ChevronUp size={14} className="ml-1"/> :
                                                <ChevronDown size={14} className="ml-1"/>
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
                                            sortDirection === 'asc' ?
                                                <ChevronUp size={14} className="ml-1"/> :
                                                <ChevronDown size={14} className="ml-1"/>
                                        )}
                                    </button>
                                </th>
                                {/* Ornek
                                <th className="px-4 py-3 text-left">
                                    <button
                                        onClick={() => handleSort('sütun')}
                                        className="flex items-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        sütun
                                        {sortField === 'sütun' && (
                                            sortDirection === 'asc' ?
                                                <ChevronUp size={14} className="ml-1"/> :
                                                <ChevronDown size={14} className="ml-1"/>
                                        )}
                                    </button>
                                </th>
                                */}
                                <th className="px-4 py-3 text-right">Actions</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            {filteredUsers.map((user) => (
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
                                            <div
                                                className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-bold">
                                                {user.tcno.toString().charAt(0)}
                                            </div>
                                            <div className="ml-3">
                                                <div className="text-sm font-medium text-gray-900">{user.tcno}</div>
                                            </div>
                                        </div>
                                    </td>
                                    {/*
                                    <td className="px-4 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{user.isim}</div>
                                    </td>
                                    */}
                                    <td className="px-4 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{user.role}</div>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium relative">
                                        <button

                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setActionDropdownId(actionDropdownId === user.id ? null : user.id);
                                            }}
                                            className="text-gray-500 hover:text-gray-700"
                                        >
                                            <MoreHorizontal size={16}/>
                                        </button>

                                        {actionDropdownId === user.id && (
                                            <div
                                                ref={dropdownRef}
                                                className="absolute right-4 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                                                <ul className="py-1">
                                                    <li>
                                                        <button
                                                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                                                            <Eye size={16} className="mr-2"/>
                                                            View Details
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button
                                                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                                                            <Edit size={16} className="mr-2"/>
                                                            Edit User
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button
                                                            className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left">
                                                            <Trash size={16} className="mr-2"/>
                                                            Delete User
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

                    {filteredUsers.length === 0 && (
                        <div className="text-center py-8">
                            <Users size={64} className="mx-auto text-gray-300 mb-4"/>
                            <h3 className="text-lg font-medium text-gray-500 mb-1">No users found</h3>
                            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
                        </div>
                    )}

                    {/* Pagination */}
                    <div className="px-6 py-4 flex items-center justify-between border-t">
                        <div className="text-sm text-gray-500">
                            Showing <span className="font-medium">{filteredUsers.length}</span> of <span
                            className="font-medium">{users.length}</span> users
                        </div>
                        <div className="flex items-center space-x-2">
                            <button className="px-3 py-1 border rounded text-sm disabled:opacity-50">Previous</button>
                            <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm">1</button>
                            <button className="px-3 py-1 border rounded text-sm">2</button>
                            <button className="px-3 py-1 border rounded text-sm">3</button>
                            <button className="px-3 py-1 border rounded text-sm">Next</button>
                        </div>
                    </div>
                </div>
            </main>
        </AdminLayout>

    );
}