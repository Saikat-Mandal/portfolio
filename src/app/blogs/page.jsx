import React from 'react'
import Home from '../page'
import BlogComponent from '../components/BlogComponent'

function Blogs() {
    return (
        <Home>
            <div className=" min-h-screen w-full">
                <h1 className='px-6 text-5xl font-extrabold '>Find a new topic everyday</h1>
                <div className=" w-full h-full flex  gap-4 items-center justify-center">


                    <div className='flex flex-col flex-wrap md:flex-row  justify-center items-center'>
                        <BlogComponent
                            img="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            category="Tech"
                            title="Ai as a new power"
                            content="By saikat"
                            date="12/10/23"
                        />


                    </div>


                </div>
            </div>
        </Home>
    )
}

export default Blogs