import React from 'react'
import style from './Testmonial.module.css'
import { Rate } from 'antd';
import { box } from '../../Svgs/box';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; ``

export default function Testmonial() {
  const customer = [{
    name: "Lena Mohamed",
    rate: 4,
    Comment: " the team working very good, achieve my service and my dreams about my business solution from branding to developing my platforms as I want to achieve "

  },
  {
    name: "Lena Mohamed",
    rate: 4,
    Comment: " the team working very good, achieve my service and my dreams about my business solution from branding to developing my platforms as I want to achieve "

  },
  {
    name: "Lena Mohamed",
    rate: 4,
    Comment: " the team working very good, achieve my service and my dreams about my business solution from branding to developing my platforms as I want to achieve "

  },
  {
    name: "Lena Mohamed",
    rate: 4,
    Comment: " the team working very good, achieve my service and my dreams about my business solution from branding to developing my platforms as I want to achieve "
  },
  ]
  return (
    <div id='testmonial' className={`${style.body} pb-5 mt-5`} >
      <div className={`${style.ContBody}`}>
        <h2 className={`${style.title} text-center pt-5`}>What our customers say</h2>
        <p className={`${style.titleDesc} text-center`}>Our customers feedback to make us more <br /> improve and more professional</p>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={60}
          className={`${style.swiperCont} `}
          breakpoints={{
            // when window width is >= 640px
            0: {
              slidesPerView: 1,
            },
            902: {
              slidesPerView: 2,
            },
            1366:{
              slidesPerView: 3,
            }

          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >

          {customer.map((item, i) =>
            <SwiperSlide key={i} className={`${style.slider} position-relative `}>

              <div className='row g-0'>
                <div className=' bg-white rounded-5'>
                  <div className={`row ${style.imageLeft}`}>
                    <div className={`col-4`}>
                      <div className={` ${style.contImage} position-relative d-flex justify-content-center ms-4`}>
                        <div className={`${style.image} position-absolute`}>
                          <img src='../../customer.png' className='w-100 h-100' />
                        </div>
                      </div>
                    </div>
                    <div className={`col-6`}>
                      <h2 className={`${style.customer}`}>Lena Mohamed</h2>
                      <Rate className={`${style.rate}`} disabled defaultValue={4} />
                    </div>
                  </div>
                  <div className={`row ${style.imageCenter}`}>
                    <div className={`col-12`}>
                      <div className={` ${style.contImage} position-relative  d-flex justify-content-center ms-4`}>
                        <div className={`${style.image} position-absolute `}>
                          <img src='../../customer.png' className='w-100 h-100' />
                        </div>
                      </div>
                    </div>
                    <div className={`col-12 text-center mt-5`}>
                      <h2 className={`${style.customer}`}>Lena Mohamed</h2>
                      <Rate className={`${style.rate}`} disabled defaultValue={4} />
                    </div>
                  </div> 
                  <p className={`${style.customerComment}`}>  the team working very good, achieve my service and my dreams about my business solution from branding to developing my platforms as I want to achieve  </p>
                </div>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
     
    </div >
  )
}
