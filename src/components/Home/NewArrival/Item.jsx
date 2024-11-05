const Item = (props) => {
    const { image, cat, title, OldPrice, price, description, isOffer } = props;
    return (
        <div className="item">
            <div className="item-image">
                <img src={image} alt="" />
                <div className="dno">
                    {description && (
                        <div className="description">{description}</div>
                    )}
                    {isOffer && <div className="offer">{isOffer}</div>}
                </div>
            </div>
            <div className="item-details">
                <p className="cat">{cat}</p>
                <p className="title">{title}</p>
                <div className="price">
                    <p className="OldPrice">{OldPrice}</p>
                    <p className="price">{price}</p>
                </div>
            </div>
        </div>
    );
};

export default Item;
