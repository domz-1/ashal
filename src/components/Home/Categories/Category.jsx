import React, { useState, useEffect } from 'react';
import Item from './Item';
import CategoryHeader from './CategoryHeader';

const Category = ({ headerName, productsList = {} }) => {
    // Destructure products and create an array of items
    const { productOne, productTwo, productThree, ...rest } = productsList;
    const productsArray = [
        productOne,
        productTwo,
        productThree,
        ...Object.values(rest),
    ].filter(Boolean);

    const [viewedProducts, setViewedProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Set initial products when productsArray has items
        if (productsArray.length > 0) {
            setViewedProducts(productsArray.slice(0, 3));
        }
    }, [productsArray.length]);

    function viewNextPage() {
        const nextIndex = currentIndex + 3;
        if (nextIndex < productsArray.length) {
            setViewedProducts(productsArray.slice(nextIndex, nextIndex + 3));
            setCurrentIndex(nextIndex);
        }
        console.log(viewedProducts);
    }

    function viewPreviousPage() {
        const prevIndex = currentIndex - 3;
        if (prevIndex >= 0) {
            setViewedProducts(productsArray.slice(prevIndex, prevIndex + 3));
            setCurrentIndex(prevIndex);
        }
        console.log(viewedProducts);
    }

    // Only render content if products are available
    if (productsArray.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="category-wrapper">
            <CategoryHeader
                headerName={headerName}
                navigateToNextPage={viewNextPage}
                navigateToPreviousPage={viewPreviousPage}
            />
            <div className="category-items">
                {viewedProducts.map((product, index) => (
                    <Item
                        key={index}
                        img={product.img}
                        storeName={product.storeName}
                        productName={product.productName}
                        price={product.price}
                        oldPrice={product.oldPrice}
                    />
                ))}
            </div>
        </div>
    );
};

export default Category;
