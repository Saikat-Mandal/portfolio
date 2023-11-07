"use client"

import React from 'react'
import Home from '../page'
import { BsSpotify } from "react-icons/bs";
import Link from 'next/link';
function Projects() {
    return (
        <Home>
            <div className=" flex justify-center min-h-screen w-full">
                <div className=" w-4/5 h-full grid-rows-4 p-10 grid  grid-cols-1 md:grid-cols-3 gap-4 grid-flow-rows">


                    {/* intro  */}
                    <Link href="https://github.com/Saikat-Mandal/MeloTunes-client" className="relative shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-[#FFFFFF] flex flex-col col-span-1 rounded-[40px] row-span-1  overflow-hidden ">
                        <img src="https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        <div>
                            <h1 className=" font-extrabold text-2xl text-center pt-2">Spotify clone</h1>
                            <p className=" text-sm p-4"> React.js , javascript , tailwind css , MongoDb</p>
                        </div>
                        <span className=' absolute text-white text-3xl flex items-center' style={{ top: 100, left: 120 }}><BsSpotify />Spotify</span>

                    </Link>


                </div>
            </div>

        </Home>
    )
}

export default Projects