import { Routes, Route, useLocation } from 'react-router-dom';
import CarouselPage from './CarouselPage';
import DotsPage from './DotsPage';
import CompanyPage from './CompanyPage';
import OpenOutlet from './OpenOutlet';

// admin components
import AdminProtect from './AdminProtect';
import AdminForm from './AdminForm';
import StudioAdmins from './StudioAdmins';
import AdminIndex from './AdminIndex';

import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes({authenticated, handleAuth}) {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<DotsPage />} />
                <Route path='/admin' element={<AdminProtect authenticated={authenticated} handleAuth={handleAuth} />}>
                    <Route index element={<AdminIndex />} />
                    <Route path='studios' element={<StudioAdmins />} />
                    <Route path='form/:studio' element={<AdminForm />} />
                </Route>
                <Route path='/:company' element={<OpenOutlet />}>
                    <Route index element={<CompanyPage />} />
                    <Route path='learn-more' element={<CarouselPage />} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;