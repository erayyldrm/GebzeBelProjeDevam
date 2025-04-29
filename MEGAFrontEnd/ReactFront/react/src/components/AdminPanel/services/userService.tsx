// src/api/userService.ts
export interface User {
    id: number;
    tcno: number;
    password: string;
    role: string;
}

export async function fetchUsers(): Promise<User[]> {
    const response = await fetch("http://localhost:8080/api/users", {
        method: "GET",
        credentials: "include"
    });
    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }
    return response.json();
}
