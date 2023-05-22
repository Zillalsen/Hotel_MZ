import React, { useState } from 'react';
import DatePicker from "react-datepicker"

// styles
import "react-datepicker/dist/react-datepicker.css"
import "../App.css"
// icons 
import { BsCalendar } from 'react-icons/bs';

const CheckIn = () => {
  const [startDate,setStartDate] = useState(false)

  return <div className='relative flex items-center justify-end h-full'>
    <div className='absolute z-10 pr-8'>
      <div><BsCalendar className='text-accent text-base'/></div>
    </div>
    <DatePicker className='w-full h-full' 
    selected={startDate} 
    onChange={(date) => setStartDate(date)}
    placeholderText='Check In'/>
  </div>;
};

export default CheckIn;
