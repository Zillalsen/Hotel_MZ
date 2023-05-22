import React from 'react';
import { Link } from 'react-router-dom';

import {BsArrowsFullscreen,BsPeople} from "react-icons/bs"

const Room = ({id,name,description,size,maxPerson,price,image}) => {
  
  return (
    <div className='bg-white shadow-2xl min-h-[500px] group'>    
    <div className='overflow-hidden'>
      <img src={image} 
      className='group-hover:scale-110 transition-all duration-300 w-full'
      alt="image" />
    </div>
      {/* features */}
    <div 
    className=' flex items-center justify-center h-[60px] bg-white shadow-lg max-w-[300px] mx-auto
    -translate-y-1/2 uppercase font-tertiary tracking-[1px] font-semibold text-base'>
      <div className='flex items-center justify-between w-[90%] sm:w-[80%] '>
        <div className='flex items-center gap-x-2'>
          <div className='text-accent'>
          <BsArrowsFullscreen className='text-[15px]'/> 
          </div>
          <div className='flex gap-x-1'>
            <p>Size</p>
            <p className='ml-2'>{size}</p>
          </div>
        </div>

        <div className='flex items-center gap-x-2'>
          <div className='text-accent'>
          <BsPeople className='text-[15px]'/> 
          </div>
          <div className='flex gap-x-1'>
            <p>Max Poeple</p>
            <p className='ml-2'>{maxPerson}</p>
          </div>
        </div>
      </div>
    </div>
    {/* details */}
      <div className='text-center'>
        <Link to={`/room/${id}`}>
        <h3 className='h3'>{name}</h3>
        </Link>
        <p className='mb-3 lg:mb-6 mx-auto max-w-[300px]'>{description.substring(0,70)}</p>
      </div>
      {/* btn */}
        <Link to={`/room/${id}`} className='btn btn-secondary btn-sm mx-auto max-w-[240px]'>
        Book Now from ${price}
        </Link>
  
  </div>
  );
};

export default Room;
