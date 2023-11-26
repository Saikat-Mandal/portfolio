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
                    <p className=" py-14 ">As a full stack developer and student of engineering, I have a diverse range of skills and experiences that contribute to my unique personality. I am highly adaptable, able to work in both individual and team settings, and am always eager to learn and take on new challenges.<br /><br />
                        In my work as a full stack developer, I have experience in a variety of programming languages and frameworks, including HTML, CSS, JavaScript, React, and Node.js. I am also experienced in database management and server-side scripting, allowing me to create fully-functional web applications from start to finish.<br /><br />
                        As a student of engineering, I have developed strong problem-solving skills and a solid understanding of technical concepts. I am highly detail-oriented and able to think critically and logically, which allows me to tackle complex challenges with ease.<br /><br />
                        Overall, my unique blend of technical and interpersonal skills allows me to work well in a variety of settings and contribute positively to any team or project.As </p>
                    <div className=" h-40 w-40 "></div>
                </div>
            </div>

        </Home>
    )
}

export default About