import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import Switch from "react-switch";
import ContactModal from './modals/ContactModal';
function Navbar() {
    const pathname = usePathname()

    return (
        <div className='flex p-12 items-center justify-between'>
            {/* <Switch /> */}
            <div className=' flex bg-[#EBEBEB] w-1/5 px-1 justify-between py-1 rounded-full '>
                <div className={`py-1 px-3 rounded-full ${pathname == "/" ? "bg-[#FFFFFF]" : ""}`} > <Link href="/">All</Link></div>
                <div className={`py-1 px-3 rounded-full ${pathname == "/about" ? "bg-[#FFFFFF]" : ""}`} > <Link href="/about">About</Link></div>
                <div className={`py-1 px-3 rounded-full ${pathname == "/projects" ? "bg-[#FFFFFF]" : ""}`} > <Link href="/projects">Projects</Link></div>
                <div className={`py-1 px-3 rounded-full ${pathname == "/blogs" ? "bg-[#FFFFFF]" : ""}`} > <Link href="/blogs">Blogs</Link></div>
                {/* <div className={`py-1 px-3 rounded-full ${pathname == "/login" ? "bg-[#FFFFFF]" : ""}`} > <Link href="/login">Login</Link></div>
                <div className={`py-1 px-3 rounded-full ${pathname == "/register" ? "bg-[#FFFFFF]" : ""}`} > <Link href="/signup">Register</Link></div> */}
            </div>

            <button onClick={() => { setModalOpen(true) }} className=' px-3 py-1 border-4 hover:scale-105 border-orange-500 rounded-full'>Connect</button>
        </div>
    )
}

export default Navbar