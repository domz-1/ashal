import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from '../../../assets/landing.png';
import Shop from '../../../assets/shopping.png';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { Typography } from '@mui/material';
const LandingSlider = () => {
    return (
        <div className="landing">
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src={Image}
                            className="d-block w-100"
                            alt="Landing slide 1"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <div className="text">
                                <Typography variant="text48" className="bold">
                                    <span
                                        style={{
                                            color: 'rgba(116, 13, 139, 1)',
                                        }}
                                    >
                                        أسهل،
                                    </span>
                                    خلّى التسوق أسهل، قارن، اختر، وادفع بأفضل
                                    الأسعار
                                </Typography>
                                <br />
                                <Typography
                                    variant="text16"
                                    sx={{
                                        fontSize: '16px',
                                        color: 'rgba(114, 114, 114, 1)',
                                    }}
                                >
                                    استمتع بتجربة تسوق سلسة مع إمكانية مقارنة
                                    المنتجات المتطابقة من <br />
                                    عدة بائعين. اكتشف الأسعار والعروض التي
                                    تناسبك بدون عناء.
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                >
                    <FaArrowLeftLong
                        className="custom-arrow"
                        aria-hidden="true"
                    />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                >
                    <FaArrowRightLong
                        className="custom-arrow"
                        aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <img src={Shop} alt="" className="shop" />
        </div>
    );
};

export default LandingSlider;
