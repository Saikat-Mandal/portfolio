"use client"
import crypto from "crypto"
import Navbar from "./components/Navbar"
import { BsSpotify } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoNodejs, BiLogoMongodb, BiLogoDocker, BiLogoKubernetes } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { useContext, useEffect, useState } from "react";
import ImageSlider from "./components/ImageSlider";
import axios from "axios";
import qs from "querystring"
import SpotifyWebApi from "spotify-web-api-node"
export default function Home({ children }) {

  const [spotifyAccessToken, setSpotifyAccessToken] = useState('')
  const generateRandomString = (length) => {
    return crypto
      .randomBytes(60)
      .toString('hex')
      .slice(0, length);
  }
  const clientId = "0cc7c435e084493e98538acc21e26430"
  const clientSecret = "0376259398d34d7a9dc8f0cc0eb7b614"
  const redirect_uri = 'http://localhost:3000/callback';
  const stateKey = "spotifyKey"
  const track_id = "07A0whlnYwfWfLQy4qh3Tq"
  const auth_token = Buffer.from(`${clientId}:${clientSecret}`, 'utf-8').toString('base64');
  const auth_token2 = Buffer.from(clientId + ':' + clientSecret).toString('base64')
  const scope = 'user-read-private user-read-email';
  // let spotifyApi = new SpotifyWebApi({
  //   redirectUri: redirectUri,
  //   clientId: clientId
  // });

  // useEffect(() => {
  //   const getAccessToken = async () => {
  //     try {
  //       const tokenUrl = "https://accounts.spotify.com/api/token"
  //       const data = qs.stringify({ 'grant_type': 'client_credentials' });
  //       const response = await axios.post(tokenUrl, data, {
  //         headers: {
  //           'Authorization': `Basic ${auth_token}`,
  //           'Content-Type': 'application/x-www-form-urlencoded'
  //         }
  //       })

  //       setSpotifyAccessToken(response.data.access_token)
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getAccessToken()

  // }, [])

  // get data from access token 
  // useEffect(() => {
  //   const getDataFromToken = async () => {
  //     try {
  //       const response = await axios.get(`https://api.spotify.com/v1/me/player/recently-played`, {
  //         headers: {
  //           Authorization: 'Bearer ' + spotifyAccessToken
  //         }
  //       })

  //       console.log(response.data);
  //       // console.log(spotifyAccessToken);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getDataFromToken()
  // }, [spotifyAccessToken])


  // get the spotify authorization 

  const auth = async () => {

  }



  const link1 = "https://lh3.googleusercontent.com/pw/ADCreHdLE5bgw4s8d4n7L1vui8g6J7aaSG1sXIf-IChNNYnsL3FpPIVOMv-LrTQEDj62gaDNI2s6Tb9y1fhU0lNktP7oxnvPCsZZv0BHK7k4GjrWbbRE2clHwlHH853UoCGbpGuJBhbni_4Ls1wF8ypYD9hX=w1171-h879-s-no?authuser=0"
  const link2 = "https://lh3.googleusercontent.com/pw/ADCreHeVJ1k-hkdiZUZVKMlaJpSAbUbxjZJJW6LrsNUUouIlGTY-59NTIJFGejTkXEZmEO1eq2dl39fKJ4NlTwivA2xtjGwbj-14hh6knWwkmsQbK8iHGNj2gMik42wpN9_4kfYcVsZ8dKgotclL3zuXQL2m=w1171-h879-s-no?authuser=0"
  const link3 = "https://lh3.googleusercontent.com/pw/ADCreHc8Hcti7lKO_Xqbd2WMHqhm4ruKTPEUkQCOFzM7BBgP9RIEu94xCUwd4DcIy9Q-DMqxfRg-zYqfX0RMdW0Bv6wgqoP6d56TjLJKe2aY7G7YmDyfeIOe1fz9q1HkbWCXhI7kLgeNMmvkeXO53I33ASkx=w1171-h879-s-no?authuser=0"
  const images = [link1, link2, link3]

  return (

    <div className='min-h-screen w-screen bg-[#F4F4F4]'>
      <Navbar />
      {children ? <>{children}</> :
        <div className=" flex justify-center min-h-screen w-full">
          <div className=" w-4/5 h-full grid-rows-4 p-10 grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-flow-rows">


            {/* intro  */}
            <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-[#FFFFFF] flex flex-col col-span-2 rounded-[40px] row-span-1 p-6 ">
              <h1 className=" pb-4 text-5xl text-center">Saikat Mandal</h1>
              <p className=" p-4 text-xl"> Self-taught Web - developer in Pune Hey! I'm Saikat, and my goal is to work at a company where I can deliver business value while levelling up my skills as a developer.</p>
              <div>
                <button className=' px-3 py-1 ml-1 border-4 hover:scale-105 border-orange-500 rounded-full'>Learn more</button>
              </div>
            </div>

            {/* images  */}
            <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-[#FFFFFF] flex items-cente flex-col col-span-1 rounded-[40px] overflow-hidden row-span-1 ">
              <ImageSlider images={images} />
            </div>

            {/* my stack     */}
            <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-[#FFFFFF] flex items-cente flex-col col-span-1 rounded-[40px] row-span-2 p-6">
              <p className="pb-8 text-3xl font-bold">My stack</p>
              <div className=" flex gap-x-3 items-center mb-6 pb-3 border-b border-b-gray-400">
                <div className="text-4xl">
                  <AiFillHtml5 className=" text-orange-500" />
                  <BiLogoCss3 className=" text-blue-500" />
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
                  <BiLogoKubernetes className=" text-blue-500" />
                </div>
                <div>
                  <p>Devops</p>
                </div>
              </div>



            </div>
            {/* maps  */}
            <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-[#FFFFFF] flex items-cente flex-col col-span-2 rounded-[40px] row-span-1 overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15128.631750359678!2d73.90718619316455!3d18.566917011566265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c146e61484b5%3A0xb6482cf7a8b4b3b0!2sViman%20Nagar%2C%20Pune%2C%20Maharashtra%20411014!5e0!3m2!1sen!2sin!4v1699380730364!5m2!1sen!2sin"
                width="600"
                height="300"
                style={{ border: "0" }}
              ></iframe>
            </div>
            <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-[#FFFFFF] flex items-center justify-between col-span-3 rounded-[40px] row-span-1 p-6">
              <img className=" w-1/3 rounded-2xl " src="https://images.pexels.com/photos/1647121/pexels-photo-1647121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
              <BsSpotify className=" text-green-500 text-6xl " />
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
