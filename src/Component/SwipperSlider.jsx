import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import css from './SwipperSlider.css';
import { SliderProducts } from '../data/Product'
const SwipperSlider = () => {
  
  return (
    <div className='scontainer mb-4'>
      <Swiper
        // modules={[Navigation, Pagination]}
        speed={500}
        navigation={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        pagination={true}
        className='myswiper'
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
                <a href="#"><button className='button'>Shop Now
                </button></a>
              </div>
            </div>
            <img src={slide.img} alt="product1" className='imgp' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SwipperSlider
