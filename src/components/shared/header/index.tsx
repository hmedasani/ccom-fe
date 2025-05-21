import Menu from "./Menu";
import Brand from "./Brand";

const Header = () => {
    return (<header className="w-full border-b p-4">
        <div className="flex justify-between">
            <Brand />
            <Menu />
        </div>
    </header>);
}

export default Header;