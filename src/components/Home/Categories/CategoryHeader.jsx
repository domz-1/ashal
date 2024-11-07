import { FaArrowLeftLong } from 'react-icons/fa6';
import { FaArrowRightLong } from 'react-icons/fa6';
const CategoryHeader = (props) => {
    const { headerName, navigateToNextPage, navigateToPreviousPage } = props;
    return (
        <div className="category-header">
            <p className="header-name">{headerName}</p>
            <div className="buttons">
                <div
                    className="button-right"
                    onClick={() => navigateToNextPage}
                >
                    <FaArrowRightLong />
                </div>
                <div
                    className="button-left"
                    onClick={() => navigateToPreviousPage}
                >
                    <FaArrowLeftLong />
                </div>
            </div>
        </div>
    );
};

export default CategoryHeader;
