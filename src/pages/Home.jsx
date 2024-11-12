// import Navbar from '../components/Home/Navbar/Navbar';
// import Uppbanner from '../components/Home/Upperbanner/Uppbanner';
// import Offers from '../components/Home/Offers/Offers';
// import NewArrival from '../components/Home/NewArrival/NewArrival';
// import { Container } from '@mui/material';
// import LandingSlider from '../components/Home/LandingSlider/LandingSlider';
// import Sponsors from '../components/Home/Sponsors/Sponsors';
// import ElectronicsGrid from '../components/Home/Electronic/ElectronicsGrid';
// import CategoryWrapper from '../components/Home/Categories/CategoryWrapper';
// import WeekendOffer from '../components/Home/WeekendOffer/WeekendOffer';
// import MostCell from './../components/Home/MostCellOld/MostCell';
// import OurPartners from './../components/Home/OurPartners/OurPartners';
// import Newsletter from './../components/Home/Newsletter/Newsletter';
// import Features from '../components/Home/Features/Features';
// import Footer from '../components/Home/Footer/Footer';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
// import TodaysOfferC from './../components/Home/TodaysOffer/TodaysOfferC';

// const Home = () => {
//     return (
//         <div className="home">
//             <Uppbanner />
//             <Navbar />
//             <Container>
//                 <LandingSlider />
//                 <Offers />
//             </Container>
//             <Container
//                 maxWidth="xl"
//                 className="wrapper"
//                 sx={{ width: '1500px' }}
//             >
//                 <Sponsors />
//                 <NewArrival />
//             </Container>
//             <Container>
//                 <TodaysOfferC />
//             </Container>
//             <Container>
//                 <ElectronicsGrid />
//                 <CategoryWrapper />
//                 <WeekendOffer />
//             </Container>
//             <Container
//                 maxWidth="xl"
//                 className="wrapper"
//                 sx={{ width: '1500px' }}
//             >
//                 <MostCell />
//             </Container>
//             <Container>
//                 <OurPartners />
//                 <Newsletter />
//             </Container>
//             <Features />
//             <Footer />
//         </div>
//     );
// };

// export default Home;
import React, { Suspense, useEffect } from 'react';
import { Container } from '@mui/material';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';

// Regular imports for components to load immediately
import Uppbanner from '../components/Home/Upperbanner/Uppbanner';
import Navbar from '../components/Home/Navbar/Navbar';
import LandingSlider from '../components/Home/LandingSlider/LandingSlider';

// Lazy load other components
const Offers = React.lazy(() => import('../components/Home/Offers/Offers'));
const NewArrival = React.lazy(() =>
    import('../components/Home/NewArrival/NewArrival')
);
const Sponsors = React.lazy(() =>
    import('../components/Home/Sponsors/Sponsors')
);
const ElectronicsGrid = React.lazy(() =>
    import('../components/Home/Electronic/ElectronicsGrid')
);
const CategoryWrapper = React.lazy(() =>
    import('../components/Home/Categories/CategoryWrapper')
);
const WeekendOffer = React.lazy(() =>
    import('../components/Home/WeekendOffer/WeekendOffer')
);
const MostCell = React.lazy(() =>
    import('../components/Home/MostCellOld/MostCell')
);
const OurPartners = React.lazy(() =>
    import('../components/Home/OurPartners/OurPartners')
);
const Newsletter = React.lazy(() =>
    import('../components/Home/Newsletter/Newsletter')
);
const Features = React.lazy(() =>
    import('../components/Home/Features/Features')
);
const Footer = React.lazy(() => import('../components/Home/Footer/Footer'));
const TodaysOfferC = React.lazy(() =>
    import('../components/Home/TodaysOffer/TodaysOfferC')
);

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="home">
            {/* Load these components without lazy loading */}
            <Uppbanner />
            <Navbar />
            <Container>
                <LandingSlider />
            </Container>

            <Container>
                <Suspense fallback={<div>Loading Offers...</div>}>
                    <Offers />
                </Suspense>
            </Container>

            <Container
                maxWidth="xl"
                className="wrapper"
                sx={{ width: '1500px' }}
            >
                <Suspense fallback={<div>Loading Sponsors...</div>}>
                    <Sponsors />
                </Suspense>

                <Suspense fallback={<div>Loading New Arrivals...</div>}>
                    <NewArrival />
                </Suspense>
            </Container>

            <Container>
                <Suspense fallback={<div>Loading Today's Offer...</div>}>
                    <TodaysOfferC />
                </Suspense>
            </Container>

            <Container>
                <Suspense fallback={<div>Loading Electronics Grid...</div>}>
                    <ElectronicsGrid />
                </Suspense>

                <Suspense fallback={<div>Loading Categories...</div>}>
                    <CategoryWrapper />
                </Suspense>

                <Suspense fallback={<div>Loading Weekend Offer...</div>}>
                    <WeekendOffer />
                </Suspense>
            </Container>

            <Container
                maxWidth="xl"
                className="wrapper"
                sx={{ width: '1500px' }}
            >
                <Suspense fallback={<div>Loading Most Cell...</div>}>
                    <MostCell />
                </Suspense>
            </Container>

            <Container>
                <Suspense fallback={<div>Loading Our Partners...</div>}>
                    <OurPartners />
                </Suspense>

                <Suspense fallback={<div>Loading Newsletter...</div>}>
                    <Newsletter />
                </Suspense>
            </Container>

            <Suspense fallback={<div>Loading Features...</div>}>
                <Features />
            </Suspense>

            <Suspense fallback={<div>Loading Footer...</div>}>
                <Footer />
            </Suspense>
        </div>
    );
};

export default Home;
