// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Image from '../../../assets/landing.png';
// import Shop from '../../../assets/shopping.png';
// import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
// import { Typography } from '@mui/material';
// /*************  ✨ Codeium Command ⭐  *************/
// /**
//  * A carousel component that displays a landing page slide show.
//  *
//  * This component displays a carousel with one slide. The slide contains
//  * an image and a caption with a header and some text. The caption is
//  * hidden on mobile devices and only visible on larger screens.
//  *
//  * The carousel also contains navigation buttons to navigate to the next
//  * or previous slide.
//  *
//  * @returns A React component that renders a carousel with one slide.
//  */
// /******  128e9af2-1100-4d08-b8e4-83da1cffc192  *******/
// const LandingSlider = () => {
//     return (
//         <div className="landing">
//             <div id="carouselExample" className="carousel slide">
//                 <div className="carousel-inner">
//                     <div className="carousel-item active">
//                         <img
//                             src={Image}
//                             className="d-block w-100"
//                             alt="Landing slide 1"
//                         />
//                         <div className="carousel-caption d-none d-md-block">
//                             <div className="text">
//                                 <Typography variant="text48" className="bold">
//                                     <span
//                                         style={{
//                                             color: 'rgba(116, 13, 139, 1)',
//                                         }}
//                                     >
//                                         أسهل،
//                                     </span>
//                                     خلّى التسوق أسهل، قارن، اختر، وادفع بأفضل
//                                     الأسعار
//                                 </Typography>
//                                 <br />
//                                 <Typography
//                                     variant="text16"
//                                     sx={{
//                                         fontSize: '16px',
//                                         color: 'rgba(114, 114, 114, 1)',
//                                     }}
//                                 >
//                                     استمتع بتجربة تسوق سلسة مع إمكانية مقارنة
//                                     المنتجات المتطابقة من <br />
//                                     عدة بائعين. اكتشف الأسعار والعروض التي
//                                     تناسبك بدون عناء.
//                                 </Typography>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <button
//                     className="carousel-control-prev"
//                     type="button"
//                     data-bs-target="#carouselExample"
//                     data-bs-slide="prev"
//                 >
//                     <FaArrowLeftLong
//                         className="custom-arrow"
//                         aria-hidden="true"
//                     />
//                     <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button
//                     className="carousel-control-next"
//                     type="button"
//                     data-bs-target="#carouselExample"
//                     data-bs-slide="next"
//                 >
//                     <FaArrowRightLong
//                         className="custom-arrow"
//                         aria-hidden="true"
//                     />
//                     <span className="visually-hidden">Next</span>
//                 </button>
//             </div>
//             <img src={Shop} alt="" className="shop" />
//         </div>
//     );
// };

// export default LandingSlider;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container, Button } from 'react-bootstrap';
import Image from '../../../assets/landing.png';
import Shop from '../../../assets/shopping.png';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const LandingSlider = () => {
    return (
        <div className="landing">
            <Container>
                <Carousel
                    className="carousel slide"
                    controls={true}
                    indicators={false}
                    prevIcon={<FaArrowLeftLong className="custom-arrow left" />}
                    nextIcon={
                        <FaArrowRightLong className="custom-arrow right" />
                    }
                >
                    <Carousel.Item className="carousel-item carousel-inner position-relative">
                        <img
                            src={Image}
                            className="d-block w-100"
                            alt="Landing slide 1"
                        />
                        <Carousel.Caption className="d-none d-md-block mb-3 ">
                            <div className="text mb-3">
                                <h1
                                    className="display-4 fw-bold"
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
                                    عدة بائعين. اكتشف الأسعار والعروض التي
                                    تناسبك بدون عناء.
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
                                    className="display-4 fw-bold"
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
                                    عدة بائعين. اكتشف الأسعار والعروض التي
                                    تناسبك بدون عناء.
                                </p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
};

export default LandingSlider;
