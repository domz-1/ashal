import { useState } from 'react';
import image1 from '../assets/Img1.png';
import image2 from '../assets/Img2.png';
import image3 from '../assets/img3.png';
import image4 from '../assets/img4.png';
import Item from '../components/Home/NewArrival/Item';
import ArrowL from '../utils/ArrowL';
import { products } from './../components/Home/TodaysOffer/products';

const ItemsWrapper = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerView = 4;

    // Duplicate products to create a seamless loop
    const duplicatedProducts = [
        ...products,
        ...products,
        ...products,
        ...products,
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0
                ? duplicatedProducts.length - itemsPerView
                : prevIndex - itemsPerView
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + itemsPerView >= duplicatedProducts.length
                ? 0
                : prevIndex + itemsPerView
        );
    };

    return (
        <div className="items-wrapper">
            <ArrowL direction="right" onClick={handleNext} />
            <div className="productsList">
                {duplicatedProducts
                    .slice(currentIndex, currentIndex + itemsPerView)
                    .map((product, index) => (
                        <Item
                            image={product.src} // Assuming product has a src property
                            cat={product.category} // Assuming category is the product name for this example
                            title={product.name}
                            OldPrice={`${product.oldPrice.toFixed(2)} ر.س`}
                            price={`${product.price.toFixed(2)} ر.س`}
                            isOffer={`${
                                product.discount ? product.discount : ''
                            }`}
                            description={product.description}
                            key={index}
                        />
                    ))}
            </div>
            <ArrowL direction="left" onClick={handlePrev} />
        </div>
    );
};

export default ItemsWrapper;
