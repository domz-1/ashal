import React, { Suspense, useEffect } from 'react';
import { Container } from '@mui/material';
import { FallingLines } from 'react-loader-spinner';
import Uppbanner from '../components/Home/Upperbanner/Uppbanner';
import Navbar from '../components/Home/Navbar/Navbar';
import LandingSlider from '../components/Home/LandingSlider/LandingSlider';

// Group lazy-loaded components together
const lazyComponents = {
    Offers: React.lazy(() => import('../components/Home/Offers/Offers')),
    NewArrival: React.lazy(() =>
        import('../components/Home/NewArrival/NewArrival')
    ),
    Sponsors: React.lazy(() => import('../components/Home/Sponsors/Sponsors')),
    ElectronicsGrid: React.lazy(() =>
        import('../components/Home/Electronic/ElectronicsGrid')
    ),
    CategoryWrapper: React.lazy(() =>
        import('../components/Home/Categories/CategoryWrapper')
    ),
    WeekendOffer: React.lazy(() =>
        import('../components/Home/WeekendOffer/WeekendOffer')
    ),
    MostCell: React.lazy(() =>
        import('../components/Home/MostCellOld/MostCell')
    ),
    OurPartners: React.lazy(() =>
        import('../components/Home/OurPartners/OurPartners')
    ),
    Newsletter: React.lazy(() =>
        import('../components/Home/Newsletter/Newsletter')
    ),
    Features: React.lazy(() => import('../components/Home/Features/Features')),
    Footer: React.lazy(() => import('../components/Home/Footer/Footer')),
    TodaysOfferC: React.lazy(() =>
        import('../components/Home/TodaysOffer/TodaysOfferC')
    ),
};

// Separate Loader component with proper styling
const Loader = () => (
    <div className="flex justify-center items-center min-h-[200px]">
        <FallingLines
            color="white"
            width="100"
            visible={true}
            ariaLabel="falling-circles-loading"
        />
    </div>
);

const Home = () => {
    useEffect(() => {
        // Scroll restoration
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
    }, []);

    // Destructure lazy components
    const {
        Offers,
        NewArrival,
        Sponsors,
        ElectronicsGrid,
        CategoryWrapper,
        WeekendOffer,
        MostCell,
        OurPartners,
        Newsletter,
        Features,
        Footer,
        TodaysOfferC,
    } = lazyComponents;

    return (
        <div className="home">
            {/* Static components */}
            <Uppbanner />
            <Navbar />
            

            {/* Main content */}
            <Container>
                <LandingSlider />
            </Container>

            {/* Regular width sections */}
            <Container>
                <Suspense fallback={<Loader />}>
                    <Sponsors />
                    <Offers />
                    <TodaysOfferC />
                    <ElectronicsGrid />
                    <CategoryWrapper />
                    <WeekendOffer />
                    <OurPartners />
                    <Newsletter />
                </Suspense>
            </Container>

            {/* Wide sections */}
            <Container
                maxWidth="xl"
                sx={{
                    maxWidth: {
                        xs: '100%',
                        sm: '540px',
                        md: '720px',
                        lg: '1140px',
                        xl: '1500px',
                    },
                }}
            >
                <Suspense fallback={<Loader />}>
                    <NewArrival />
                    <MostCell />
                </Suspense>
            </Container>

            {/* Footer sections */}
            <Suspense fallback={<Loader />}>
                <Features />
                <Footer />
            </Suspense>
        </div>
    );
};

export default Home;
