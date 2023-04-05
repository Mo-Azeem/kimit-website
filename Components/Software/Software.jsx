import React from 'react'
import { softwareOne } from '../../Svgs/software1'
import { softwareTwo } from '../../Svgs/software2'
import { softwareThree } from '../../Svgs/software3'
import style from './Software.module.css'

export default function Software() {
    return (
        <div id='software' className={` ${style.softwareSec} w-100 h-100 bg-white pt-5 pb-5`}>
            <div id='kimitSoftware' className="container">
                <div className="row gx-5">
                    <div className="col-lg-6">
                        <div className={`${style.itemImg} w-100 `}>
                            <h4 className={`${style.mainTitle}`}>Kimit Software</h4>
                            <div className='d-flex'>
                                <div className={`${style.line1} me-2`}></div>
                                <div className={`${style.line2} me-2`}></div>
                                <div className={`${style.line3}`}></div>
                            </div>
                            <h2 className={`${style.secondTitle}`}>The best place to start <br /> your business with us</h2>
                            <p className={`${style.secondTitleDesc} text-muted`}>There are many variations of passages of Lorem Ipsum but the  majority have suffered alteration in form injected</p>
                            <div className="desc d-flex mb-4 mt-5">
                                <div className='pe-3'>
                                    <div className={`${style.img} `}>
                                        {softwareOne}
                                    </div>
                                </div>
                                <div className="imgDesc">
                                    <h4 className={`${style.thiTitle}`}>Design your website</h4>
                                    <h6 className={`${style.thiTitleDesc}`}>Design your idea with the most creative and experience team</h6>
                                </div>
                            </div>
                            <div className="desc d-flex mb-4">
                                <div className='pe-3'>
                                    <div className={`${style.img} `}>
                                        {softwareTwo}
                                    </div>
                                </div>
                                <div className="imgDesc">
                                    <h4 className={`${style.thiTitle}`}>Develop your website</h4>
                                    <h6 className={`${style.thiTitleDesc}`}>Develop and testing your idea with our experienced team</h6>
                                </div>
                            </div>
                            <div className="desc d-flex mb-4">
                                <div className='pe-3'>
                                    <div className={`${style.img} `}>
                                        {softwareThree}
                                    </div>
                                </div>
                                <div className="imgDesc">
                                    <h4 className={`${style.thiTitle}`}>Marketing agency</h4>
                                    <h6 className={`${style.thiTitleDesc}`}>Marketing for you company with our experienced team</h6>
                                </div>
                            </div>
                            <button className={`${style.goWebsite} btn`}>Go Website</button>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center justify-content-center pb-5">
                        {<div className={`${style.mainImg}  w-100 mt-5`}>
                            <img className='w-100' src="../../software.png" alt="" />
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
