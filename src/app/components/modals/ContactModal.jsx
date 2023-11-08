import React, { useState } from 'react'

function ContactModal(props) {

    return (
        <div onClick={props.closeModal} className=' absolute bg-black bg-opacity-50 text-white w-screen h-screen flex items-center justify-center'>
            <div className=' bg-[#705555] w-1/3 rounded-md p-3 flex flex-col items-center' onClick={(e) => e.stopPropagation()}>
                <h1 className='pb-6 text-lg font-extrabold'>Create a new Playlist</h1>
                {/* <Inputfield value={playlistName} label="Name" placeholder="Playlist name" setValue={setPlayListName} />
                <Inputfield value={thumbnail} label="Thumbnail" placeholder="Thumbnail" setValue={setThumbnail} /> */}s
                {/* <button type='submit' className=' px-3 py-1 bg-green-500 text-black rounded-full hover:scale-105'>Create</button> */}
            </div>
        </div>
    )
}

export default ContactModal