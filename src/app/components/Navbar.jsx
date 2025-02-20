import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
    const pathname = usePathname();
    const [showNavbar, setShowNavbar] = useState(true);
    const [showDevMessage, setShowDevMessage] = useState(true); // State to toggle the dev message

    useEffect(() => {
        if (typeof window !== "undefined" && window.innerWidth <= 832) {
            setShowNavbar(false);
        }
    }, []);

    const handleMailClick = () => {
        window.location.href = "mailto:works.saikat@gmail.com";
    };

    return (
        <div className='flex lg:flex-row p-12 items-center justify-around lg:justify-between gap-3 md:gap-0 fixed z-50 bg-[#F4F4F4] w-full '>
            {showNavbar && (
                <div className='flex flex-col lg:flex-row bg-[#EBEBEB] w-2/5 lg:w-1/5 gap-8 lg:gap-0 p-8 lg:px-1 lg:justify-between lg:py-1 rounded-lg lg:rounded-full absolute lg:static self-end items-center z-20 top-[15%] right-0'>
                    <div className={`py-1 px-3 rounded-full ${pathname === "/" ? "bg-[#FFFFFF]" : ""}`}>
                        <Link href="/">All</Link>
                    </div>
                    <div className={`py-1 px-3 rounded-full ${pathname === "/about" ? "bg-[#FFFFFF]" : ""}`}>
                        <Link href="/about">About</Link>
                    </div>
                    <div className={`py-1 px-3 rounded-full ${pathname === "/projects" ? "bg-[#FFFFFF]" : ""}`}>
                        <Link href="/projects">Projects</Link>
                    </div>
                    <div className={`py-1 px-3 rounded-full ${pathname === "/blogs" ? "bg-[#FFFFFF]" : ""}`}>
                        <Link href="/blogs">Blogs</Link>
                    </div>
                </div>
            )}

            {/* {showDevMessage && (
                <div className='md:block hidden px-3 py-1 border-2 border-dashed border-orange-500 rounded-full'>
                    <p className='typewriter'>Website still under development</p>
                </div>
            )} */}

            <button onClick={handleMailClick} className='px-3 py-1 border-4 hover:scale-105 border-orange-500 rounded-full'>
                Connect
            </button>

            <span onClick={() => setShowNavbar(prev => !prev)} className='lg:hidden block cursor-pointer text-2xl'>
                <GiHamburgerMenu />
            </span>
        </div>
    );
}

export default Navbar;
