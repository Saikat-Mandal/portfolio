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
            <div className="hover-overlay absolute inset-0 bg-black bg-opacity-90 opacity-0 transition-opacity duration-300 flex items-center justify-center text-white text-3xl z-20">
                Hover Content
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