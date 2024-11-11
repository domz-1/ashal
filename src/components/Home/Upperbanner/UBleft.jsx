import { Typography } from '@mui/material';
import { GoDotFill } from 'react-icons/go';

const Left = () => {
    return (
        <div className="left">
            <Typography variant="text12" sx={{ cursor: 'pointer' }}>
                تسجيل الدخول
            </Typography>
            <GoDotFill style={{ width: 10, height: 10 }} />
            <Typography variant="text12" sx={{ cursor: 'pointer' }}>
                أنشئ متجرك{' '}
            </Typography>
            <GoDotFill style={{ width: 10, height: 10 }} />
            <Typography variant="text12" sx={{ cursor: 'pointer' }}>
                الأسئلة الشائعة{' '}
            </Typography>
        </div>
    );
};

export default Left;
