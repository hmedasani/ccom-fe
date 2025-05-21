import UserHeader from "./UserHeader";

export default function UserLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <UserHeader />
            <main className="flex-1 wrapper p-6">
                {children}
            </main>
        </>
    );
}
