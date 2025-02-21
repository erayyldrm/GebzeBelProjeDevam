import { useState, useEffect } from "react";

interface User {
    id: number;
    name: string;
    email: string;
}

const RegistrationPage = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [editingUser, setEditingUser] = useState<User | null>(null);

    // Fetch users on component mount
    useEffect(() => {
        fetchUsers();
    }, []);

    // Fetch all registered users from backend
    const fetchUsers = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/register");
            if (!response.ok) {
                throw new Error("Failed to fetch users");
            }
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    // Handle adding a new user
    const handleAddUser = async () => {
        // Basic validation to ensure inputs are filled
        if (!name.trim() || !email.trim()) {
            alert("Both name and email are required!");
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: name.trim(), email: email.trim() }),
            });
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || "Failed to add user");
            }
            // Reload the user list and clear the form
            fetchUsers();
            setName("");
            setEmail("");
        } catch (error: unknown) {
            let message = "An unexpected error occurred";
            if (error instanceof Error) {
                message = error.message;
            }
            console.error(message);
            alert(message);
        }

    };

    // Handle updating an existing user
    const handleEditUser = async () => {
        if (!editingUser) return;

        try {
            const response = await fetch(
                `http://localhost:8080/api/register/${editingUser.id}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name: name.trim(), email: email.trim() }),
                }
            );

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || "Failed to update user");
            }
            // Reset form after editing and reload users
            setEditingUser(null);
            setName("");
            setEmail("");
            fetchUsers();
        } catch (error: unknown) {
            let message = "An unexpected error occurred";
            if (error instanceof Error) {
                message = error.message;
            }
            console.error(message);
            alert(message);
        }

    };

    // Handle deletion of a user
    const handleDeleteUser = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:8080/api/register/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || "Failed to delete user");
            }
            fetchUsers();
        } catch (error: unknown) {
            let message = "An unexpected error occurred";
            if (error instanceof Error) {
                message = error.message;
            }
            console.error(message);
            alert(message);
        }

    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>User Registration</h2>

            <div style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ marginRight: "10px" }}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    autoComplete={"email"}
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ marginRight: "10px" }}
                />
                {editingUser ? (
                    <button onClick={handleEditUser}>Update User</button>
                ) : (
                    <button onClick={handleAddUser}>Register User</button>
                )}
            </div>

            <h3>Registered Users</h3>
            {users.length === 0 ? (
                <p>No users registered yet.</p>
            ) : (
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    {users.map((user) => (
                        <li
                            key={user.id}
                            style={{
                                border: "1px solid #ccc",
                                padding: "10px",
                                marginBottom: "10px",
                                display: "inline-block",
                                width: "300px",
                            }}
                        >
                            <p>
                                <strong>Name:</strong> {user.name}
                            </p>
                            <p>
                                <strong>Email:</strong> {user.email}
                            </p>
                            <button
                                onClick={() => {
                                    setEditingUser(user);
                                    setName(user.name);
                                    setEmail(user.email);
                                }}
                                style={{ marginRight: "10px" }}
                            >
                                Edit
                            </button>
                            <button onClick={() => handleDeleteUser(user.id)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RegistrationPage;