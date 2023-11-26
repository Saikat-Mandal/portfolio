"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Home from '../page'
import BlogComponent from '../components/BlogComponent'
import { data } from '@/data/blogdata'
function Blogs() {

    // states 
    const [blogsArray, setBlogsArray] = useState(data)
    const [blogId, setBlogId] = useState(null)
    const [quote, setQuote] = useState({
        content: "",
        author: ""
    })

    const router = useRouter()
    // get the id of clicked blog 
    const getBlogId = (id) => {
        setBlogId(id)
        router.push(`/blogs/${id}`)
    }



    useEffect(() => {
        async function randomQuote() {
            const response = await fetch('https://api.quotable.io/random')
            const data = await response.json()
            setQuote({
                content: data.content,
                author: data.author
            });
        }
        randomQuote()
    }, [])


    if (quote.content == "") {
        return <Home><h1>Loading...</h1></Home>
    }

    return (
        <Home>
            <div className="h-screen w-full overflow-hidden">
                <h1 className='px-6 pb-10 text-5xl font-extrabold '>Find a new topic everyday</h1>

                <div className=" flex lg:flex-row flex-col justify-center w-5/6  mx-auto md:overflow-hidden p-6 h-screen  scrollbar-hide" >
                    <div className=' w-full lg:w-3/6 lg:order-1 order-2 overflow-y-auto scrollbar-hide' >

                        <div className='flex flex-col justify-center items-center' >

                            {
                                blogsArray.map((item, index) => {
                                    return <BlogComponent
                                        key={item.id}
                                        id={item.id}
                                        category={item.category}
                                        title={item.title}
                                        content={item.content}
                                        date={item.date}
                                        imgUrl={item.imgUrl}
                                        profileimageUrl={item.profileimageUrl}
                                        getBlogId={getBlogId}
                                    />
                                })
                            }
                            <div className=' h-20'></div>

                        </div>


                    </div>

                    {/* quote  */}
                    <div className="  flex w-full lg:w-2/6 lg:px-5 lg:order-2 order-1 mb-6 ">
                        <div className="flex flex-col bg-black justify-between text-white p-5 h-fit rounded-2xl">
                            <h1 className=' text-3xl py-5'>{quote.content}</h1>
                            <p>{quote.author}</p>
                            <div className='my-2 px-3 py-1 cursor-pointer border border-white rounded-full text-center'>See more quotes</div>
                        </div>
                    </div>





                </div>
            </div>
        </Home>
    )
}

export default Blogs