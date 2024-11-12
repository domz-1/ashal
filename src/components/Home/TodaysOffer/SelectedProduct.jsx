import { useState } from 'react';
import { Button, Rating, IconButton } from '@mui/material';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { TbArrowsLeftRight } from 'react-icons/tb';
import CountdownTimer from '../../../utils/CountdownTimer';

const SelectedProduct = ({ product }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [rate, setRate] = useState(product.rating || 0);

    return (
        <div className="SelectedPhoto">
            <div className="img">
                <img src={product.src} alt="Selected" className="" />
                <div className="dno">
                    <div className="offer">عرض {product.discount}%</div>
                    <div className="description">{product.isOffer}</div>
                </div>
            </div>
            <div className="text">
                <p className="Offer">عرض اليوم</p>
                <p className="OfferName">{product.name}</p>
                <p className="OfferDate"></p>
                <span className="rating">
                    <Rating
                        value={rate} // Updated to use `rate`
                        sx={{ direction: 'rtl' }}
                        onChange={(e, newValue) => setRate(newValue)}
                    />
                    <p>{product.reviews} استعراض</p>
                </span>
                <p className="offerDesc">{product.description}</p>
                <div className="offerPrice">
                    <div className="price">{product.price.toFixed(2)} ر.س </div>{' '}
                    &nbsp;&nbsp;
                    <div className="OldPrice">
                        {product.oldPrice.toFixed(2)} ر.س
                    </div>
                </div>
                <CountdownTimer targetDate={product.date} />

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
                        إضافة سلة التسوق{' '}
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
                        onClick={() => {
                            setIsFavorite(!isFavorite);
                        }}
                    >
                        {isFavorite ? (
                            <FaHeart style={{ color: 'red' }} />
                        ) : (
                            <FaRegHeart />
                        )}
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
    );
};

export default SelectedProduct;
