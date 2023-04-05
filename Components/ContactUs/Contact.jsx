import React from 'react'
import style from './Contact.module.css'
import { location } from '../../Svgs/location'
import { message } from '../../Svgs/message'
import { phone } from '../../Svgs/phone'
import { facebook } from '../../Svgs/facebook'
import { twitter } from '../../Svgs/twitter'
import { insta } from '../../Svgs/instgram'
import { pine } from '../../Svgs/pine'
import Image from 'next/image'

export default function Contact() {
    return (
        <div id='contact' className={`${style.body} pb-5`}>
            <div className="container">
                <h2 className={` ${style.title}`}>Contact us</h2>
                <div className="row">
                    <div className="col-lg-6 pt-4">
                        <div className={`${style.bodyOfContact} `}>
                            <h6 className={`${style.descTitle} pt-3 `}>Feel Free to contact us any time. we will get back to you as soon as we can!</h6>
                            <div className="mb-3">
                                <label htmlFor="fullName" className={`${style.label} form-label mt-3`}>Full Name</label>
                                <input type="name" className="form-control" id="fullName" placeholder="Write your name here" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className={`${style.label} form-label mt-2`}>Email </label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Write your email here" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Message" className={`${style.label} form-label mt-2`}>Message</label>
                                <textarea className={`${style.textarea} form-control`} placeholder="Write your message here" id="Message" rows="3"></textarea>
                            </div>
                            <button className='p-2 mt-3 text-white btn btn-warning w-100'> Send A Message</button>
                        </div>
                    </div>
                    <div className="col-lg-6 ">
                        <div className="image position-relative w-100  m-auto d-flex align-items-center justify-content-center ">
                            <img src="../../contactdesc.png" className={`${style.mainImg}   w-100 h-100`} alt="" />
                            <div className={`${style.contDesc} position-absolute translate-middle `}>
                                <img src="../../logo.png" className={`${style.logo}`} alt="kimit" />
                                <h6 className={`${style.data} ${style.firstData} pt-4`}>Or contact us via :</h6>
                                <div className={`${style.firstData} d-flex mt-4 `}>
                                    
                                    <img className={`${style.icon}`} src="../../location.png" alt="" />
                                    <h6 className={`${style.data}  ps-2 `}>11 Moaz al Dawla, Makram Ebeid, Nasr City, Cairo.</h6>
                                </div>
                                <div className="d-flex mt-2">
                                    {message}
                                    <h6 className={`${style.data} ps-2`}>support@kimitin.com</h6>
                                </div>
                                <div className="d-flex mt-2">
                                    {phone}
                                    <h6 className={`${style.data} ps-2`}>01022554536</h6>
                                </div>
                                <div className={`col-lg-6 d-flex justify-content-around w-75 m-auto ${style.icons} mt-3`}>
                                    <span className='pe-2 '>{facebook}</span>
                                    <span className='pe-2'>{twitter}</span>
                                    <span className='pe-2'>{insta}</span>
                                    <span className='pe-2'>{pine}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
