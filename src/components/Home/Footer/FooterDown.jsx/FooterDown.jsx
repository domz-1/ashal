import visa from '../../../../assets/payment card (1).png';
import paypal from '../../../../assets/payment card.png';
import master from '../../../../assets/payment card (2).png';
import amex from '../../../../assets/payment card (3).png';
import applepay from '../../../../assets/payment card (4).png';
import { FaCopyright } from 'react-icons/fa';
const FooterDown = () => {
    return (
        <div className="FooterDown">
            <div className="copyright">
                <FaCopyright />
                حقوق الطبع والنشر 2024 لصالح أسهل
            </div>
            <div className="pay">
                <img src={visa} alt="" />
                <img src={paypal} alt="" />
                <img src={master} alt="" />
                <img src={amex} alt="" />
                <img src={applepay} alt="" />
            </div>
        </div>
    );
};

export default FooterDown;
