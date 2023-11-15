import Link from 'next/link'
import React from 'react'

function BlogComponent(props) {
    const colors = ["#00A5E3", "#8DD7BF", "#FF5786", "FFBF65", "#CFF800", "#4DD091"]

    const color = colors[Math.floor(Math.random() * colors.length)];

    return (
        <div style={{ background: color }} className=" flex flex-1 mx-4 flex-col gap-x-6 cursor-pointer shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-[#FFFFFF]   overflow-hidden">
            <div className=' h-40 w-40 '>
                <img src={props.img} alt="" className='w-full h-full' />
            </div>
            <div>
                <p className=' uppercase tracking-widest text-gray-500 font-extrabold'>{props.category}</p>
                <h1 className=" font-extrabold text-2xl text-center py-2">{props.title}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ex ipsam expedita neque beatae sunt illum quaerat, veniam numquam quia quisquam illo dolore nulla laboriosam perspiciatis necessitatibus! Laborum, cupiditate est!</p>
                <div className='mt-6 flex justify-between'>
                    <p className=" text-sm text-gray-500 font-bold"> {props.content}</p>
                    <p className=" text-sm text-gray-500 font-bold"> {props.date}</p>
                </div>
            </div>

        </div>
    )
}

export default BlogComponent