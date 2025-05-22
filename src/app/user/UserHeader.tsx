import Brand from "@/components/shared/header/Brand";
import UserMainNav from "./UserMainNav";
import Menu from "@/components/shared/header/Menu";

const UserHeader = () => {
    return (
        <header className="w-full border-b p-4">
            <div className="flex justify-between">
                <Brand />
                <UserMainNav />
                <div className='ml-auto items-center flex space-x-4'>
                    <Menu />
                </div>
            </div>
        </header>
    );
}

export default UserHeader;