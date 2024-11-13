import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Image from '../../../assets/landing.png';
import Shop from '../../../assets/shopping.png';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const LandingSlider = () => {
    return (
        <div className="landing">
            <Carousel
                className="carousel"
                slide={false}
                controls={true}
                indicators={false}
                prevIcon={<FaArrowLeftLong className="custom-arrow left" />}
                nextIcon={<FaArrowRightLong className="custom-arrow right" />}
                style={{ overflow: 'visible' }}
            >
                <Carousel.Item
                    className="carousel-item carousel-inner position-relative"
                    style={{ overflow: 'visible' }}
                >
                    <img
                        src={Image}
                        className="d-block w-100"
                        alt="Landing slide 1"
                    />
                    <Carousel.Caption
                        className="d-none d-md-block mb-3 "
                        style={{ overflow: 'visible' }}
                    >
                        <div
                            className="text mb-3"
                            style={{ overflow: 'visible' }}
                        >
                            <h1
                                className="display-4 fw-bold lh-base"
                                style={{
                                    fontSize: '48px',
                                    lineHeight: '60px',
                                }}
                            >
                                <span
                                    style={{
                                        color: 'rgba(116, 13, 139, 1)',
                                    }}
                                >
                                    أسهل،
                                </span>
                                خلّى التسوق أسهل، قارن، اختر، وادفع بأفضل
                                الأسعار
                            </h1>
                            <p
                                style={{
                                    fontSize: '16px',
                                    color: 'rgba(114, 114, 114, 1)',
                                }}
                            >
                                <img
                                    src={Shop}
                                    alt="Shop Icon"
                                    className="shop"
                                />
                                استمتع بتجربة تسوق سلسة مع إمكانية مقارنة
                                المنتجات المتطابقة من <br />
                                عدة بائعين. اكتشف الأسعار والعروض التي تناسبك
                                بدون عناء.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item carousel-inner position-relative">
                    <img
                        src={Image}
                        className="d-block w-100"
                        alt="Landing slide 1"
                    />
                    <Carousel.Caption className="d-none d-md-block mb-3 ">
                        <div className="text mb-3">
                            <h1
                                className="display-4 fw-bold lh-base"
                                style={{ fontSize: '48px' }}
                            >
                                <span
                                    style={{
                                        color: 'rgba(116, 13, 139, 1)',
                                    }}
                                >
                                    أسهل،
                                </span>
                                خلّى التسوق أسهل، قارن، اختر، وادفع بأفضل
                                الأسعار
                            </h1>
                            <p
                                style={{
                                    fontSize: '16px',
                                    color: 'rgba(114, 114, 114, 1)',
                                }}
                            >
                                <img
                                    src={Shop}
                                    alt="Shop Icon"
                                    className="shop"
                                />
                                استمتع بتجربة تسوق سلسة مع إمكانية مقارنة
                                المنتجات المتطابقة من <br />
                                عدة بائعين. اكتشف الأسعار والعروض التي تناسبك
                                بدون عناء.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default LandingSlider;
