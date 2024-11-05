import { Typography } from '@mui/material';
import { GoDotFill } from 'react-icons/go';

const Left = () => {
    return (
        <div className="left">
            <Typography variant="text14">تسجيل الدخول</Typography>
            <GoDotFill style={{ width: 10, height: 10 }} />
            <Typography variant="text14">أنشئ متجرك </Typography>
            <GoDotFill style={{ width: 10, height: 10 }} />
            <Typography variant="text14">الأسئلة الشائعة </Typography>
        </div>
    );
};

export default Left;
