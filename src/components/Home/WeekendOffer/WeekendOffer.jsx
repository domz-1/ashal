import Orgoha from '../../../assets/orgoha.png';

const WeekendOffer = () => {
    return (
        <div className="WeekendOffer">
            <div className="text">
                <p className="header-name">عروض اخر الأسبوع</p>
                <div className="title">
                    <p className="title-name">أرجوحة رتان</p>
                    <p className="sub-title">من Sweet furniture &nbsp;</p>
                </div>
                <div className="prices">
                    <span className="new-price">200 ر.س</span> &nbsp;
                    <span className="old-price">بدلاُ من 300 ر.س</span>
                </div>
                <p className="last" style={{ cursor: 'pointer' }}>
                    عرض الآن
                </p>
            </div>
            <div className="img">
                <img src={Orgoha} alt="" />
            </div>
        </div>
    );
};

export default WeekendOffer;
