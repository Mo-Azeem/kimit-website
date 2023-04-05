import React from 'react'
import style from './NumOfClients.module.css'
export default function NumOfClients() {
    return (
        <div className={`${style.background}`}>
            <div className={`${style.bodyy} w-100 h-100 pb-5  `}>
                <div className="container h-100 text-white">
                    <div className={`${style.section}  row`}>
                        <div className="col-md-5 d-flex align-items-center">
                            <div className="desc d-flex align-items-center  h-100">
                                <div>
                                    <h2 className={`${style.descone}`}>Over 500+ Completed Working And Still Counting</h2>
                                    <h6 className={`${style.descTwo} pt-4`}>There are many variations of passages of Lorem Ipsum but the majority have suffered alteration</h6>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.numsSec} col-md-7 `}>
                            <div className="row g-0">
                                <div className={`col-md-6 ${style.leftnum} `}>
                                    <div className="d-flex flex-column">
                                        <div className="img text-center position-relative">
                                            <div className="image">
                                                <img src="../../num1.png" alt="" />
                                            </div>
                                            <div className={` ${style.num} position-absolute `}>
                                                <h2 className={`${style.number}`}>30</h2>
                                            </div>
                                            <h6 className={`${style.numDesc}`}>Client</h6>
                                        </div>
                                        <div className={`img text-center position-relative mt-2 `}>
                                            <img src="../../num1.png" alt="" />
                                            <div className={` ${style.num} position-absolute `}>
                                                <h2 className={`${style.number}`}>10</h2>
                                            </div>
                                            <h6 className={`${style.numDesc}`}>Active project</h6>
                                        </div>

                                    </div>
                                </div>
                                <div className={`col-md-6 ${style.righttnum}`}>
                                    <div className="d-flex flex-column ">
                                        <div className={`${style.img2} text-center position-relative `}>
                                            <img src="../../num2.png" className={`${style.image2}`} alt="" />
                                            <div className={` ${style.num2} position-absolute `}>
                                                <h2 className={`${style.number} ${style.bigNum} `}>50</h2>
                                            </div>
                                            <h6 className={`${style.numDesc}`}>Project Done</h6>
                                        </div>
                                        <div className="img text-center position-relative mt-2 pb-5">
                                            <img src="../../num1.png" alt="" />
                                            <div className={` ${style.num} position-absolute `}>
                                                <h2 className={`${style.number} `}>3</h2>
                                            </div>
                                            <h6 className={`${style.numDesc} pb-5`}>Years Experience</h6>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
