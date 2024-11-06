import { useRef, useState } from 'react';
import Picture from '../../../assets/Picture.png';
import Picture1 from '../../../assets/Picture1.png';
import Picture2 from '../../../assets/Picture2.png';
import ArrowL from '../../../utils/ArrowL';
import CountdownTimer from '../../../utils/CountdownTimer';
import { Button, Rating, IconButton } from '@mui/material';
import { CiHeart } from 'react-icons/ci';
import { TbArrowsLeftRight } from 'react-icons/tb';

const TodaysOffer = () => {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const [selectedPhoto, setSelectedPhoto] = useState(ref1);
    const targetDate = new Date('2024-12-31T00:00:00');

    const getImageStyle = (ref) => ({
        // filter: selectedPhoto === ref ? 'none' : 'grayscale(100%)',
        transition: 'filter 0.3s ease',
    });

    const images = [
        { ref: ref1, src: Picture },
        { ref: ref2, src: Picture1 },
        { ref: ref3, src: Picture2 },
    ];

    return (
        <>
            <div className="TodaysOffer">
                <ul className="Choice">
                    <ArrowL
                        direction="up"
                        style={{ position: 'absolute', top: -10, zIndex: 100 }}
                    />
                    {images.map((image, index) => (
                        <li
                            key={index}
                            ref={image.ref}
                            onClick={() => setSelectedPhoto(image.ref)}
                            className={`cursor-pointer transition-all duration-300 hover:opacity-80 ${
                                selectedPhoto === image.ref
                                    ? 'active border-2 border-blue-500'
                                    : ''
                            }`}
                        >
                            <div
                                className={`blackifseclected ${
                                    selectedPhoto === image.ref
                                        ? 'bg-black opacity-25'
                                        : ''
                                }`}
                            ></div>
                            <img
                                src={image.src}
                                alt={`Picture ${index + 1}`}
                                style={getImageStyle(image.ref)}
                                className="w-full h-full object-cover"
                            />
                        </li>
                    ))}
                    <ArrowL
                        direction="down"
                        style={{ position: 'absolute', bottom: -10 }}
                    />
                </ul>
                <div className="SelectedPhoto">
                    <div className="img">
                        <img
                            src={
                                images.find((img) => img.ref === selectedPhoto)
                                    ?.src
                            }
                            alt="Selected"
                            className=""
                        />
                        <div className="dno">
                            <div className="offer">15% Off</div>
                            <div className="description">جديد</div>
                        </div>
                    </div>
                    <div className="text">
                        <p className="Offer">عرض اليوم</p>
                        <p className="OfferName">كوب خزفي هاند ميد</p>
                        <span className="rating">
                            <Rating value={5} />
                            <p>2 استعراض</p>
                        </span>
                        <p className="offerDesc">
                            طقم أكواب شاي صيني من طراز ريترو ستايل بيرسوناليتي
                            35 مل بورسلين بصمة يدوية ، فنجان شاي صغير ، فنجان
                            شاي صيني H358 - فناجين شاي المادة: سيراميك, السعة:
                            35 مل
                        </p>
                        <div className="offerPrice">
                            <div className="price">$19.00</div>
                            <div className="OldPrice">دولار 22.34</div>
                        </div>
                        <CountdownTimer targetDate={targetDate} />{' '}
                        <div className="btns">
                            <Button
                                variant="contained"
                                sx={{
                                    width: 182,
                                    height: 50,
                                    bgcolor: 'rgba(255, 128, 0, 1)',
                                    borderRadius: 0,
                                    boxShadow: 'none',
                                }}
                            >
                                إضافة سلة التسوق
                            </Button>
                            <IconButton
                                variant="contained"
                                sx={{
                                    color: 'rgba(114, 114, 114, 1)',
                                    width: 50,
                                    height: 50,
                                    bgcolor: 'white',
                                    borderRadius: 0,
                                    boxShadow: 'none',
                                    border: '1px solid rgba(214, 214, 214, 1)',
                                    p: '0px',
                                }}
                            >
                                <CiHeart size={30} />
                            </IconButton>
                            <IconButton
                                variant="contained"
                                sx={{
                                    color: 'rgba(114, 114, 114, 1)',
                                    width: 50,
                                    height: 50,
                                    bgcolor: 'white',
                                    borderRadius: 0,
                                    boxShadow: 'none',
                                    border: '1px solid rgba(214, 214, 214, 1)',
                                    p: '0px',
                                }}
                            >
                                <TbArrowsLeftRight size={30} />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TodaysOffer;
