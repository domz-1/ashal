const Item = (props) => {
    const { image, cat, title, OldPrice, price, description, isOffer } = props;
    return (
        <div className="item">
            <div className="item-image">
                <img src={image} alt="" />
                <div className="dno">
                    {isOffer && (
                        <div
                            className="offer"
                            style={{
                                direction: 'rtl',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'row-reverse',
                                gap: '1px',
                            }}
                        >
                            <p>{`${isOffer && isOffer}%`}</p>
                            <p style={{ fontSize: '11px' }}>
                                {isOffer && 'عرض'}&nbsp;
                            </p>
                        </div>
                    )}
                    {description && (
                        <div className="description">{description}</div>
                    )}
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
