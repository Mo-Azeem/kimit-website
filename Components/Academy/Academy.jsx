import React from 'react'
import style from './Academy.module.css'
import { softwareOne } from '../../Svgs/software1'
import { softwareTwo } from '../../Svgs/software2'
import { softwareThree } from '../../Svgs/software3'

export default function Academy() {
    return (
        <div id='software' className={` ${style.softwareSec} w-100 h-100 bg-white pt-5 pb-5`}>
            <div className="container">
                <div className="row">
                    <div className={`${style.mainImg}  m-auto d-flex align-items-center col-lg-6`}>
                        {<div className={` w-100   pe-3`}>
                            <img className='w-100' src="../../academy.png" alt="" />
                        </div>}
                    </div>
                    <div id='kimitAcademy' className={`${style.imgDesc} col-lg-6`}>
                        <div className={`${style.itemImg} w-100 `}>
                            <h4 className={`${style.mainTitle}`}>Kimit Academy</h4>
                            <div className='d-flex'>
                                <div className={`${style.line1} me-2`}></div>
                                <div className={`${style.line2} me-2`}></div>
                                <div className={`${style.line3}`}></div>
                            </div>
                            <h2 className={`${style.secondTitle}`}>The best place to start <br /> your careers</h2>
                            <p className={`${style.secondTitleDesc} text-muted`}>There are many variations of passages of Lorem Ipsum <br /> but the majority have suffered alteration in form injected</p>
                            <div className="desc d-flex mb-4 mt-5">
                                <div className='pe-3'>
                                    <div className={`${style.img} `}>
                                        {softwareOne}
                                    </div>
                                </div>
                                <div className="imgDesc">
                                    <h4 className={`${style.thiTitle}`}>More than 100.00 instructors</h4>
                                    <h6 className={`${style.thiTitleDesc}`}>The most professional instructors to teach you</h6>
                                </div>
                            </div>
                            <div className="desc d-flex mb-4">
                                <div className='pe-3'>
                                    <div className={`${style.img} `}>
                                        {softwareTwo}
                                    </div>
                                </div>
                                <div className="imgDesc">
                                    <h4 className={`${style.thiTitle}`}>Variety of fields of courses</h4>
                                    <h6 className={`${style.thiTitleDesc}`}>Many fields you can choose your fields</h6>
                                </div>
                            </div>
                            <div className="desc d-flex mb-4">
                                <div className='pe-3'>
                                    <div className={`${style.img} `}>
                                        {softwareThree}
                                    </div>
                                </div>
                                <div className="imgDesc">
                                    <h4 className={`${style.thiTitle}`}>Variety of fields of courses</h4>
                                    <h6 className={`${style.thiTitleDesc}`}>Many fields you can choose your fields</h6>
                                </div>
                            </div>
                            <button className={`${style.goWebsite} btn mb-5`}>Go Website</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
