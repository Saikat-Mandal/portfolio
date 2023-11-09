"use client"
import Home from "../page"
import { useContext } from "react"


function About() {

    return (
        <Home>
            <div className="flex items-center  justify-around px-10">
                <img className=" w-1/4" src="https://cdn.dribbble.com/users/31752/screenshots/1627371/media/b58991464a72d13ebec186f743e15045.png?resize=800x600&vertical=center" alt="" />
                <div className=" w-2/4">
                    <p className=" text-5xl">Hi there !<br /> I am Saikat Mandal</p>
                    <p>I'm a developer, designer and linguist who has been building for the web in some capacity since 2001. I specialise in accessibility, performance and usability without sacrificing creativity.</p>
                </div>
            </div>

        </Home>
    )
}

export default About