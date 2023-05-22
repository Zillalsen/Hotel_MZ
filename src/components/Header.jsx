import React, { useEffect, useState } from 'react';
import LogoWhite from "../assets/img/head/logo-white.svg"
import LogoDark from "../assets/img/head/logo-dark.svg"


const Header = () => {

  const [header,setHeader] = useState(false)
  useEffect(()=> {
    const headerScroll = () => {
      window.scrollY > 50 ? setHeader(true): setHeader(false)
    }
    window.addEventListener('scroll',headerScroll)
    return () => removeEventListener('scroll',headerScroll)

  })

  return <header className={`${header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"} transition-all duration-300 fixed w-full z-40`}>
        <div className="container mx-auto flex flex-col gap-y-6 lg:flex-row lg:justify-between  items-center">
        <a href='/'>
          <img src={header ? LogoDark : LogoWhite} alt="logo" className='w-[120px]'/>  
        </a>  
        <nav className={`${header ? "text-primary" : "text-white"} flex flex-wrap justify-center gap-x-4 font-tertiary uppercase tracking-[3px] lg:gap-x-8`}>
          <a href="" className='hover:text-accent transition'>Home</a>
          <a href="" className='hover:text-accent transition'>Rooms</a>
          <a href="" className='hover:text-accent transition'>Resturant</a>
          <a href="" className='hover:text-accent transition'>SPA</a>
          <a href="" className='hover:text-accent transition'>Contact</a>
        </nav>
        </div>    
      </header>;  
};

export default Header;
