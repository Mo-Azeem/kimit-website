import React from 'react'
import style from './ServiceSoftware.module.css'
export default function ServiceSoftware() {
    return (
        <div className='text-center pt-5 mb-5'>
            <h2 className={`${style.mainTitle}`} >Our Service</h2>
            <div className={`${style.mainTitleDescCont}`}>
                <h6 className={`${style.mainTitleDesc} pb-5`}>The services we offer to you at our Software agency <br /> to get all you need and more with us</h6>
            </div>
            <div className="container ">
                <div className="row gy-5 gx-0">
                    <div className="col-md-6 col-lg-3">
                        <div className={`${style.item}   text-center shadow position-relative border-radius`}>
                            <img className='pt-2' src="../../serviceSoft1.png" alt="" />
                            <h5 className={`${style.title} pt-2`}>UI/UX Design</h5>
                            <p className={`${style.desc} pt-2 pb-5`}>Design your project our most creative experienced team</p>
                            <div className={`${style.itemhov} position-absolute w-100 h-100 border-radius`}>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className={`${style.item}   text-center shadow position-relative border-radius`}>
                            <img className='pt-2' src="../../serviceSoft1.png" alt="" />
                            <h5 className={`${style.title} pt-2`}>UI/UX Design</h5>
                            <p className={`${style.desc} pt-2 pb-5`}>Design your project our most creative experienced team</p>
                            <div className={`${style.itemhov} position-absolute w-100 h-100 border-radius`}>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className={`${style.item}   text-center shadow position-relative border-radius`}>
                            <img className='pt-2' src="../../serviceSoft1.png" alt="" />
                            <h5 className={`${style.title} pt-2`}>UI/UX Design</h5>
                            <p className={`${style.desc} pt-2 pb-5`}>Design your project our most creative experienced team</p>
                            <div className={`${style.itemhov} position-absolute w-100 h-100 border-radius`}>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className={`${style.item}   text-center shadow position-relative border-radius`}>
                            <img className='pt-2' src="../../serviceSoft1.png" alt="" />
                            <h5 className={`${style.title} pt-2`}>UI/UX Design</h5>
                            <p className={`${style.desc} pt-2 pb-5`}>Design your project our most creative experienced team</p>
                            <div className={`${style.itemhov} position-absolute w-100 h-100 border-radius`}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
