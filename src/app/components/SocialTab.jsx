import Link from 'next/link';
import React from 'react';
import { FaArrowUp } from "react-icons/fa";

const SocialTab = ({ styles = "", icon, link, arrowBg }) => {
    return (
        <div className={`cursor-pointer shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] flex items-center justify-center text-8xl col-span-3 md:col-span-1 rounded-[40px] overflow-hidden row-span-1 relative ${styles}`}>
            {icon}
            <Link href={link} className={`absolute text-2xl bottom-5 p-3 rounded-full right-8 rotate-icon ${arrowBg}`}>
                <FaArrowUp />
            </Link>
        </div>
    );
};

export default SocialTab;
