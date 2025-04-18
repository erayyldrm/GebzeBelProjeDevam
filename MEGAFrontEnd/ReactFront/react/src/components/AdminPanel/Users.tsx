import { useState } from 'react';
import { Users, Filter, ChevronDown, ChevronUp, MoreHorizontal, Plus, Trash, Edit, Eye } from 'lucide-react';
import AdminLayout from './_LayoutAdminPanel.tsx';
import {useSearch} from "./context/SearchContext.tsx";


// Define TypeScript interfaces
interface UserData {
    id: number;
    name: string;
    email: string;
    role: string;
    status: 'active' | 'inactive' | 'pending';
    lastActive: string;
    location: string;
    joinDate: string;
    avatar?: string;
}

// Mock users data
const mockUsers: UserData[] = [
    { id: 1, name: 'John Smith', email: 'john@example.com', role: 'Admin', status: 'active', lastActive: '2 mins ago', location: 'New York, USA', joinDate: '15 Jan 2024' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', role: 'Editor', status: 'active', lastActive: '1 hour ago', location: 'London, UK', joinDate: '3 Mar 2024' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', role: 'User', status: 'inactive', lastActive: '3 days ago', location: 'Toronto, Canada', joinDate: '28 Nov 2023' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', role: 'Admin', status: 'active', lastActive: '5 mins ago', location: 'Sydney, Australia', joinDate: '7 Feb 2024' },
    { id: 5, name: 'Robert Wilson', email: 'robert@example.com', role: 'User', status: 'pending', lastActive: '1 week ago', location: 'Berlin, Germany', joinDate: '12 Apr 2024' },
    { id: 6, name: 'Jennifer Lee', email: 'jennifer@example.com', role: 'Editor', status: 'active', lastActive: '3 hours ago', location: 'Paris, France', joinDate: '9 Jan 2024' },
    { id: 7, name: 'David Clark', email: 'david@example.com', role: 'User', status: 'inactive', lastActive: '2 weeks ago', location: 'Tokyo, Japan', joinDate: '5 Dec 2023' },
    { id: 8, name: 'Lisa Wong', email: 'lisa@example.com', role: 'User', status: 'active', lastActive: '45 mins ago', location: 'Singapore', joinDate: '18 Mar 2024' },
    { id: 9, name: 'Kevin Martinez', email: 'kevin@example.com', role: 'Admin', status: 'active', lastActive: '1 day ago', location: 'Madrid, Spain', joinDate: '22 Feb 2024' },
    { id: 10, name: 'Anna Taylor', email: 'anna@example.com', role: 'Editor', status: 'pending', lastActive: '4 days ago', location: 'Rome, Italy', joinDate: '30 Nov 2023' },
];

// Role options for filtering
const roleOptions = ['All Roles', 'Admin', 'Editor', 'User'];
const statusOptions = ['All Status', 'Active', 'Inactive', 'Pending'];

// Status Badge component
const StatusBadge: React.FC<{ status: 'active' | 'inactive' | 'pending' }> = ({ status }) => {
    const colors = {
        active: 'bg-green-100 text-green-800',
        inactive: 'bg-red-100 text-red-800',
        pending: 'bg-yellow-100 text-yellow-800',
    };

    return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
    );
};

