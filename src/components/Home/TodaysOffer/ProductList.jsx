import React from 'react';
import ArrowL from '../../../utils/ArrowL';
import { productsToday } from './TodaysOffer';

const ProductList = ({
    currentIndex,
    handlePrevProduct,
    handleNextProduct,
    handleImageClick,
}) => {
    const visibleProducts = [
        productsToday[currentIndex],
        productsToday[(currentIndex + 1) % productsToday.length],
        productsToday[(currentIndex + 2) % productsToday.length],
    ];

    return (
        <ul className="Choice">
            <ArrowL
                direction="up"
                style={{
                    position: 'absolute',
                    top: -10,
                    zIndex: 10000,
                    opacity: currentIndex === 0 ? 0.5 : 1,
                }}
                onClick={handlePrevProduct}
            />
            {visibleProducts.map((product, index) => (
                <li
                    key={index}
                    className={` item ${
                        index === 0 ? 'active border-2 border-blue-500' : ''
                    }`}
                    onClick={() =>
                        handleImageClick(
                            (currentIndex + index) % productsToday.length
                        )
                    }
                >
                    {index === 0 ? (
                        <div className="blackifseclected"></div>
                    ) : null}

                    <img
                        src={product.src}
                        className="w-full h-full object-cover"
                    />
                </li>
            ))}
            <ArrowL
                direction="down"
                style={{
                    position: 'absolute',
                    bottom: -10,
                    opacity:
                        currentIndex === productsToday.length - 1 ? 0.5 : 1,
                }}
                onClick={handleNextProduct}
            />
        </ul>
    );
};

export default ProductList;
