import React from 'react'
import { Button } from './ui/button'
import { LogOut } from 'lucide-react'
import { toast } from "sonner";

function Signout() {

    const handleLogout = () => {
        toast.success("Logged out successfully", {
            description: "You have been safely logged out of your account",
        });
        // Redirect to home
        window.location.href = "/";
    };

    return (
        <Button variant="outline" onClick={handleLogout} className="text-red-600 hover:text-red-700">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
        </Button>
    )
}

export default Signout
