"use client"
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import TopNav from './TopNav'
import { Button } from '@/components/ui/button'

function TopNavBar() {
    return (
        <menu className="flex flex-start gap-3">
            <nav className="hidden md:flex w-full max-w-xs gap-1">
                <TopNav />
            </nav>
            <nav className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild className='align-middle'>
                        <Button variant="outline">
                            <Menu />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="top" className='flex flex-col p-4'>
                        <TopNav className="flex-col items-start" />
                    </SheetContent>
                </Sheet>
            </nav>
        </menu>
    )
}

export default TopNavBar
