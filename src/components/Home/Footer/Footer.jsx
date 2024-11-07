import { Container } from '@mui/material';
import FooterUp from './FooterUp.jsx/FooterUp';
import FooterDown from './FooterDown.jsx/FooterDown';

const Footer = () => {
    return (
        <div className="Footer">
            <Container className="wrapper">
                <FooterUp />
                <FooterDown />
            </Container>
        </div>
    );
};

export default Footer;
