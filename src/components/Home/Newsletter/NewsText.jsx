import { Button } from '@mui/material';
import { TfiEmail } from 'react-icons/tfi';
const NewsText = () => {
    return (
        <div className="NewsText">
            <p className="header-name">نشرتنا الإخبارية</p>
            <p className="desc">
                انضم إلى قائمة المراسلات الخاصة بنا لتحديث أحدث المنتجات، ولا
                تفوتك العروض الترويجية التي سنرسلها إليك
            </p>
            <div className="input">
                <input
                    type="email"
                    name=""
                    id=""
                    className="email-input"
                    placeholder=" بريدك الإلكتروني"
                />
                <TfiEmail
                    style={{
                        position: 'absolute',
                        right: '10px',
                        top: '10px',
                        color: ' rgba(114, 114, 114, 1)',
                    }}
                />
            </div>
            <Button
                variant="contained"
                sx={{
                    width: '150px',
                    borderRadius: '0px',
                    backgroundColor: 'rgba(255, 128, 0, 1)',
                    color: 'rgba(255, 255, 255, 1)',
                    fontSize: '14px',
                    boxShadow: 'none',
                }}
            >
                الاشتراك الآن
            </Button>
        </div>
    );
};

export default NewsText;
