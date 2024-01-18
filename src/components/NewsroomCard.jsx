import React from 'react'

const NewsroomCard = () => {
  const newsData= [{
    title:"Intuitive Mentor",
    date:"7 Sep 2023"
  },
  {
    title:"Consistency = Success",
    date:"29 June 2023"
  },
  {
    title:"UDPS Succeeds Admirably!",
    date:"8 June 2023"
  },
  {
    title:"National Science Day 2023",
    date:"7 Mar 2023"
  },
  {
    title:"Student Empowerment Workshop",
    date:"21 Feb 2023"
  }
]
  return (
    

<div className="w-10/12 mx-auto bg-white border border-gray-200 rounded-lg shadow">
<h1 className='text-purple-700 text-xl md:2xl lg:text-3xl uppercase font-semibold px-6 py-7'>📢 Newsroom</h1>
{
  newsData.map((item,index)=>(

    <div className='flex w-full justify-between border-t px-6 py-3 hover:bg-slate-100 cursor-pointer' key={index}>
      <h2 className='text-base md:text-lg'>{item.title}</h2>
      <span className='text-gray-500 text-sm md:text-base'>{item.date}</span>
      </div>
  ))
}
 
</div>


  )
}

export default NewsroomCard