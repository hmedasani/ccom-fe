import { APP_NAME } from '../lib/constants/index';
const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer className='flex border-t justify-center'>
            <div className="p-5">
                {APP_NAME} &copy; {currentYear}.  All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;