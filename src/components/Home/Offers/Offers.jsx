import BareImge from '../../../assets/bare.png';
import ChaireImge from '../../../assets/chaire.png';
import Offer from './Offer';

const Offers = () => {
    return (
        <div className="offers">
            <Offer
                image={BareImge}
                cat="هدايا عيد الميلاد"
                description="تنزيلات 10% على جميع المنتجات اليدوية"
                color="black"
            />
            <Offer
                image={ChaireImge}
                cat=" الديكور"
                description="20% على ديكور المنزل اليوم فقط"
                color="rgba(255, 128, 0, 1)"
            />
        </div>
    );
};

export default Offers;
