import { GoPerson } from 'react-icons/go';
import { LuHeart } from 'react-icons/lu';
import { HiOutlineArchiveBox } from 'react-icons/hi2';
import Typography from '@mui/material/Typography';
import { CgBox } from 'react-icons/cg';
const NavIcons = () => {
    return (
        <div className="icons">
            <Typography variant="text16" sx={{ width: 20, height: 20 }}>
                EN
            </Typography>
            <div className="cart">
                <CgBox size={20} />
                <div className="count">2</div>
            </div>
            <LuHeart size={20} />
            <GoPerson size={20} />
        </div>
    );
};

export default NavIcons;
