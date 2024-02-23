import React from 'react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './SmartGrowth.css';
import png04 from '../../assets/photo4.jpg';
import png05 from '../../assets/photo5.jpg';
import png06 from '../../assets/photo6.jpg';
import { RxDoubleArrowRight } from "react-icons/rx";

const data = [
  {
    id: 1,
    title: 'Smart Growth',
    subtitle: 'America',
    testimonialtitle: 'America',
    testimonial: "Smart Growth America was founded with three staff members in 2000, and officially recognized as a 501(c)(3) organization in 2003.",
    image: png04,
  },
  {
    id: 2,
    title: 'Smart Growth',
    subtitle: 'America',
    testimonialtitle: 'America',
    testimonial: "Smart Growth America was founded with three staff members in 2000, and officially recognized as a 501(c)(3) organization in 2003.",
    image: png05,
  },
  {
    id: 3,
    title: 'Smart Growth',
    subtitle: 'America',
    testimonialtitle: 'America',
    testimonial: "Smart Growth America was founded with three staff members in 2000, and officially recognized as a 501(c)(3) organization in 2003.",
    image: png06,
  },
];

const customColors = ['#0082C8','#ED8E3A','#ff5733','#5733ff', '#33a3ff',];

const SmartGrowth = () => {
  return (
    <>
      <div className="split-container">
        <div className="upper-half">
        <h1 class="title">Story of Smart Growth America</h1>
        </div>
        <div className="lower-half"></div>
        <div className='slider-div'>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={0}
            slidesPerView={1.1}
            navigation
            pagination={{ clickable: true, renderBullet: () => "" }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {data.map((user, index) => (
              <SwiperSlide key={user.id} className='slide-wrap' style={{ background: customColors[index % customColors.length] }}>
                
                  <div className='slide-des'>
                  <h2 class="subtitle">{user.title}<span class="acronym">{user.subtitle}</span></h2>
                  <div className='border-div'></div>
                    <div className='testimonial-div'>
                    <h1>{user.testimonialtitle}</h1>
                    <p>{user.testimonial}</p>
                    </div>
                    <div className='bottom-des'>
                    <RxDoubleArrowRight  size={32}/><RxDoubleArrowRight size={32} />
                    <h6>Scroll to learn More</h6>
                    </div>
                  </div>
                  
                    <img className='slider-image' src={user.image} alt="Get Involved" />
                  
                
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SmartGrowth;
