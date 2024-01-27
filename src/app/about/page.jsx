"use client"
import Home from "../page"
import { useContext } from "react"


function About() {

    return (
        <Home>
            <div className="flex justify-center md:justify-end h-screen overflow-hidden ">
                <div className="h-full p-10  lg:w-2/3 overflow-y-auto lg:mr-60 scrollbar-hide">
                    <div className=" md:flex-col flex gap-x-4">
                        <h1 className=" text-6xl md:text-8xl  lg:text-9xl  text-right">More</h1>
                        <h1 className=" text-6xl md:text-8xl  lg:text-9xl  text-right">of</h1>
                        <h1 className=" text-6xl md:text-8xl  lg:text-9xl  text-right">me</h1>
                    </div>
                    <p className=" py-14 text-base md:text-2xl">👋<strong> Hello, I'm Saikat Mandal!</strong> <br /><br />

                        🎓 Currently pursuing my education at VIT Bhopal University (2020-2024), I am passionate about leveraging technology to solve real-world problems. My academic journey is focused on honing my skills in the MERN (MongoDB, Express.js, React, Node.js) stack, AWS Cloud services, Docker and GraphQL.<br /> <br />

                        💼 During my academic journey, I've had the privilege of gaining practical experience through an enriching internship at qviq.io, where I contributed as a Full Stack Developer. This experience allowed me to delve into the intricacies of web development, enhancing my proficiency in creating scalable and efficient solutions.<br /> <br />

                        🚀 I thrive in dynamic environments, constantly seeking opportunities to learn and apply innovative technologies. My goal is to make a positive impact in the world of technology by combining my academic knowledge with practical experiences gained through internships.<br /><br />

                        🔗 Let's connect! I'm always open to networking, collaborating on exciting projects, and exploring new opportunities in the tech industry.👋  </p>
                    <div className=" h-40 w-40 "></div>
                </div>
            </div>

        </Home>
    )
}

export default About