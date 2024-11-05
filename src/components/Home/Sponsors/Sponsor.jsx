const Sponsor = (props) => {
    const { image } = props;
    return (
        <div className="sponsor">
            <img src={image} alt="" />
            <p className="sponsor-name">{props.name}</p>
        </div>
    );
};

export default Sponsor;
