import Navbar from '../components/Home/Navbar/Navbar';
import Uppbanner from '../components/Home/Upperbanner/Uppbanner';
import Offers from '../components/Home/Offers/Offers';
import NewArrival from '../components/Home/NewArrival/NewArrival';
import TodaysOffer from '../components/Home/TodaysOffer/TodaysOffer';
import { Container } from '@mui/material';
import LandingSlider from '../components/Home/LandingSlider/LandingSlider';
import Sponsors from '../components/Home/Sponsors/Sponsors';
import ElectronicsGrid from '../components/Home/Electronic/ElectronicsGrid';
import CategoryWrapper from '../components/Home/Categories/CategoryWrapper';
import WeekendOffer from '../components/Home/WeekendOffer/WeekendOffer';
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
            <Container>
                <ElectronicsGrid />
                <CategoryWrapper />
                <WeekendOffer />
            </Container>
        </div>
    );
};

export default Home;
