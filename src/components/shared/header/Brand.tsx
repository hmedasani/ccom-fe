import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const Brand = () => {
    return (
        <div className="flex flex-start gap-2 items-center">
            <Link href={"/"} className="flex-start">
                <Image src={"/images/logo.svg"}
                    alt={APP_NAME}
                    width={40}
                    height={40}
                    priority={true}
                />
            </Link>
            <span className="hidden lg:block font-bold text-2xl">
                {APP_NAME}
            </span>
        </div>
    );
}

export default Brand;