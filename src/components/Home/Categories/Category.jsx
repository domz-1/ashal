import Item from './Item';
import CategoryHeader from './CategoryHeader';

const Category = (props) => {
    const { headerName, productsList } = props;
    const { productOne, productTwo, productThree } = productsList;

    return (
        <div className="category-wrapper">
            <CategoryHeader headerName={headerName} />
            <div className="category-items">
                <Item
                    img={productOne.img}
                    storeName={productOne.storeName}
                    productName={productOne.productName}
                    price={productOne.price}
                    OldPrice={productOne.oldPrice}
                />
                <Item
                    img={productTwo.img}
                    storeName={productTwo.storeName}
                    productName={productTwo.productName}
                    price={productTwo.price}
                    OldPrice={productTwo.oldPrice}
                />
                <Item
                    img={productThree.img}
                    storeName={productThree.storeName}
                    productName={productThree.productName}
                    price={productThree.price}
                    OldPrice={productThree.oldPrice}
                />
            </div>
        </div>
    );
};

export default Category;