// Main Users Page component
export default function UsersPage() {
    const [selectedRole, setSelectedRole] = useState('All Roles');
    const [selectedStatus, setSelectedStatus] = useState('All Status');
    const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
    const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
    const [sortField, setSortField] = useState<keyof UserData>('name');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
    const [actionDropdownId, setActionDropdownId] = useState<number | null>(null);
    const { searchQuery } = useSearch();

    // Filter and sort users
    const filteredUsers = mockUsers.filter(user => {
        // Filter by search query
        const matchesSearch =
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.location.toLowerCase().includes(searchQuery.toLowerCase());

        // Filter by role
        const matchesRole = selectedRole === 'All Roles' || user.role === selectedRole;

        // Filter by status
        const matchesStatus =
            selectedStatus === 'All Status' ||
            user.status === selectedStatus.toLowerCase() as 'active' | 'inactive' | 'pending';

        return matchesSearch && matchesRole && matchesStatus;
    }).sort((a, b) => {
        // Handle sorting
        const fieldA = a[sortField] || '';
        const fieldB = b[sortField] || '';

        if (sortDirection === 'asc') {
            return fieldA < fieldB ? -1 : fieldA > fieldB ? 1 : 0;
        } else {
            return fieldA > fieldB ? -1 : fieldA < fieldB ? 1 : 0;
        }
    });

    // Handle sort changes
    const handleSort = (field: keyof UserData) => {
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
                            <Plus size={16} className="mr-2" />
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
                                    <Filter size={16} className="mr-2" />
                                    {selectedRole}
                                    <ChevronDown size={16} className="ml-2" />
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
                                    <Filter size={16} className="mr-2" />
                                    {selectedStatus}
                                    <ChevronDown size={16} className="ml-2" />
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
                                            onClick={() => handleSort('name')}
                                            className="flex items-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Name
                                            {sortField === 'name' && (
                                                sortDirection === 'asc' ?
                                                    <ChevronUp size={14} className="ml-1" /> :
                                                    <ChevronDown size={14} className="ml-1" />
                                            )}
                                        </button>
                                    </th>
                                    <th className="px-4 py-3 text-left">
                                        <button
                                            onClick={() => handleSort('email')}
                                            className="flex items-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Email
                                            {sortField === 'email' && (
                                                sortDirection === 'asc' ?
                                                    <ChevronUp size={14} className="ml-1" /> :
                                                    <ChevronDown size={14} className="ml-1" />
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
                                                    <ChevronUp size={14} className="ml-1" /> :
                                                    <ChevronDown size={14} className="ml-1" />
                                            )}
                                        </button>
                                    </th>
                                    <th className="px-4 py-3 text-left">
                                        <button
                                            onClick={() => handleSort('status')}
                                            className="flex items-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Status
                                            {sortField === 'status' && (
                                                sortDirection === 'asc' ?
                                                    <ChevronUp size={14} className="ml-1" /> :
                                                    <ChevronDown size={14} className="ml-1" />
                                            )}
                                        </button>
                                    </th>
                                    <th className="px-4 py-3 text-left">
                                        <button
                                            onClick={() => handleSort('location')}
                                            className="flex items-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Location
                                            {sortField === 'location' && (
                                                sortDirection === 'asc' ?
                                                    <ChevronUp size={14} className="ml-1" /> :
                                                    <ChevronDown size={14} className="ml-1" />
                                            )}
                                        </button>
                                    </th>
                                    <th className="px-4 py-3 text-left">
                                        <button
                                            onClick={() => handleSort('joinDate')}
                                            className="flex items-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Join Date
                                            {sortField === 'joinDate' && (
                                                sortDirection === 'asc' ?
                                                    <ChevronUp size={14} className="ml-1" /> :
                                                    <ChevronDown size={14} className="ml-1" />
                                            )}
                                        </button>
                                    </th>
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
                                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-bold">
                                                    {user.name.charAt(0)}
                                                </div>
                                                <div className="ml-3">
                                                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{user.email}</div>
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{user.role}</div>
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            <StatusBadge status={user.status} />
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{user.location}</div>
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-500">{user.joinDate}</div>
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium relative">
                                            <button
                                                onClick={() => setActionDropdownId(actionDropdownId === user.id ? null : user.id)}
                                                className="text-gray-500 hover:text-gray-700"
                                            >
                                                <MoreHorizontal size={16} />
                                            </button>

                                            {actionDropdownId === user.id && (
                                                <div className="absolute right-4 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                                                    <ul className="py-1">
                                                        <li>
                                                            <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                                                                <Eye size={16} className="mr-2" />
                                                                View Details
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                                                                <Edit size={16} className="mr-2" />
                                                                Edit User
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left">
                                                                <Trash size={16} className="mr-2" />
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
                                <Users size={64} className="mx-auto text-gray-300 mb-4" />
                                <h3 className="text-lg font-medium text-gray-500 mb-1">No users found</h3>
                                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
                            </div>
                        )}

                        {/* Pagination */}
                        <div className="px-6 py-4 flex items-center justify-between border-t">
                            <div className="text-sm text-gray-500">
                                Showing <span className="font-medium">{filteredUsers.length}</span> of <span className="font-medium">{mockUsers.length}</span> users
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