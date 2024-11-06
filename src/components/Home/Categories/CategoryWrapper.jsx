import C1P1 from '../../../assets/c1p1.png';
import C1P2 from '../../../assets/c1p2.png';
import C1P3 from '../../../assets/c1p3.png';
import C2P1 from '../../../assets/c2p1.png';
import C2P2 from '../../../assets/c2p2.png';
import C2P3 from '../../../assets/c2p3.png';
import C3P1 from '../../../assets/c3p1.png';
import C3P2 from '../../../assets/c3p2.png';
import C3P3 from '../../../assets/c3p3.png';
import Category from './Category';
const CategoryWrapper = () => {
    const productListOne = {
        productOne: {
            img: C1P1, // Remove the curly braces
            storeName: 'موديفا ستور',
            productName: 'جاكيت بامبي نسائي',
            price: '19.00 ر.س',
            oldPrice: '22.34 ر.س',
        },
        productTwo: {
            img: C1P2, // Remove the curly braces
            storeName: 'فاكتور ستور',
            productName: 'جاكيت بامبي رجالي',
            price: '19.00 ر.س',
            oldPrice: '22.34 ر.س',
        },
        productThree: {
            img: C1P3, // Remove the curly braces
            storeName: 'النصر الرياضي',
            productName: 'حذاء رياضي',
            price: '19.00 ر.س',
            oldPrice: '22.34 ر.س',
        },
    };

    const productListTwo = {
        productOne: {
            img: C2P1,
            storeName: 'جسيرك ستور',
            productName: 'كوب خزفي عتيق',
            price: '19.00 ر.س',
            oldPrice: '22.34 ر.س',
        },
        productTwo: {
            img: C2P2,
            storeName: 'موف ستور',
            productName: 'زهرية المينا الطبيعية',
            price: '19.00 ر.س',
            oldPrice: '22.34 ر.س',
        },
        productThree: {
            img: C2P3,
            storeName: 'زهرة ستور',
            productName: 'زهرية المينا من الفخار',
            price: '19.00 ر.س',
            oldPrice: '22.34 ر.س',
        },
    };

    const productListThree = {
        productOne: {
            img: C3P1,
            storeName: 'جينيرك ستور',
            productName: 'كرسي من الخشب الزان',
            price: '19.00 ر.س',
            oldPrice: '22.34 ر.س',
        },
        productTwo: {
            img: C3P2,
            storeName: 'فاكتور ستور',
            productName: 'ترابيزة جانبية',
            price: '19.00 ر.س',
            oldPrice: '22.34 ر.س',
        },
        productThree: {
            img: C3P3,
            storeName: 'موف ستور',
            productName: 'طاولة جانوس الخشبية',
            price: '19.00 ر.س',
            oldPrice: '22.34 ر.س',
        },
    };
    return (
        <div className="CategoryWrapper">
            <Category headerName="أزياء" productsList={productListOne} />
            <Category headerName="أغراض المطبخ" productsList={productListTwo} />
            <Category headerName="الأثاث" productsList={productListThree} />
        </div>
    );
};

export default CategoryWrapper;
