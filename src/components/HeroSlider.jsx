import React from 'react';
// swiper react component
import {Swiper,SwiperSlide} from "swiper/react"
//swiper styles
import "swiper/css"
import "swiper/css/effect-fade"

// swiper module 
import {EffectFade,Autoplay} from "swiper"

// import imgs 
import Img1 from "../assets/img/heroSlider/1.jpg"
import Img2 from "../assets/img/heroSlider/2.jpg"
import Img3 from "../assets/img/heroSlider/3.jpg"

const slides = [
  {
    title: 'Your Luxery Hotel For Vacation',
    bg: Img1,
    btnText:'See Our Rooms'
  },
  {
    title: 'Your Luxery Hotel For Vacation',
    bg: Img2,
    btnText:'See Our Rooms'
  },
  {
    title: 'Your Luxery Hotel For Vacation',
    bg: Img3,
    btnText:'See Our Rooms'
  },
]

const HeroSlider = () => {
  return <Swiper 
  modules={[EffectFade,Autoplay]}
  effect={'fade'}
  loop = {true}
  autoplay= {{
    delay: 3000,
    disableOnInteraction: false
  }}
  
  className='heroSlider h-[600px] lg:h-[860px] bg-blue-300'>
    {slides.map((slide,index) => {
        const {title,bg,btnText} = slide
        return <SwiperSlide key={index} className='h-full relative flex items-center justify-center '>
        <div className='z-20 text-white text-center'>
        <h2 className='font-tertiary tracking-[6px] mb-5'>Just Enjoy & Relax</h2>
        <h1 className='text-[32px] font-primary text-white uppercase max-w-[920px] lg:text-[68px] leading-tight tracking-[2px]'>{title}</h1>
        <button className='btn btn-lg mt-5 btn-primary mx-auto'>{btnText}</button>
        </div>
        <div className='absolute top-0 w-full h-full'>
          <img src={bg} className='h-full w-full object-cover' alt="" />
        </div>
        {/* overlay */}
        <div className="absolute bg-black/70 h-full w-full"></div>
      </SwiperSlide>
    })}
    </Swiper>;
};

export default HeroSlider;
