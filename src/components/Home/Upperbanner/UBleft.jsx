import { Typography } from '@mui/material';
import { GoDotFill } from 'react-icons/go';

const Left = () => {
    return (
        <div className="left">
            <Typography variant="text12">تسجيل الدخول</Typography>
            <GoDotFill style={{ width: 10, height: 10 }} />
            <Typography variant="text12">أنشئ متجرك </Typography>
            <GoDotFill style={{ width: 10, height: 10 }} />
            <Typography variant="text12">الأسئلة الشائعة </Typography>
        </div>
    );
};

export default Left;
