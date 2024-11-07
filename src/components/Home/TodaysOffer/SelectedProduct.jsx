import React from 'react';
import { Button, Rating, IconButton } from '@mui/material';
import { CiHeart } from 'react-icons/ci';
import { TbArrowsLeftRight } from 'react-icons/tb';
import CountdownTimer from '../../../utils/CountdownTimer';

const SelectedProduct = ({ product }) => {
    return (
        <div className="SelectedPhoto">
            <div className="img">
                <img
                    src={product.src}
                    alt="Selected"
                    className=""
                />
                <div className="dno">
                    <div className="offer">{product.discount}% Off</div>
                    <div className="description">New</div>
                </div>
            </div>
            <div className="text">
                <p className="Offer">Today's Offer</p>
                <p className="OfferName">{product.name}</p>
                <p className="OfferDate">
                </p>
                <span className="rating">
                    <Rating value={product.rating} />
                    <p>{product.reviews} reviews</p>
                </span>
                <p className="offerDesc">{product.description}</p>
                <div className="offerPrice">
                    <div className="price">${product.price.toFixed(2)}</div>
                    <div className="OldPrice">${product.oldPrice.toFixed(2)}</div>
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
                        Add to Cart
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
    );
};

export default SelectedProduct; 