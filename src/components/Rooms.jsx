import React from 'react';
import { useGlobalContext } from '../context/RoomContext';
import Room from './Room';
import {HashLoader} from "react-spinners"

const Rooms = () => {
  const {rooms,loading} = useGlobalContext()
  return <section className='py-24'>
    {/* overlay spiner */}
    {loading && (
      <div className='w-full z-50 h-screen bottom-0 top-0 fixed bg-black/90 flex items-center justify-center'>
            <HashLoader color="#fff" />
      </div>
    )}
    <div className='container lg:px-0 mx-auto  '>
      <div className='text-center'>
        <div className='font-tertiary text-[15px] uppercase tracking-[6px]'>
          Hotel & Spa Adina
        </div>
        <h2 className='font-primary uppercase text-[45px] mb-4'>Room & Suites</h2>
      </div>
      {/* grid */}
    <div className='grid grid-col-1 lg:grid-cols-3 mx-auto max-w-sm lg:max-w-none lg:mx-0  gap-[30px]'>
    {rooms.map((room) => {
      return <Room key={room.id} {...room}/>
    })}
    </div>
    </div>
  </section>;
};

export default Rooms;
