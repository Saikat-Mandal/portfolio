"use client"
import Home from '@/app/page'
import { data } from '@/data/blogdata'
import React, { useEffect, useState } from 'react'

function page({ params }) {

    const [blog, setBlog] = useState({})
    const [blogsArray, setBlogsArray] = useState(data)

    const blogId = params.blogsId

    useEffect(() => {

        const getBlog = blogsArray.find(item => item.id === parseInt(blogId, 10))
        setBlog(getBlog)

    }, [blogId])

    return (
        <Home>
            <div className="w-full h-full">

                <div className=' flex flex-col items-center pb-10'>

                    <h1 className=' text-5xl' >{blog.title}</h1>
                    <div className=' flex items-center w-1/6 justify-between py-20' >
                        <img src="" alt="" className=' h-10 w-10 rounded-full' />
                        .
                        <p>{blog.author}</p>
                        .
                        <p className="">{blog.date}</p>
                    </div>

                    <p>{blog.content}</p>
                </div>

            </div>
        </Home>
    )
}

export default page