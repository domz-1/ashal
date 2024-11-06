import { FaArrowLeftLong } from 'react-icons/fa6';
import { FaArrowRightLong } from 'react-icons/fa6';
const CategoryHeader = (props) => {
    const { headerName } = props;
    return (
        <div className="category-header">
            <p className="header-name">{headerName}</p>
            <div className="buttons">
                <div className="button-right">
                    <FaArrowRightLong />
                </div>
                <div className="button-left">
                    <FaArrowLeftLong />
                </div>
            </div>
        </div>
    );
};

export default CategoryHeader;
