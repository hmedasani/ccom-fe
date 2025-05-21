import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const Brand = () => {
    return (
        <div className="flex flex-start gap-2 items-center">
            <Link href="/" className="flex-start">
                <Image src={"/images/logo.svg"}
                    alt={APP_NAME}
                    width={60}
                    height={60}
                    priority={true}
                />
            </Link>
            <Link href="/" className="hidden lg:block font-bold text-2xl mt-1">
                {APP_NAME}
            </Link>
        </div>
    );
}

export default Brand;