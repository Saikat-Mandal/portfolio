"use client"

import React, { useState } from 'react'
import Home from '../page'
import ProjectComponent from '../components/ProjectComponent';
import { TiWeatherCloudy } from "react-icons/ti";
import { AiFillLinkedin } from "react-icons/ai";
import { FaChrome } from "react-icons/fa";
import { IoIosJournal } from "react-icons/io";
import { FaVanShuttle, FaDropbox } from "react-icons/fa6";
import { BsFillEmojiDizzyFill } from "react-icons/bs";
import { data } from '@/data/projectdata';


function Projects() {

    const [projectsArray, setProjectsArray] = useState(data)



    return (
        <Home>
            <div className=" h-full flex  px-8">


                <div className='container mx-auto' >
                    <h1 className=' text-4xl pb-6'>Here are some of my projects</h1>
                    <div className="flex flex-wrap md:justify-center  w-full gap-5 ">
                        {/* <ProjectComponent title="Spotify clone" image="https://images.pexels.com/photos/7520751/pexels-photo-7520751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <ProjectComponent title="Van life" icon={<FaVanShuttle />} image="https://images.pexels.com/photos/19116880/pexels-photo-19116880/free-photo-of-ford-transit-car-on-the-highway.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <ProjectComponent title="Blogging platform" icon={<IoIosJournal />} image="https://plus.unsplash.com/premium_photo-1670963023642-d6a4a1287f33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D" />
                        <ProjectComponent title="Meme generator" icon={<BsFillEmojiDizzyFill />} image="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbWVzfGVufDB8fDB8fHww" />
                        <ProjectComponent title="Chrome extension" icon={<FaChrome />} image="https://images.unsplash.com/photo-1533228100845-08145b01de14?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <ProjectComponent title="Weather app" icon={<TiWeatherCloudy />} image="https://images.unsplash.com/photo-1514632595-4944383f2737?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> */}
                        {
                            projectsArray.map((item, index) => {
                                return <ProjectComponent
                                    key={index}
                                    title={item.title}
                                    icon={item.icon}
                                    image={item.image}
                                    link={item.link}
                                />
                            })
                        }
                    </div>
                </div>



            </div>

        </Home>
    )
}

export default Projects