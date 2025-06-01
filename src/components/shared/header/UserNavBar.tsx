import React from 'react'
import UserNav from './UserNav'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { EllipsisVertical } from 'lucide-react'

function UserNavBar() {
    return (
        <menu className="flex flex-end gap-3">
            <nav className="hidden md:flex w-full max-w-xs gap-1">
                <UserNav className='flex-row items-end' />
            </nav>
            <nav className="md:hidden">
                <Sheet>
                    <SheetTrigger className='align-middle'>
                        <EllipsisVertical />
                    </SheetTrigger>
                    <SheetContent className='flex flex-col p-4'>
                        <SheetTitle>User</SheetTitle>
                        <UserNav className="flex-col items-start" />
                    </SheetContent>
                </Sheet>
            </nav>
        </menu>
    )
}

export default UserNavBar
