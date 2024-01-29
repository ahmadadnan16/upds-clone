import React from 'react'; 

import img from '../assets/35831.jpg';

const Department = () => {
  return (
    <div className='justify-center pb-4 flex items-center'>
      <img src={img} alt='img' className='w-24 h-16 bg-blue-50' />
      <div className='ml-4'>
        Department of Pharmaceutical Sciences, RTM University, Nagpur
      </div>
    </div>
  );
};

export default Department;
