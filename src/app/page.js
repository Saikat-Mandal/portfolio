"use client"

import Navbar from "./components/Navbar"
import { BsSpotify } from "react-icons/bs";
import { AiFillHtml5  } from "react-icons/ai";
import { BiLogoCss3 , BiLogoJavascript  , BiLogoReact , BiLogoNodejs , BiLogoMongodb,BiLogoDocker,BiLogoKubernetes} from "react-icons/bi";
import { SiExpress } from "react-icons/si";
export default function Home({children}) {
  return (
    <div className='min-h-screen w-screen bg-[#F4F4F4]'>
      <Navbar/>
      {children ? <>{children}</> : 
      <div className=" flex justify-center min-h-screen w-full">
      <div className=" w-4/5 h-full grid-rows-4 p-10 grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-flow-rows">


{/* intro  */}
          <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-[#FFFFFF] flex flex-col col-span-2 rounded-[40px] row-span-1 p-6 ">
            <h1 className=" pb-4 text-5xl text-center">Saikat Mandal</h1>
            <p className=" p-4 text-xl"> Self-taught Web-end developer in Pune Hey! I'm Saikat, and my goal is to work at a company where I can deliver business value while levelling up my skills as a developer.</p>
            <div>
            <button className=' px-3 py-1 ml-1 border-4 hover:scale-105 border-orange-500 rounded-full'>Lean more</button>
            </div>
          </div>
                  
                  {/* images  */}
          <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-[#FFFFFF] flex items-cente flex-col col-span-1 rounded-[40px] p-6 row-span-1 ">
           image
          </div>       

          {/* my stack     */}
          <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-[#FFFFFF] flex items-cente flex-col col-span-1 rounded-[40px] row-span-2 p-6">
            <p className="pb-8 text-3xl font-bold">My stack</p>
                  <div className=" flex gap-x-3 items-center mb-6 pb-3 border-b border-b-gray-400">
                      <div className="text-4xl">
                      <AiFillHtml5 className=" text-orange-500" />
                      <BiLogoCss3  className=" text-blue-500" />
                    </div>
                    <div>
                      <p>Build Responsive Websites with HTML and CSS</p>
                    </div>
                  </div>                  
                  <div className=" flex gap-x-3 items-center mb-6 pb-3 border-b border-b-gray-400">
                      <div className="text-4xl">
                      <BiLogoJavascript className=" text-yellow-200" />
                      
                    </div>
                    <div>
                      <p>The Complete JavaScript Course</p>
                    </div>
                  </div>   
                  
                  <div className=" flex gap-x-3 items-center mb-6 pb-3 border-b border-b-gray-400">
                      <div className="text-4xl">
                      <BiLogoReact className=" text-cyan-400" />
                      
                    </div>
                    <div>
                      <p>React: The Complete Guide</p>
                    </div>
                  </div>

                  <div className=" flex gap-x-3 items-center mb-6 pb-3 border-b border-b-gray-400">
                      <div className="text-4xl">
                      <BiLogoNodejs className=" text-green-400" />
                      <SiExpress className="" />
                      <BiLogoMongodb className=" text-green-700" />
                      
                    </div>
                    <div>
                      <p>Node.js, Express and MongoDB Bootcamp</p>
                    </div>
                  </div>  
          </div>           

          {/* current    */}
          <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-[#FFFFFF] flex items-cente flex-col col-span-1 rounded-[40px] row-span-2 p-6">
          <p className="pb-8 text-3xl font-bold">Currently learning</p>
                  <div className=" flex gap-x-3 items-center mb-6 pb-3 border-b border-b-gray-400">
                      <div className="text-4xl">
                      <BiLogoDocker className=" text-cyan-500" />
                      <BiLogoKubernetes  className=" text-blue-500" />
                    </div>
                    <div>
                      <p>Devops</p>
                    </div>
                  </div>                  
                  

                  
          </div>               
              
          <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-[#FFFFFF] flex items-cente flex-col col-span-2 rounded-[40px] row-span-1 p-6">
            map
          </div>     
         <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-[#FFFFFF] flex items-center justify-between col-span-3 rounded-[40px] row-span-1 p-6">
          <img className=" w-1/3 rounded-2xl " src="https://images.pexels.com/photos/1647121/pexels-photo-1647121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              <BsSpotify className=" text-green-500 text-6xl "/>
            <div>
              <div>
                <p className="pb-3 text-2xl text-green-500">Last played</p>
                <p className="pb-3 text-3xl font-bold">21 guns</p>
                <p className="pb-3 text-xl">Green day</p>
              </div>
            </div>
          </div>     
        
          
          
      </div>
      </div>
      }
    </div>
  )
}
