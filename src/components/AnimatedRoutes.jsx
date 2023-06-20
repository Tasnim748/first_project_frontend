import { Routes, Route, useLocation } from 'react-router-dom';
import CarouselPage from './CarouselPage';
import DotsPage from './DotsPage';
import CompanyPage from './CompanyPage';
import OpenOutlet from './OpenOutlet';
import About from './About';
// admin components
import AdminProtect from './AdminProtect';
import AdminForm from './AdminForm';
import StudioAdmins from './StudioAdmins';
import AdminIndex from './AdminIndex';

import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes({authenticated, handleAuth, setGoHome, setIsAbout, studios}) {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<DotsPage setGoHome={setGoHome} setIsAbout={setIsAbout} studios={studios} />} />
                <Route path='/admin' element={<AdminProtect authenticated={authenticated} handleAuth={handleAuth} setGoHome={setGoHome} studios={studios} />}>
                    <Route index element={<AdminIndex />} />
                    <Route path='studios' element={<StudioAdmins studios={studios} />} />
                    <Route path='form/:studio' element={<AdminForm />} />
                </Route>
                <Route path='/about' element={<About setIsAbout={setIsAbout} />} />
                <Route path='/:company' element={<OpenOutlet />}>
                    <Route index element={<CompanyPage setGoHome={setGoHome} />} />
                    <Route path='learn-more' element={<CarouselPage setGoHome={setGoHome} />} />
                    <Route path=':projectype' element={<CarouselPage setGoHome={setGoHome} />} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;