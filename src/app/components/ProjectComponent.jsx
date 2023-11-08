import Link from 'next/link'
import React from 'react'

function ProjectComponent(props) {
    return (
        <Link href={props.github} className="relative shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-[#FFFFFF] flex flex-col col-span-1 rounded-[40px] row-span-1  overflow-hidden ">
            <img src={props.img} alt="" />
            <div>
                <h1 className=" font-extrabold text-2xl text-center pt-2">{props.title}</h1>
                <p className=" text-sm p-4"> {props.content}</p>
            </div>
            <span className=' absolute text-white text-3xl flex items-center' style={{ top: 100, left: 120 }}>{props.icon}{props.iconame}</span>

        </Link>
    )
}

export default ProjectComponent