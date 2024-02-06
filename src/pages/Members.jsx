
import React from "react";
import Department from "./Department";

const data=[
  {
      id:1,
      member_name:"Rajiv",
      course:"Bachlores of Engineering",
      member_image_url:"https://static.vecteezy.com/system/resources/thumbnails/014/750/182/small/trendy-office-boy-vector.jpg",
      year_of_passing:2007,
},
{
  id:2,
  member_name:"Swapnil",
  course:"Bachlores of Art",
  member_image_url:"https://static.vecteezy.com/system/resources/thumbnails/014/750/182/small/trendy-office-boy-vector.jpg",
  year_of_passing:2004,
},
{
  id:3,
  member_name:"San",
  course:"Bachlores of ",
  member_image_url:"https://static.vecteezy.com/system/resources/thumbnails/014/750/182/small/trendy-office-boy-vector.jpg",
  year_of_passing:2009,
},
{
  id:4,
  member_name:"Gaurav",
  course:"Poly in civil",
  member_image_url:"https://static.vecteezy.com/system/resources/thumbnails/014/750/182/small/trendy-office-boy-vector.jpg",
  year_of_passing:20010,
},

]
const memberCount = data ? data.length : 0;
const Members = () => {
  return (
  <div className="w-10/12 mx-auto">
  <h1 className='text-xl md:2xl lg:text-3xl flex  font-normal  py-6'>
    Members <span className='text-sm mt-3 ml-2 hidden lg:block  text-gray-400'>Search and connect with friends, batchmates and other alumni</span>
  </h1>
  <div className='lg:flex justify-between'>
  <h1 className='text-sm lg:text-base flex text-warp  pb-10'>
  <span className='underline gap-2 text-[#352311]'>
 <a href='/register'> Register </a> / <a href='/register'>Login</a> </span> <span className='pl-2 text-[#493734]'>to browse members by Year, Name, Company, Profession, Industry or Location</span>
</h1>
<div className=' text-3xl flex flex-col items-end mt-[-32px] pb-4  text-[#333439] mr-10'>
<span className='pl-8'>{memberCount}</span>
<span className=''>Members</span>
</div>
</div>
  <div className='flex flex-wrap gap-2  md:justify-center'>
    {data && data.map((item) => (
      <div key={item.id} className="w-full max-w-sm bg-white border gap-4 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-end px-4 pt-2">
          <button id="dropdownButton" data-dropdown-toggle="dropdown" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="24" height="24" fill="#70CE77">
              <path d="M512 93.090909c230.4 0 418.909091 188.509091 418.909091 418.909091s-188.509091 418.909091 -418.909091 418.909091S93.090909 742.4 93.090909 512 281.6 93.090909 512 93.090909m0 -93.090909C228.072727 0 0 228.072727 0 512s228.072727 512 512 512 512 -228.072727 512 -512S795.927273 0 512 0z"/>
              <path d="M430.545455 716.8c-11.636364 0 -23.272727 -4.654545 -32.581819 -13.963636l-151.272727 -151.272728c-18.618182 -18.618182 -18.618182 -46.545455 0 -65.163636 18.618182 -18.618182 46.545455 -18.618182 65.163636 0l118.69091 118.690909 281.6 -281.6c18.618182 -18.618182 46.545455 -18.618182 65.163636 0 18.618182 18.618182 18.618182 46.545455 0 65.163636L463.127273 702.836364c-9.309091 9.309091 -20.945455 13.963636 -32.581818 13.963636z" fill="#70CE77"/>
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center pb-10 bg-white">
          <img className="w-32 h-32 mb-3 rounded-full shadow-lg" src={item.member_image_url}alt="Bonnie image" />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.member_name}</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">{item.course}</span>
        </div>
      </div>
    ))}
  </div>
  <div className='text-sm lg:text-base flex text-warp justify-center py-6'>
  <span className='underline gap-2 text-[#352311]'>
 <a href='/register'> Register </a> / <a href='/register'>Login</a> </span> <span className='pl-2 text-[#493734]'>to browse members by Year, Name, Company, Profession, Industry or Location</span>
</div>
<Department/>
</div>
);
};
export default Members