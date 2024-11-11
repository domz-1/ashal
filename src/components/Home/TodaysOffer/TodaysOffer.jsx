import { useState } from 'react';
import ProductList from './ProductList';
import SelectedProduct from './SelectedProduct';
import { productsToday } from './TodaysOffer';

const TodaysOffer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState(productsToday[0]);

    const handlePrevProduct = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? productsToday.length - 1 : prevIndex - 1
        );
        setSelectedProduct(
            productsToday[
                (currentIndex - 1 + productsToday.length) % productsToday.length
            ]
        );
    };

    const handleNextProduct = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === productsToday.length - 1 ? 0 : prevIndex + 1
        );
        setSelectedProduct(
            productsToday[(currentIndex + 1) % productsToday.length]
        );
    };

    const handleImageClick = (index) => {
        console.log('Clicked on image:', index);
        setCurrentIndex(index);
        setSelectedProduct(productsToday[index]);
    };

    return (
        <div className="TodaysOffer">
            <ProductList
                currentIndex={currentIndex}
                handlePrevProduct={handlePrevProduct}
                handleNextProduct={handleNextProduct}
                handleImageClick={handleImageClick}
            />
            <SelectedProduct product={selectedProduct} />
        </div>
    );
};

export default TodaysOffer;
