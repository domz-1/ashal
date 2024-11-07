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
import MostCell from './../components/Home/MostCellOld/MostCell';
import OurPartners from './../components/Home/OurPartners/OurPartners';
import Newsletter from './../components/Home/Newsletter/Newsletter';
import Features from '../components/Home/Features/Features';

import Footer from '../components/Home/Footer/Footer';
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
            <Container
                maxWidth="xl"
                className="wrapper"
                sx={{ width: '1500px' }}
            >
                <MostCell />
            </Container>
            <Container>
                <OurPartners />
                <Newsletter />
            </Container>
            <Features />
            <Footer />
        </div>
    );
};

export default Home;
