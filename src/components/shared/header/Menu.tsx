import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import UserBar from "./UserBar";
import { EllipsisVertical } from "lucide-react";

const Menu = () => {
    return (
        <div className="flex justify-end gap-3">
            <nav className="hidden md:flex w-full max-w-xs gap-1">
                <UserBar />
            </nav>
            <nav className="md:hidden">
                <Sheet>
                    <SheetTrigger className="align-middle">
                        <EllipsisVertical />
                    </SheetTrigger>
                    <SheetContent className="flex flex-col items-start">
                        <SheetTitle>
                            Menu
                        </SheetTitle>
                        <UserBar />
                        <SheetDescription>

                        </SheetDescription>
                    </SheetContent>
                </Sheet>
            </nav>
        </div>
    );
}

export default Menu;