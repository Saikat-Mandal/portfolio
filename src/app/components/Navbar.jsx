import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
    const pathname = usePathname();
    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        if (typeof window !== "undefined" && window.innerWidth <= 832) {
            setShowNavbar(false);
        }
    }, []);

    const handleMailClick = () => {
        window.location.href = "mailto:works.saikat@gmail.com";
    };

    return (
        <div className="flex lg:flex-row p-12 items-center justify-around lg:justify-between gap-3 md:gap-0 fixed z-50 bg-[#F4F4F4] w-full">
            {showNavbar && (
                <div className="flex flex-col lg:flex-row bg-[#EBEBEB] w-2/5 lg:w-1/5 gap-8 lg:gap-0 p-8 lg:px-1 lg:justify-between lg:py-2 rounded-lg lg:rounded-full absolute lg:static self-end items-center z-20 top-[15%] right-0">
                    {["/", "/about", "/projects", "/blogs"].map((route, index) => {
                        const titles = ["All", "About", "Projects", "Blogs"];
                        return (
                            <div key={index} className="relative group">
                                <Link
                                    href={route}
                                    className={`py-1 px-3 rounded-full transition-all duration-500 ease-in-out
                                    ${pathname === route
                                            ? "bg-white transition-colors duration-700 ease-out"
                                            : "hover:scale-105 hover:text-[#6E6E6E] hover:bg-white transition-colors duration-500"}`
                                    }
                                >
                                    {titles[index]}
                                </Link>
                            </div>

                        );
                    })}
                </div>
            )}

            <button
                onClick={handleMailClick}
                className="px-3 py-1 border-4 hover:scale-105 transition-all duration-500 border-orange-500 rounded-full"
            >
                Connect
            </button>

            <span
                onClick={() => setShowNavbar((prev) => !prev)}
                className="lg:hidden block cursor-pointer text-2xl"
            >
                <GiHamburgerMenu />
            </span>
        </div>
    );
}

export default Navbar;
