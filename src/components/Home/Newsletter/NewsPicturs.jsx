import TopRight from '../../../assets/TopRight.png';
import BottomRight from '../../../assets/BottomRight.png';
import BottomLeft from '../../../assets/BottomLeft.png';
import TopLeft from '../../../assets/TopLeft.png';
const NewsPicturs = () => {
    return (
        <div className="NewsPicturs">
            <div className="Top">
                <img src={TopLeft} alt="TopLeft" />
                <img
                    src={TopRight}
                    alt="TopRight"
                    style={{ cursor: 'pointer' }}
                />
            </div>
            <div className="Bottom">
                <img src={BottomLeft} alt="BottomLeft" />
                <img src={BottomRight} alt="BottomRight" />
            </div>
        </div>
    );
};

export default NewsPicturs;
