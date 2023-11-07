"use client"

import Navbar from "./components/Navbar"
import { BsSpotify } from "react-icons/bs";
import { AiFillHtml5  } from "react-icons/ai";
import { BiLogoCss3 , BiLogoJavascript  , BiLogoReact , BiLogoNodejs , BiLogoMongodb,BiLogoDocker,BiLogoKubernetes} from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { useEffect, useState } from "react";
import HeroSlider, {Slide} from "hero-slider"
import axios from "axios";

import ImageSlider from "./components/ImageSlider";


export default function Home({children}) {

  const [spotifyAccessToken , setSpotifyAccessToken] = useState('')




  // get the spotify acess token 
// useEffect(()=>{
//   const authString = process.env.CLIENT_ID +":"+ process.env.CLIENT_SECRET
//   const getSpotifyData =async () =>{
//     try {
//      const authParameters = {
//       method:'POST',
//       headers:{
//         'Content-Type' : 'application/x-www-form-urlencoded',
//       },
//       // body:'grant_type=client_credentials&client_id=0cc7c435e084493e98538acc21e26430&client_secret=0376259398d34d7a9dc8f0cc0eb7b614'
//       body: `grant_type=authorization_code&code=AUTHORIZATION_CODE&redirect_uri=http://localhost:3000&client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET`
//       // body:'grant_type=client_credentials&client_id=' + process.env.CLIENT_ID+ '&client_secret=' +process.env.CLIENT_SECRET
//      }

//      const resposnse=  await fetch("https://accounts.spotify.com/api/token" , authParameters)
//      const data = await resposnse.json()
//       setSpotifyAccessToken(data.access_token)
//     } catch (error) {
//       alert(error)
//     }
//   }

//   getSpotifyData()  


// },[])


  // search in spotify api 

  // useEffect(() => {
  //   if (spotifyAccessToken) {
  //     getRecent();
  //   }
  // }, [spotifyAccessToken]);

  // const getRecent = async()=>{
  //   try {
  //    const headers = {
  //      'Content-Type' : 'application/json',
  //      'Authorization': `Bearer ${spotifyAccessToken}`
  //    }
  //    const response = await fetch("https://api.spotify.com/v1/me/player/recently-played" , {
  //      method: 'GET',
  //      headers: headers
  //    })
   
  //    const data  = await response.json()
  //    console.log(data);
  //   } catch (error) {
  //    alert(error)
  //   }
  //  }


  // images slider 

  const images = [ "https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" , "https://images.pexels.com/photos/18434049/pexels-photo-18434049/free-photo-of-a-motorcycle-is-parked-in-a-showroom.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"]

// const img1 = "https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
// const img2 = "https://images.pexels.com/photos/4101555/pexels-photo-18434049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 




  return (
    <div className='min-h-screen w-screen bg-[#F4F4F4]'>
      {/* <Navbar/> */}
      {children ? <>{children}</> : 
      <div className=" flex justify-center min-h-screen w-full">
      <div className=" w-4/5 h-full grid-rows-4 p-10 grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-flow-rows">


{/* intro  */}
          <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-[#FFFFFF] flex flex-col col-span-2 rounded-[40px] row-span-1 p-6 ">
            <h1 className=" pb-4 text-5xl text-center">Saikat Mandal</h1>
            <p className=" p-4 text-xl"> Self-taught Web - developer in Pune Hey! I'm Saikat, and my goal is to work at a company where I can deliver business value while levelling up my skills as a developer.</p>
            <div>
            <button className=' px-3 py-1 ml-1 border-4 hover:scale-105 border-orange-500 rounded-full'>Lean more</button>
            </div>
          </div>
                  
                  {/* images  */}
          <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-[#FFFFFF] flex items-cente flex-col col-span-1 rounded-[40px] overflow-hidden row-span-1 ">
            <ImageSlider images={images}/>
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
