import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import "./Slider.css"
import 'swiper/css';
import 'swiper/css/navigation';



const Slider = (props)=>{
    return  <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

    {props.images?.map(el=>{
        return <SwiperSlide><img src={el}/></SwiperSlide> 
    })}
  </Swiper>
}

export default Slider;