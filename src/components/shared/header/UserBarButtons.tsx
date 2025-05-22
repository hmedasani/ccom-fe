import { Button } from "@/components/ui/button";
import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";
const UserBarButtons = () => {
    return (<>
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
        <Button asChild >
            <Link href="/user/orders">
                <User />Orders
            </Link>
        </Button>

    </>);
}

export default UserBarButtons;