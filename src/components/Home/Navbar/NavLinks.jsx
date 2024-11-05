import { Link, Typography } from '@mui/material';
import React from 'react';

const NavLinks = () => {
    return (
        <div className="links">
            <Typography variant="text16" href="/">
                الرئيسية
            </Typography>
            <Typography variant="text16" href="/">
                عن أسهل
            </Typography>
            <Typography variant="text16" href="/">
                الأقسام
            </Typography>
            <Typography variant="text16" href="/">
                المتاجر
            </Typography>
            <Typography variant="text16" href="/">
                تواصل معنا
            </Typography>
        </div>
    );
};

export default NavLinks;
