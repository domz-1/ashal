import { GoPerson } from 'react-icons/go';
import { LuHeart } from 'react-icons/lu';
import Typography from '@mui/material/Typography';
import { CgBox } from 'react-icons/cg';
const NavIcons = () => {
    return (
        <div className="icons">
            <Typography
                variant="text16"
                sx={{ width: 20, height: 20, cursor: 'pointer' }}
            >
                EN
            </Typography>
            <div className="cart" style={{ cursor: 'pointer' }}>
                <CgBox size={20} style={{ cursor: 'pointer' }} />
                <div className="count">1</div>
            </div>
            <LuHeart size={20} style={{ cursor: 'pointer' }} />
            <GoPerson size={20} style={{ cursor: 'pointer' }} />
        </div>
    );
};

export default NavIcons;
