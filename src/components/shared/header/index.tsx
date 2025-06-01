"use client"
import React from 'react'
import Brand from './Brand'
import UserNavBar from './UserNavBar'
import TopNavBar from './TopNavBar'

export default function Header() {
    return (
        <header className="flex justify-between p-4 items-center bg-secondary border-b-2 border-muted">
            <Brand />
            <TopNavBar />
            <UserNavBar />
        </header>
    )
}
