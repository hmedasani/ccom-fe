import Brand from "./Brand";
import UserBar from "./UserBar";



const Header = () => {
    return (<header className="w-full border-b p-2">
        <div className="flex justify-between">
            <Brand />
            <UserBar />
        </div>
    </header>);
}

export default Header;