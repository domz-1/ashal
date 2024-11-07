const Feature = ({ icon, title, desc }) => {
    return (
        <div className="Feature">
            <div className="img">
                <img src={icon} alt="" />
            </div>
            <div className="text">
                <p className="title"> {title}</p>
                <p className="desc"> {desc}</p>
            </div>
        </div>
    );
};

export default Feature;
