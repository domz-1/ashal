const Sponsor = (props) => {
    const { image, name, isSelected } = props;
    return (
        <div className="sponsor">
            <img
                src={image}
                alt=""
                style={{
                    filter: 'grayscale(1)  hue-rotate(180deg) brightness(1.2)',
                    textShadow: '2px 2px 8px rgba(255, 87, 51, 0.8)',
                }}
            />
            <p
                className="sponsor-name"
                style={{
                    color: isSelected
                        ? 'rgba(46, 46, 46, 1)'
                        : 'rgba(46, 46, 46, 1)',
                }}
            >
                {name}
            </p>
        </div>
    );
};

export default Sponsor;
