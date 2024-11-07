import { HiOutlineLocationMarker } from 'react-icons/hi';
import { PiPhoneCallBold } from 'react-icons/pi';
const Right = () => {
    return (
        <div className="right">
            <div className="text">
                <p className="title">عن أسهل</p>
                <p className="desc">
                    نعيد تعريف تجربة التسوق عبر الإنترنت <br /> من خلال تقديم
                    منصة متعددة التجار.
                </p>
            </div>
            <div className="icons">
                <div className="location">
                    <HiOutlineLocationMarker size={24} />
                    <p className="location-name">المملكة العربية السعودية</p>
                </div>
                <div className="phone">
                    <PiPhoneCallBold size={24} />
                    <div className="numbers">
                        <p>(+966) 064 284 118</p>
                        <p>(+966) 055 626 136</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Right;
