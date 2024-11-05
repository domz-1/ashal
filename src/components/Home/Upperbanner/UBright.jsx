import { Typography } from '@mui/material';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { GoDotFill } from 'react-icons/go';
const Right = () => {
    return (
        <div className="right">
            <Typography variant="text14" className="email">
                <MdOutlineEmail />
                ashalsolutions@gmail.com
            </Typography>
            <GoDotFill style={{ width: 10, height: 10 }} />
            <Typography variant="text14" className="phone">
                <FiPhoneCall />
                +966 234 567 89
            </Typography>
        </div>
    );
};

export default Right;
