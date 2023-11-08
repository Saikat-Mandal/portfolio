"use client"

import React from 'react'
import Home from '../page'
import { BsSpotify } from "react-icons/bs";
import Link from 'next/link';
import ProjectComponent from '../components/ProjectComponent';
import { AiFillLinkedin } from "react-icons/ai";
function Projects() {
    return (
        <Home>
            <div className=" flex justify-center min-h-screen w-full">
                <div className=" w-4/5 h-full grid-rows-4 p-10 grid  grid-cols-1 md:grid-cols-3 gap-4 grid-flow-rows">


                    {/* intro  */}

                    <ProjectComponent
                        img="https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        title="Spotify clone"
                        content="React.js , javascript , tailwind css , MongoDb"
                        icon={<BsSpotify />}
                        iconame="Spotify"
                        github="https://github.com/Saikat-Mandal/MeloTunes-client"
                    />
                    <ProjectComponent
                        img="https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        title="LinkedIn clone"
                        content="React.js , javascript , tailwind css , MongoDb"
                        icon={<AiFillLinkedin />}
                        iconame="LinkedIn"
                        github="google.com"
                    />


                </div>
            </div>

        </Home>
    )
}

export default Projects