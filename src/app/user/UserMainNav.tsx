'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const links = [
    { title: "Profile", href: "/user/profile" },
    { title: "Orders", href: "/user/orders" }
]

function UserMainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    const pathName = usePathname()
    return (
        <div className='ml-auto items-center flex space-x-4'>
            <nav className={cn('flex items-center space-x-4 lg:space-x-6', className)} {...props}>
                {links.map((item, index) => (
                    <Link key={index} href={item.href}
                        className={cn("text-sm font-medium transition-colors hover:primary",
                            pathName.includes(item.href) ? "" : "text-muted-foreground")}
                    >{item.title}</Link>
                ))}
            </nav>
        </div>
    )
}

export default UserMainNav
