import { FaArrowLeftLong } from 'react-icons/fa6';
import { FaArrowRightLong } from 'react-icons/fa6';
const CategoryHeader = (props) => {
    const { headerName, navigateToNextPage, navigateToPreviousPage } = props;
    return (
        <div className="category-header">
            <p className="header-name">{headerName}</p>
            <div className="buttons">
                <button className="button-right" onClick={navigateToNextPage}>
                    <FaArrowRightLong />
                </button>
                <button
                    className="button-left"
                    onClick={navigateToPreviousPage}
                >
                    <FaArrowLeftLong />
                </button>
            </div>
        </div>
    );
};

export default CategoryHeader;
