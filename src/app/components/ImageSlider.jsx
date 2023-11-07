import React, { useState } from 'react'
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
function ImageSlider({ images }) {
    const [imageIndex, setImageIndex] = useState(0)

    const showPrevImg = () => {
        setImageIndex(prev => {
            if (prev == 0) {
                return images.length - 1
            }
            return prev - 1;
        })
    }

    const showNextImg = () => {
        setImageIndex(prev => {
            if (prev == images.length - 1) {
                return 0
            }

            return prev + 1
        })
    }

    return (
        <div className='relative h-full'>
            < img className=' h-full w-full block object-cover' src={images[imageIndex]} alt="" />
            <span onClick={showPrevImg} className=' block left-0  rounded-full bottom-0 p-2 hover:bg-slate-700 cursor-pointer absolute text-3xl'> <GrFormPrevious /></span>
            <span onClick={showNextImg} className=' block right-0 rounded-full  bottom-0 p-2 hover:bg-slate-700 cursor-pointer absolute text-3xl'> <GrFormNext /></span>

        </div >
    )
}

export default ImageSlider