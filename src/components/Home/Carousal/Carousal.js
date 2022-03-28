import React from 'react';
import { Carousel } from 'react-bootstrap';

import './Carousal.css'

const Carousal = () => {
    return (
        <div>
        <Carousel fade>
            <Carousel.Item interval={1000}>
                <img height="580px"
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y291cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                    alt=""
                />
                <Carousel.Caption >
                    <h1 style={{color:"rgb(199,21,133)",fontWeight:"bold"}}>We Care For Your Mental Growth</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    height="580px"
                    className="d-block w-100 "
                    src="https://media.istockphoto.com/photos/group-of-unrecognisable-international-students-having-online-meeting-picture-id1300822108?b=1&k=20&m=1300822108&s=170667a&w=0&h=CPtbj-Ax8p0oHcxhk30uhQEXc05Yg1LrfEdpxN1p2rc="
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1 style={{color:"rgb(199,21,133)",fontWeight:"bold"}}>We Ensure Your Betterment</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    height="580px"
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y291cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1 style={{color:"rgb(199,21,133)",fontWeight:"bold"}}>Our Services Make You Feel Comfort</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
    );
};

export default Carousal;