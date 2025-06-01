import { Button } from '@/components/ui/button'
import { dataTopnav } from '@/db/dataTopnav'
import { cn } from '@/lib/utils'

import Link from 'next/link'
import React from 'react'
import { ClassNameProps } from './UserNav'

function TopNav({ className }: ClassNameProps) {
    const renderedNav = dataTopnav.map((nav) => (
        <Button key={nav.href} variant={"ghost"} >
            <Link href={nav.href} className='flex gap-1 justify-center items-center'>
                <nav.icon /> {nav.title}
            </Link>
        </Button>
    ))
    return (
        <nav className={cn(`${className} flex gap-2 items-center`)}>
            {renderedNav}
        </nav>
    )
}

export default TopNav
