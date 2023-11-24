"use client"
import React, { useState } from 'react'
import Home from '../page'
import BlogComponent from '../components/BlogComponent'
import { data } from '@/data/blogdata'
function Blogs() {


    const [blogsArray, setBlogsArray] = useState(data)

    console.log(blogsArray);

    return (
        <Home>
            <div className="h-screen w-full overflow-hidden">
                <h1 className='px-6 pb-10 text-5xl font-extrabold '>Find a new topic everyday</h1>

                <div className=" flex lg:flex-row flex-col justify-center w-5/6  mx-auto md:overflow-hidden p-6 h-screen  scrollbar-hide" >
                    <div className=' w-full lg:w-3/6 lg:order-1 order-2 overflow-y-auto scrollbar-hide' >

                        <div className='flex flex-col justify-center items-center' >
                            <BlogComponent
                                img="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                category="Tech"
                                title="Ai as a new power"
                                content="By faljsndfjlkasnlfn a as hfoaisuh foasif oasbf oasbf fsf oasklf hoasf as sak bf"
                                date="Oct 19"
                            />
                            {
                                blogsArray.map((item, index) => {
                                    return <BlogComponent
                                        category={item.category}
                                        title={item.title}
                                        content={item.content}
                                        date={item.date}
                                    />
                                })
                            }

                        </div>


                    </div>

                    {/* quote  */}
                    <div className="  flex w-full lg:w-2/6 lg:px-5 lg:order-2 order-1 mb-6 ">
                        <div className="flex flex-col bg-black justify-between text-white p-5 h-fit rounded-2xl">
                            <h1 className=' text-3xl py-5'>Merge thoughts,<br /> not just code</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda temporibus recusandae eius, voluptatem totam esse eum nihil e
                                x autem sapiente minus hic cupiditate beatae molestiae error modi id dolorum voluptate.</p>
                            <div className='my-2 px-3 py-1 cursor-pointer border border-white rounded-full text-center'>See more quotes</div>
                        </div>
                    </div>





                </div>
            </div>
        </Home>
    )
}

export default Blogs