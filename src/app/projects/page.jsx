"use client"

import React from 'react'
import Home from '../page'
import { BsSpotify } from "react-icons/bs";
import ProjectComponent from '../components/ProjectComponent';
import { AiFillLinkedin } from "react-icons/ai";
import { FaVanShuttle } from "react-icons/fa6";
function Projects() {
    return (
        <Home>
            <div className=" h-full flex  px-8">


                <div className='container mx-auto' >
                    <h1 className=' text-4xl pb-6'>Here are some of my projects</h1>
                    <div className="flex flex-wrap justify-center  w-full gap-5 ">
                        <ProjectComponent title="Spotify clone" image="https://images.pexels.com/photos/7520751/pexels-photo-7520751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <ProjectComponent title="Van life" icon={<FaVanShuttle />} image="https://images.pexels.com/photos/19116880/pexels-photo-19116880/free-photo-of-ford-transit-car-on-the-highway.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />

                    </div>
                </div>



            </div>

        </Home>
    )
}

export default Projects