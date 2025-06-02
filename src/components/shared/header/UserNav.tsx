"use setate"
import ThemeToggle from '@/assets/themes/ThemeToggle'
import Signout from '@/components/Signout'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { avatar_usernav } from '@/lib/constants/ui'
import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { Settings, User } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

export interface ClassNameProps {
    className?: string
}

function UserNav({ className }: ClassNameProps) {
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false)

    const signHandler = () => setIsSignedIn((prev) => !prev)

    return (
        <nav className={cn(`${className} flex gap-2 items-center`)}>
            <ThemeToggle />
            <Button asChild variant="ghost">
                <Link href={"/settings"}>
                    <Settings />
                </Link>
            </Button>
            {isSignedIn ?
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar className='bg-sky-300 rounded-4xl flex justify-center items-center' style={{ width: `${avatar_usernav.w}px`, height: `${avatar_usernav.h}px` }}>
                            <AvatarImage />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            <Signout />
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                : <Button asChild onClick={signHandler}>
                    <Link href="/signin">
                        <User /> Signin
                    </Link>
                </Button>
            }



        </nav>
    )
}

export default UserNav
