import Link from 'next/link'
import React from 'react'

function BlogComponent(props) {
    const colors = ["#00A5E3", "#8DD7BF", "#FF5786", "FFBF65", "#CFF800", "#4DD091"]

    const color = colors[Math.floor(Math.random() * colors.length)];

    return (
        <div onClick={() => props.getBlogId(props.id)} style={{ background: color }} className="flex items-center p-4 cursor-pointer gap-x-4 mb-2 rounded-md">
            <div className="left">
                {/* user  */}
                <div className=' flex items-center gap-x-2'>
                    <img src={props.profileimageUrl} alt="" className=' h-5 w-5  md:h-10 md:w-10 rounded-full' />
                    <p>{props.name}</p>
                    <p>{props.date}</p>
                </div>
                {/* body  */}
                <div className=''>
                    <h1 className=' text-2xl'>{props.title}</h1>
                    <p className=' xl'>{props.content.substring(0, 100)}...<Link href={`/blogs/${props.id}`} className='underline text-cyan-500 hover:text-orange-400' >read more</Link></p>
                    <p className='py-4'>{props.category}</p>
                </div>
            </div>
            <div className="right h-20 w-40">
                <img className='h-full w-full object-contain ' src={props.imgUrl} alt="" />
            </div>
        </div>
    )
}

export default BlogComponent