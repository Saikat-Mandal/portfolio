"use client"

import React from 'react'
import Home from '../page'
import { BsSpotify } from "react-icons/bs";
import ProjectComponent from '../components/ProjectComponent';
import { AiFillLinkedin } from "react-icons/ai";
import { FaVanShuttle } from "react-icons/fa6";
function Projects() {
    return (
        <Home>
            <div className=" flex justify-center min-h-screen w-full">
                <div className=" w-4/5 h-full grid-rows-4 p-10 grid  grid-cols-1 md:grid-cols-3 gap-4 grid-flow-rows">


                    {/* intro  */}

                    <ProjectComponent
                        img="https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        title="Spotify clone"
                        content="React.js , javascript , tailwind css , MongoDb"
                        icon={<BsSpotify />}
                        iconame="Spotify"
                        github="https://github.com/Saikat-Mandal/MeloTunes-client"
                    />
                    <ProjectComponent
                        img="https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        title="LinkedIn clone"
                        content="React.js , javascript , tailwind css , MongoDb"
                        icon={<AiFillLinkedin />}
                        iconame="LinkedIn"
                        github="google.com"
                    />
                    <ProjectComponent
                        img="https://lh3.googleusercontent.com/pw/ADCreHeGcDmZIVICcrqI-m_bCCbRigCJe7pl2sXL0Cj1L1T-RyOee0SOBIbc1lLsrgVTU0spUFszGEN7eeWVtO_aGMaMfgc-DpM73MHwsfj0zXvlzTN48ru1S3Hu3knSveH8eBMPaR_DpZisSwaQXGrUpiyPxfib039UooRjBj5iPDWeaACUeIoHkXhcx6jcNf3LEkTnnEFUXJFlJTYZW_48_g250Z8F6lQjpAEaBc17MZ5LDucy5nSb4huUR97GzbtGteqtdpbzFFfvg5stAvsumntZjzW8H2Puko3KDcRYms8tREmljw0z2A2KCPrm4kFBtCjKj1uKKu-RVc2J_QBHg09WAkTgUMZXVLBQY-HttH28wG5LfqhjiMbETr4TGrHzfjyrd2Sn8yyIYXMA5Uzp0rn2uIDgw31PQSgNKtJ_T69NjO4KC4Y2Jdt12aXXt2EKcr6pfWHlfGQRXV0lzD6zxktNnUu9zkACt2RZvvh3JxYALgU1i8h7aeHNH1aO283M2WIkzcXZReV-kTgU-06OeCTXxMZpOtNF7-XwMzqq7Ya7DO3yxfDLThrMltYU7Kgdcj2rYwveUkBCSq9f4dnUsMQhe_2OUbCNTMktuLHknyViUX-IJeDehp1tLHcxRfLqsIgIcwPM7iojTpQjUMWkclw1taAoa8oW-ahjh9NdlvX_bY9gs1VMAmkJdGF8VwZBVyLfrnxTawl_BusI1QUVuYTW-0un8mLQwGZ5OVprRwIeNOl-2stq9IGabalDFptI0ZqvDjU1E3tcHQRgEsIXeYav2pRotdEMFqNrPuPwB6EucF8KfLY0pFy4psOALeqvhHI3zjeLranr565lYg9EhdIFPeuF5EYZxu_oM7yn82HUIeY6EvMQx-SWUJEfRebqIRPNCUaMlM328CYK4qkWZG3U3gaasUBQe0vULcQzzF5-NQJPzNUInN1tUDEOk4nuFWlV1PmdrRSD2EcDWUtDImCd3Dq-0-TtRw=w1920-h876-s-no?authuser=0"
                        title="Van-life"
                        content="React.js , javascript , tailwind css , react-router-dom"
                        icon={<FaVanShuttle />}
                        iconame="Van-life"
                        github="google.com"
                    />


                </div>
            </div>

        </Home>
    )
}

export default Projects