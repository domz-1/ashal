import BnwLogo from '../../../../assets/bnwlogo.png';
import { FaSkype } from 'react-icons/fa';
import { SiTelegram } from 'react-icons/si';
import { FaPinterest } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const Center = () => {
    return (
        <div className="center">
            <div className="box">
                <div className="logo">
                    <img src={BnwLogo} alt="" />
                </div>
                <div className="social">
                    <div className="text">تابعنا:</div>
                    <div className="icons">
                        <FaSkype className="icon" />
                        <SiTelegram className="icon" />
                        <FaPinterest className="icon" />
                        <SiTiktok className="icon" />
                        <BsTwitter className="icon" />
                        <FaFacebook className="icon" />
                    </div>
                </div>
                <div className="links">
                    <p onClick={() => window.scrollTo(0, 0)}>الرئيسية</p>
                    <p>عن أسهل</p>
                    <p>المنتجات</p>
                    <p>التجار</p>
                    <p>تواصل معنا</p>
                </div>
            </div>
        </div>
    );
};

export default Center;
