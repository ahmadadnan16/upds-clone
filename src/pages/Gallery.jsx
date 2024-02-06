import React from 'react'
import GalleryCard from '../components/GalleryCard'

const Gallery = () => {
  return (
    <div className='w-11/12 mx-auto my-5'>
    <h1 className="text-2xl font-semibold my-4">
        Albums{" "}
        <span className="text-lg font-normal text-gray-500">
        Memories from UDPS
        </span>
      </h1>
      <div className="w-full border border-gray-200 rounded-md p-2 shadow-lg">
     <div className='flex gap-3 flex-wrap justify-center'>
      <GalleryCard/>
      <GalleryCard/>
      <GalleryCard/>
      <GalleryCard/>
      <GalleryCard/>
      <GalleryCard/>
      <GalleryCard/>
      <GalleryCard/>
      </div>
    </div>
    </div>
  )
}

export default Gallery