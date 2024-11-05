import { GoPerson } from 'react-icons/go';
import { CiHeart } from 'react-icons/ci';
import { HiOutlineArchiveBox } from 'react-icons/hi2';
import Typography from '@mui/material/Typography';
const NavIcons = () => {
    return (
        <div className="icons">
            <Typography variant="text16" sx={{ width: 20, height: 20 }}>
                EN
            </Typography>
            <div className="cart">
                <HiOutlineArchiveBox size={20} />
                <div className="count">2</div>
            </div>
            <CiHeart size={20} />
            <GoPerson size={20} />
        </div>
    );
};

export default NavIcons;
