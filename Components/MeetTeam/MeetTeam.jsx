import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import style from './MeetTeam.module.css'
export default function MeetTeam() {
    return (
        <div className={`${style.body}`}>
            <div className='mb-5 pb-5'>
                <h2 className={`${style.title} text-center mb-5`}>Meet Our Team</h2>

                <Carousel className='w-75 m-auto'>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="../../meetteam.png"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="../../meetteam.png"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="../../meetteam.png"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

            </div>
        </div>
    )
}
