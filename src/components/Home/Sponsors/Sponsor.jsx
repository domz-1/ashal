const Sponsor = (props) => {
    const { image, name, isSelected } = props;
    return (
        <div className="sponsor">
            <img src={image} alt="" />
            <p
                className="sponsor-name"
                style={{
                    color: isSelected
                        ? 'rgba(255, 128, 0, 1)'
                        : 'rgba(46, 46, 46, 1)',
                }}
            >
                {name}
            </p>
        </div>
    );
};

export default Sponsor;
