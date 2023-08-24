import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import css from './SwipperSlider.css';
import { SliderProducts } from '../data/Product';

const SwipperSlider = () => {
  return (
    <div className='scontainer container'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={3}
        slidesPerGroup={1}
        className='myswiper'
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')} 
      >
        {SliderProducts.map((slide, i) => (
          <SwiperSlide key={i}>
            <div>
              <div className="lefts">
                <div className='name'>
                  <span>{slide.name}</span>
                  <span>{slide.detail}</span>
                </div>
                <span>
                  {slide.price}$
                </span>
              </div>
              <div>
                <a href="#"><button className='button'>Shop Now</button></a>
              </div>
              <img src={slide.img} alt="product1" className='imgp'/>    
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SwipperSlider;

