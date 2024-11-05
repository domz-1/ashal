import image1 from '../assets/Img1.png';
import image2 from '../assets/Img2.png';
import image3 from '../assets/img3.png';
import image4 from '../assets/img4.png';
import Item from '../components/Home/NewArrival/Item';
import ArrowL from '../utils/ArrowL';

const ItemsWrapper = () => {
    return (
        <div className="items-wrapper">
            <ArrowL direction="right" />
            <div className="productsList">
                <Item
                    image={image1}
                    cat="المطبخ"
                    title="باسكت متعدد الأغراض"
                    OldPrice="19 ر.س"
                    price="22 ر.س"
                    description="جديد"
                />
                <Item
                    image={image2}
                    cat="ديكور "
                    title="ترابيزة جانبية"
                    OldPrice="19 ر.س"
                    price="22 ر.س"
                    description="جديد"
                    isOffer="15% OFF"
                />
                <Item
                    image={image3}
                    cat="ديكور"
                    title="طقم فخار مودرن"
                    OldPrice="19 ر.س"
                    price="22 ر.س"
                    description="جديد"
                />
                <Item
                    image={image4}
                    cat="المطبخ"
                    title="كوي خزفي عتيق"
                    OldPrice="19 ر.س"
                    price="22 ر.س"
                    description="جديد"
                />
            </div>
            <ArrowL direction="left" />
        </div>
    );
};

export default ItemsWrapper;
