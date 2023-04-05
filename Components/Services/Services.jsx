import React, { useEffect } from 'react'
import style from './Services.module.css'
import Link from 'next/link'
import { serviceOne } from '../../Svgs/service1'
import { serviceTwo } from '../../Svgs/service2'

export default function Services(props) {

  function onScroll() {
    let element = document.querySelector(".navbar");
    let service = document.getElementById("service");
    if (service) {
      if (scrollY > service.scrollHeight && props.setBg == "dark") {
        element.style.backgroundImage = "url('../../background2.jpg')"
      }
      else if (element) {
        element.style.backgroundImage = "none"
      }
    }

  }
  useEffect(() => {
    let service = document.getElementById("service");
    let element = document.querySelector(".navbar");
    element.style.backgroundImage = "none"
    window.addEventListener("scroll", onScroll, { passive: true });
  }, [])

  return (
    <div id='service' className={`${style.background} w-100 h-100`}>
      <h2 className={`${style.serviceTitle} text-center `}>What we offer</h2>
      <h4 className={`${style.servicedesc} text-center`} >The services we offer to you at our agency to get  all you need and more with us</h4>
      <div className="container mt-5">
        <div className="row gy-5">
          <div className="col-lg-6 ">
            <div className={`${style.item} shadow bg-white`}>
              {/* {serviceOne} */}
              <img src="../../serviceOne.png" className={`${style.img}`} alt="" />
              <h4 className={`${style.itemTitle}`}>Kimit Software</h4>
              <h5 className={`${style.itemDesc}`}>We offer software agency for companies  to achieve their bussiness as they like</h5>
              <Link href="#kimitSoftware">
                <a className={`${style.learnMore}`}>learn more <span> {`>>`} </span> </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className={`${style.item} shadow bg-white`}>
              <div className='w-25'>
                {/* {serviceTwo} */}
                <img src="../../seviceTwo.png" className={`${style.img}`} alt="" />
              </div>
              <h4 className={`${style.itemTitle}`}> Kimit Academy</h4>
              <h5 className={`${style.itemDesc}`}>we offer education courses in our platform   variety of topics and fields</h5>
              <Link href="#kimitAcademy">
                <a className={`${style.learnMore}`}>learn more <span> {`>>`} </span> </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
