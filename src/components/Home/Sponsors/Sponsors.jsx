import React, { useState } from 'react';
import ArrowL from '../../../utils/ArrowL.jsx';
// Import images
import Kazaf from '../../../assets/Kazaf.png';
import Bd from '../../../assets/Bd.png';
import Lights from '../../../assets/Lights.png';
import Fern from '../../../assets/Fern.png';
import Kitchen from '../../../assets/Kitchen.png';
import decore from '../../../assets/decore.png';
import Marquee from 'react-fast-marquee';
import Sponsor from './Sponsor';

const Sponsors = () => {
    const [direction, setDirection] = useState('left');
    return (
        <div className="sponsors">
            {/* <ArrowL direction="right" onClick={() => setDirection('right')} /> */}
            <div className="marquee-wrapper">
                <Marquee
                    direction={direction}
                    className="wrapper"
                    pauseOnClick={true}
                    pauseOnHover={true}
                    gradient={false}
                    speed={50}
                >
                    <Sponsor image={Kazaf} name="الخزف" />
                    <Sponsor image={Bd} name="هدايا عيد الميلاد" />
                    <Sponsor image={Lights} name="الإضاءة" />
                    <Sponsor image={Fern} name="الأثاث" />
                    <Sponsor image={Kitchen} name="أغراض المطبخ" />
                    <Sponsor image={decore} name="الديكور" />
                </Marquee>
            </div>
            {/* <ArrowL direction="left" onClick={() => setDirection('left')} /> */}
        </div>
    );
};

export default Sponsors;
