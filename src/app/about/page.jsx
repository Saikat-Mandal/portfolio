"use client"
import Home from "../page"


function About() {

    return (
        <Home>
            <div className="flex justify-center md:justify-end h-screen overflow-hidden ">
                <div className="mt-32 flex justify-center md:justify-end h-screen overflow-hidden   ">
                    <div className="h-full p-10  lg:w-2/3 overflow-y-auto lg:mr-60 scrollbar-hide">
                        <div className=" md:flex-col flex gap-x-4">
                            <h1 className=" text-6xl md:text-8xl  lg:text-9xl  text-right">More</h1>
                            <h1 className=" text-6xl md:text-8xl  lg:text-9xl  text-right">of</h1>
                            <h1 className=" text-6xl md:text-8xl  lg:text-9xl  text-right">me</h1>
                        </div>
                        <p className="py-14 text-base md:text-2xl">
                            👋<strong> Hello, I'm Saikat Mandal!</strong> <br /><br />

                            🎓 I am a <strong>Software Engineer</strong> with a B.Tech in Computer Science Engineeringfrom VIT Bhopal (2020-2024). I am passionate about leveraging technology to solve real-world problems, specializing in <strong>full-stack development, cloud computing, and microservices architecture</strong>. <br /><br />

                            💼 Currently, I work as a <strong>Software Engineer </strong> at TCS, where I build scalable backend systems using Spring Boot, PostgreSQL, and Kafka, develop reusable React components , and implement CI/CD pipelines  with Jenkins and GitHub Actions . I also have hands-on experience with <strong>Docker, Kubernetes, and AWS</strong> for deploying applications efficiently. <br /><br />

                            🚀 Previously, I interned at <strong>Qviq.io</strong> as a <strong>Full Stack Developer</strong>, where I built a React.js platform with Tailwind CSS , implemented JWT-based authentication , and collaborated in an agile team environment. <br /><br />

                            🛠 My tech stack includes <strong>Java, JavaScript, TypeScript, React, Spring Boot, AWS, Docker, and Kubernetes</strong>. I thrive in dynamic environments, constantly seeking opportunities to learn, collaborate, and build impactful solutions . <br /><br />

                            🔗 <strong>Let's connect!</strong> I'm always open to networking, collaborating on exciting projects, and exploring new opportunities in the tech industry. 👋
                        </p>

                        <div className=" h-40 w-40 "></div>
                    </div>

                </div>
            </div>
            {/* Underline effect on hover */}
            {/* <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-600 transition-all duration-500 ease-in-out group-hover:w-full"></span> */}
        </Home>
    )
}

export default About