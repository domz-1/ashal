const Item = ({ img, storeName, productName, price, OldPrice }) => {
    return (
        <div className="Item">
            <div className="item-img">
                <img src={img} alt="" />
            </div>
            <div className="text">
                <p className="store-name">{storeName}</p>
                <h3 className="product-name" style={{ cursor: 'pointer' }}>
                    {productName}
                </h3>
                <div className="prices">
                    <span className="new-price">{price}</span>
                    <span className="old-price">{OldPrice}</span>
                </div>
            </div>
        </div>
    );
};

export default Item;
