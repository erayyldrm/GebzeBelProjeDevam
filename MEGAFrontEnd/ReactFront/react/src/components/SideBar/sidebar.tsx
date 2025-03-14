import React, { useState } from "react";
import { Home, Settings, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
    const [active, setActive] = useState(null);

    const menuItems = [
        { id: 1, icon: <Home />, text: "Home" },
        { id: 2, icon: <User />, text: "Profile" },
        { id: 3, icon: <Settings />, text: "Settings" },
    ];

    return (
        <div className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4">
            {menuItems.map((item) => (
                <Card
                    key={item.id}
                    className={`mb-2 p-3 flex items-center cursor-pointer rounded-lg transition-all ${
                        active === item.id ? "bg-gray-700" : "bg-gray-800"
                    }`}
                    onClick={() => setActive(item.id)}
                >
                    {item.icon}
                    <span className="ml-2">{item.text}</span>
                </Card>
            ))}
        </div>
    );
};

export default Sidebar;
