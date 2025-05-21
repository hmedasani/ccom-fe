import { Button } from "@/components/ui/button";
import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import ModeToggle from "./ModeToggle";

const UserBar = () => {
    return (
        <div className="space-x-2">
            <ModeToggle />
            <Button asChild variant="ghost">
                <Link href="/cart">
                    <ShoppingCart color="black" /> Cart
                </Link>
            </Button>
            <Button asChild >
                <Link href="/sign-in">
                    <User /> Sign-In
                </Link>
            </Button>
        </div>
    );
}

export default UserBar;