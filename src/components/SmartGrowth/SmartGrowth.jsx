import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './SmartGrowth.css'; 

const data=[
  {
    id:1,
    username:ali,
    testimonial:"anxjwjxnwuxbdyqvyxqycxvqgcagz HAZ JANQANYBAHVZ \ZGAVTXZCAZ AQHZQ",
  },
  {
    id:2,
    username:hamza,
    testimonial:"anxjwjxnwuxbdyqvyxqycxvqgcagz HAZ JANQANYBAHVZ \ZGAVTXZCAZ AQHZQ",
  },
  {
    id:3,
    username:umer,
    testimonial:"anxjwjxnwuxbdyqvyxqycxvqgcagz HAZ JANQANYBAHVZ \ZGAVTXZCAZ AQHZQ",
  },
]

const SmartGrowth = () => {


  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1.1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
      {data.map( user => (
        <SwiperSlide key={user.id}>
          <div>
            {/* {user.testimonial} */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SmartGrowth;
