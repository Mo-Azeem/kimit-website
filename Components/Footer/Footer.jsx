import React from 'react'
import style from './Footer.module.css'
import { location } from '../../Svgs/location'
import { message } from '../../Svgs/message'
import { phone } from '../../Svgs/phone'
import { facebook } from '../../Svgs/facebook'
import { twitter } from '../../Svgs/twitter'
import { insta } from '../../Svgs/instgram'
import { pine } from '../../Svgs/pine'
import { useRouter } from 'next/router'
export default function Footer() {
    const router = useRouter()
    function navigate(to) {
        router.push(`./${to}`)
    }
    return (
        <div className={` ${style.body}  `}>
            <div className=' row gy-4 '>
                <div className="col-md-6  ">
                    <img src="../logo.png" alt="logo" />
                    <h2 className={`${style.desc}`}>Software house to develop your business our solutions for business platform.</h2>
                    <div className="d-flex mt-4">
                        {/* {location} */}
                        <img className={`${style.icon}`} src="../../location.png" alt="" />
                        <h6 className={`${style.data} ps-2 `}>11 Moaz al Dawla, Makram Ebeid, Nasr City, Cairo.</h6>
                    </div>
                    <div className="d-flex mt-2">
                        {message}
                        <h6 className={`${style.data} ps-2`}>support@kimitin.com</h6>
                    </div>
                    <div className="d-flex mt-2">
                        {phone}
                        <h6 className={`${style.data} ps-2`}>01022554536</h6>
                    </div>
                </div>
                <div className={`${style.secondMainSec} col-md-6 pt-5`}>
                    <div className="row text-white">
                        <div className="col-4">
                            <h6 className={`${style.sec2} `}>
                                Company
                            </h6>
                            <hr className='w-25 bg-white mt-1' />
                            <h6 className={`${style.sec2} `}>
                                Contact Us
                            </h6>
                            <h6 className={`${style.sec2} mt-3`}>
                                Our Blog
                            </h6>
                        </div>
                        <div className={`col-4  ${style.footerCenter}`}>
                            <div>
                                <h6 className={`${style.sec2} `}>
                                    Links
                                </h6>
                                <hr className='w-25 bg-white mt-1' />
                                <h6 onClick={() => navigate("Privacy")} className={`${style.sec2} `}>
                                    Privacy
                                </h6>
                                <h6 onClick={() => navigate("Tearms")} className={`${style.sec2} mt-3`}>
                                    Terms
                                </h6>
                            </div>
                        </div>
                        <div className="col-4">
                            <h6 className={`${style.sec2} `}>
                                Recomended
                            </h6>
                            <hr className='w-25 bg-white mt-1 ' />
                            <h6 className={`${style.sec2} `}>
                                KImit Academy
                            </h6>
                            <h6 className={`${style.sec2} mt-3 `}>
                                FAQs
                            </h6>
                        </div>
                    </div>
                </div>
                <hr className='bg-white fw-bold text-white' />
                <div className='mt-3 row justify-content-between '>
                    <div className="col-md-6">
                        <h6 className={`${style.copyright}`}>Copyright by © 2022 Orcabits Inc. All rights reserved</h6>
                    </div>
                    <div className={`col-md-6 d-flex ${style.icons} `}>
                        <span className='pe-2'>{facebook}</span>
                        <span className='pe-2'>{twitter}</span>
                        <span className='pe-2'>{insta}</span>
                        <span className='pe-2'>{pine}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
