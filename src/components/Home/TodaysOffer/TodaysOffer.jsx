import { useState } from 'react';
import ProductList from './ProductList';
import SelectedProduct from './SelectedProduct';
import { products } from './products';

const TodaysOffer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState(products[0]);

    const handlePrevProduct = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? products.length - 1 : prevIndex - 1
        );
        setSelectedProduct(products[(currentIndex - 1 + products.length) % products.length]);
    };

    const handleNextProduct = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === products.length - 1 ? 0 : prevIndex + 1
        );
        setSelectedProduct(products[(currentIndex + 1) % products.length]);
    };

    const handleImageClick = (index) => {
        setCurrentIndex(index);
        setSelectedProduct(products[index]);
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
