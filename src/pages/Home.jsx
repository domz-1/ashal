import Navbar from '../components/Home/Navbar/Navbar';
import Uppbanner from '../components/Home/Upperbanner/Uppbanner';
import Offers from '../components/Home/Offers/Offers';
import { Container } from '@mui/material';

import LandingSlider from '../components/Home/LandingSlider/LandingSlider';
const Home = () => {
    return (
        <div className="home">
            <Uppbanner />
            <Navbar />
            <Container>
                <LandingSlider />
                <Offers />
            </Container>
        </div>
    );
};

export default Home;
