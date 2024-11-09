import Category from './Category';
import { productListOne, productListTwo, productListThree } from './products';
const CategoryWrapper = () => {
    return (
        <div className="CategoryWrapper">
            <Category headerName="أزياء" productsList={productListOne} />
            <Category headerName="أغراض المطبخ" productsList={productListTwo} />
            <Category headerName="الأثاث" productsList={productListThree} />
        </div>
    );
};

export default CategoryWrapper;
