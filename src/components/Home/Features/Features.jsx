import { Container } from '@mui/material';
import Feature from './Feature';
import Icon1 from '../../../assets/icon1.png';
import Icon2 from '../../../assets/icon2.png';
import Icon3 from '../../../assets/icon3.png';
import Icon4 from '../../../assets/icon4.png';

const Features = () => {
    return (
        <div className="Features">
            <Container className="wrapper">
                <Feature
                    icon={Icon1}
                    title="الجودة العالية"
                    desc="نحن نوفر منتجات عالية الجودة بأسعار تنافسية."
                />
                <Feature
                    icon={Icon2}
                    title="ضمان إعادة المال"
                    desc="سعر الشراء الخاص بك بالإضافة إلى تكاليف الشحن على المشتريات "
                />
                <Feature
                    icon={Icon3}
                    title="الدعم على مدار الساعة"
                    desc="احصل على المساعدة التي تحتاجها من مساعدنا الآلي"
                />
                <Feature
                    icon={Icon4}
                    title="الشحن الحر والسريع"
                    desc="طلبك يوصل لباب البيت بشركة شحن من إختيارك"
                />
            </Container>
        </div>
    );
};

export default Features;
