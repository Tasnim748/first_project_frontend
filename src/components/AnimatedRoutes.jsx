import { Routes, Route, useLocation } from 'react-router-dom';
import CarouselPage from './CarouselPage';
import DotsPage from './DotsPage';
import CompanyPage from './CompanyPage';
import AdminForm from './Admin';

import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<DotsPage />} />
                <Route path='/admin' element={<AdminForm />} />
                <Route path='/:company' element={<CompanyPage />} />
                <Route path='/:company/learn-more' element={<CarouselPage />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;