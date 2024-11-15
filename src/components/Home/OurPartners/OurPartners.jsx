import S1 from '../../../assets/s1.png';
import S2 from '../../../assets/s2.png';
import S3 from '../../../assets/s3.png';
import S4 from '../../../assets/s4.png';
import S5 from '../../../assets/s5.png';
import S6 from '../../../assets/s6.png';
import Marquee from 'react-fast-marquee';

const OurPartners = () => {
    return (
        <Marquee className="OurPartners" speed={50} direction={'left'}>
            <img src={S1} alt="" />
            <img src={S2} alt="" />
            <img src={S3} alt="" />
            <img src={S4} alt="" />
            <img src={S5} alt="" />
            <img src={S6} alt="" />
        </Marquee>
    );
};

export default OurPartners;
