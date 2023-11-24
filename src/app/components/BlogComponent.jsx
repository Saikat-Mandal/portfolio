import Link from 'next/link'
import React from 'react'

function BlogComponent(props) {
    const colors = ["#00A5E3", "#8DD7BF", "#FF5786", "FFBF65", "#CFF800", "#4DD091"]

    const color = colors[Math.floor(Math.random() * colors.length)];

    return (
        <div style={{ background: color }} className="flex items-center p-4 cursor-pointer gap-x-4 mb-2 rounded-md">
            <div className="left">
                {/* user  */}
                <div className=' flex items-center gap-x-2'>
                    <img src={props.img} alt="" className=' h-5 w-5  md:h-10 md:w-10 rounded-full' />
                    <p>{props.name}</p>
                    <p>{props.date}</p>
                </div>
                {/* body  */}
                <div className=''>
                    <h1 className=' text-2xl'>{props.title}</h1>
                    <p className=' xl'>{props.content.substring(0, 100)}...<Link href="/" className='underline text-cyan-500 hover:text-orange-400' >read more</Link></p>
                    <p>{props.category}</p>
                </div>
            </div>
            <div className="right">
                <img className='h-20 w-20' src={props.img} alt="" />
            </div>
        </div>
    )
}

export default BlogComponent