import React from 'react'
import NewsCard from '../components/NewsCard'
import NewsArchive from '../components/NewsArchive'

const Newsroom = () => {
  return (
    <div className='lg:flex my-10'>
    <div className='w-full lg:w-10/12'>
    <NewsCard/>
    <NewsCard/>
    <NewsCard/>
    <NewsCard/>
    </div>
    <div className='w-2/12 hidden lg:block'>
    <NewsArchive/>

    </div>
    </div>
  )
}

export default Newsroom