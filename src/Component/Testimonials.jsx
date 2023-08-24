import React from 'react'
import css from './Testimonials.module.css'
import Hero from '../Images/testimonialHero.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { TestimonialsData } from '../data/Testimonials'

const Testimonials = () => {
  return (
    <>
      <div className='container-fluid '>
        <div className='row'>
          <div className='col-12 col-md-4 '>
            <div className={css.leftsection}>
              <h2 className='bold mb-4'>TOP RATED</h2>
              <p className='lead fs-6'>SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY. EXERCISE JOY MAN CHILDREN REJOICED.</p>
            </div>
          </div>
          <div className=' col-12 col-md-4'>
            <div className={css.midsection}>
              <img src={Hero} alt="TestimonialHero" className={css.midImage} />
            </div>
          </div>
          <div className=' col-12 col-md-4'>
            <div className={css.rightsection}>
              <h2 className='bold mb-4'>100K</h2>
              <p className='lead fs-6 text-end'>HAPPY CUSTOMERS WITH US</p>
            </div>
          </div>
        </div>
        <div className='conatiner text-center m-0 p-0'>
          <h1 className='bold'>Reviews</h1>
        </div>
      <div className='container {css.reviewcontainer}' >
          <Swiper
            slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={20}
            className={css.box}
            breakpoints={{
              856: {
                slidesPerView: 3
              },
              300:{
                slidesPerView: 1
              }
            }}
             >
            {
              TestimonialsData.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className={css.testimonial}>
                    <img src={testimonial.image} alt="testimonialImage" />
                    <p className='lead mt-4 mb-0'>{testimonial.comment}</p>
                    <hr/>
                    <h5>{testimonial.name}</h5>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>

    </>

  )
}

export default Testimonials
