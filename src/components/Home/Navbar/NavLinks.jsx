import { Typography } from '@mui/material';
import React from 'react';

const NavLinks = () => {
    return (
        <div className="links">
            <Typography variant="text14" href="/" className="active">
                الرئيسية
            </Typography>
            <Typography variant="text14" href="/">
                عن أسهل
            </Typography>
            <Typography variant="text14" href="/">
                الأقسام
            </Typography>
            <Typography variant="text14" href="/">
                المتاجر
            </Typography>
            <Typography variant="text14" href="/">
                تواصل معنا
            </Typography>
        </div>
    );
};

export default NavLinks;
