import Sponsor from './Sponsor';
import Kazaf from '../../../assets/Kazaf.png';
import Bd from '../../../assets/Bd.png';
import Lights from '../../../assets/Lights.png';
import Fern from '../../../assets/Fern.png';
import Kitchen from '../../../assets/Kitchen.png';
import decore from '../../../assets/decore.png';
import ArrowL from '../../../utils/ArrowL.jsx';

const Sponsors = () => {
    return (
        <div className="sponsors">
            <ArrowL direction="right" />
            <div className="wrapper">
                <Sponsor image={Kazaf} name="الخزف" />
                <Sponsor image={Bd} name="هدايا عيدالميلاد" />
                <Sponsor image={Lights} name="الإضاءة" />
                <Sponsor image={Fern} name="الأثاث" />
                <Sponsor image={Kitchen} name="أغراض المطبخ" />
                <Sponsor image={decore} name="الديكور" />
            </div>
            <ArrowL direction="left" />
        </div>
    );
};

export default Sponsors;
