import { AppBar, Container } from '@mui/material';
import React from 'react';
import Logo from '../../../assets/logo.png';
import NavIcons from './NavIcons';
import NavLinks from './NavLinks';
import Search from './Search';

const Navbar = () => {
    return (
        <AppBar position="static" className="navbar">
            <Container className="wrapper">
                <img
                    src={Logo}
                    alt="logo"
                    className="logo"
                    style={{ cursor: 'pointer' }}
                />
                <NavLinks />
                <Search />
                <NavIcons />
            </Container>
        </AppBar>
    );
};

export default Navbar;
