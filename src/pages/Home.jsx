import Navbar from '../components/Home/Navbar/Navbar';
import Uppbanner from '../components/Home/Upperbanner/Uppbanner';
import Offers from '../components/Home/Offers/Offers';
import NewArrival from '../components/Home/NewArrival/NewArrival';
import TodaysOffer from '../components/Home/TodaysOffer/TodaysOffer';
import { Container } from '@mui/material';
import LandingSlider from '../components/Home/LandingSlider/LandingSlider';
import Sponsors from '../components/Home/Sponsors/Sponsors';
const Home = () => {
    return (
        <div className="home">
            <Uppbanner />
            <Navbar />
            <Container>
                <LandingSlider />
                <Offers />
            </Container>
            <Container
                maxWidth="xl"
                className="wrapper"
                sx={{ width: '1500px' }}
            >
                <Sponsors />
                <NewArrival />
            </Container>
            <Container>
                <TodaysOffer />
            </Container>
        </div>
    );
};

export default Home;
