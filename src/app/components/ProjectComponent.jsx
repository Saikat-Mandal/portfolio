import Link from 'next/link'
import React from 'react'
import { BsSpotify } from "react-icons/bs";
function ProjectComponent(props) {
    const style = {
        backgroundImage: `url(${props.image})`
    }
    return (
        // <Link href={props.link} target='blank' className="relative p-6 h-96 flex flex-col items-center justify-between bg-no-repeat bg-cover bg-center w-full md:2/4 lg:w-80 " style={style} >
        //     <p></p>
        //     <div className=' absolute bg-black inset-0 bg-opacity-30 '> </div>
        //     <p className='text-3xl text-center text-white z-20'>{props.title}</p>

        //     <div className="text-white text-3xl z-10">
        //         {props.icon}
        //     </div>

        // </Link>

        <Link
            href={props.link}
            target="blank"
            className="relative p-6 h-96 flex flex-col items-center justify-between bg-no-repeat bg-cover bg-center w-full md:2/4 lg:w-80"
            style={style}
        >
            <p></p>
            <div className="hover-overlay absolute inset-0 bg-black bg-opacity-90 opacity-0 transition-opacity duration-300 flex flex-col text-white p-8 z-20">

                <p className=' pb-2'><span className=' text-red-500'>Tech stack:</span> MongoDb , Express, React, Node </p>
                <p className=' pb-2'> <span className=' text-red-500'>Description:</span> A social media platform for the commmunity.</p>
                <p className=' pb-2'><span className=' text-red-500'>Learnings:</span> Acquired React skills, learnt components
                    organization, effectively utilized multiple hooks, and refined
                    API call orchestration.</p>
                <div className='flex gap-x-3' >
                    <span className=' text-red-500'>Links:</span>
                    <Link href="/" className=' underline'>Live</Link>
                    <Link href="/" className=' underline'>Code</Link>
                </div>

            </div>
            <div><p className="text-3xl text-center text-white z-20">{props.title}</p></div>

            <div className="text-white text-3xl z-10">{props.icon}</div>

        </Link>

    )
}


// ProjectComponent.defaultProps = {
//     title: 'Default Title',
//     icon: <BsSpotify />,
// };



export default ProjectComponent