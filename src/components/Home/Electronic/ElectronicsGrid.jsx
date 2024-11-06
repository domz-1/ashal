import ps from '../../../assets/ps.png';
import laptop from '../../../assets/laptop.png';
import screen from '../../../assets/screen.png';
import camera from '../../../assets/camera.png';
import sound from '../../../assets/sound.png';
import Electronic from './Electronic';

const ElectronicsGrid = () => {
    return (
        <div className="electronics-grid">
            <div className="right">
                <div className="one">
                    <Electronic
                        img={sound}
                        title="ضمان - تقسيط"
                        header="إكسسوارات الموبايل"
                        titleColor="rgba(255, 128, 0, 1)"
                        bgcolor="rgba(249, 232, 253, 1)"
                        imgPos="left"
                        className="second"
                    />
                    <Electronic
                        img={ps}
                        title="أسعار مناسبة"
                        header="ألعاب الفيديو"
                        titleColor="rgba(46, 160, 127, 1)"
                        bgcolor="rgba(211, 243, 245, 1)"
                        imgPos="corner"
                        className="first"
                    />
                </div>
                <div className="two">
                    <Electronic
                        img={camera}
                        title="أسعار مناسبة"
                        header="أدوات التصوير"
                        titleColor="rgba(46, 160, 127, 1)"
                        bgcolor="rgba(225, 248, 225, 1)"
                        imgPos="corner"
                        className="fourth"
                    />{' '}
                    <Electronic
                        img={laptop}
                        title="قسط يبدأ من 100 ر.س "
                        header="الإلكترونيات"
                        titleColor="rgba(63, 80, 163, 1)"
                        bgcolor="rgba(255, 242, 229, 1)"
                        imgPos="corner"
                        className="fifth"
                    />
                </div>
            </div>
            <Electronic
                img={screen}
                title="تقسيط حتى 12 شهر"
                header="الشاشات و التليفيزيونات"
                titleColor="rgba(255, 124, 4, 1)"
                bgcolor="rgba(255, 237, 205, 1)"
                imgPos="bottom"
                className="three"
            />
        </div>
    );
};

export default ElectronicsGrid;
