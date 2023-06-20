import './DotsPage.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Arrow from './arrow';

import { useEffect, useState } from 'react';

function DotsPage({ setGoHome, setIsAbout, studios }) {
    const [selected, setSelected] = useState(undefined);
    const navigate = useNavigate();

    useEffect(() => {
        setGoHome(false);
        setIsAbout(false);
    });

    return (
        <motion.div 
            style={{textAlign: 'center', position:'relative'}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <div>
                <div className='sky-circle fade-in' onClick={() => setSelected('Jubair Hasan Architects')}>
                    {selected === 'Jubair Hasan Architects' && (
                        <div onClick={() => navigate('/Jubair Hasan Architects')}>
                            <Arrow className='slide-in' />
                            <div 
                                className='fade-in legend'
                            >
                                Jubair Hasan Architects
                            </div>
                        </div>
                    )}
                </div>

                <div className='blue-circle fade-in' onClick={() => setSelected('Roofliners Studio of Architecture')}>
                    {selected === 'Roofliners Studio of Architecture' && (
                        <div onClick={() => navigate('/Roofliners Studio of Architecture')}>
                            <Arrow className='slide-in' />
                            <div 
                                className='fade-in legend'
                            >
                                Roofliners Studio of Architecture
                            </div>
                        </div>
                    )}
                </div>

                <div className='red-circle fade-in' onClick={() => setSelected('Dehsar Works')}>
                    {selected === 'Dehsar Works' && (
                        <div onClick={() => navigate('/Dehsar Works')}>
                            <Arrow className='slide-in' />
                            <div
                                className='fade-in legend'
                            >
                                Dehsar Works
                            </div>
                        </div>
                    )}
                </div>

                <div className='magenta-circle fade-in' onClick={() => setSelected('FORM.3 Architects')}>
                    {selected === 'FORM.3 Architects' && (
                        <div onClick={() => navigate('/FORM.3 Architects')}>
                            <Arrow className='slide-in' />
                            <div 
                                className='fade-in legend'
                            >
                                FORM.3 Architects
                            </div>
                        </div>
                    )}
                </div>

                <div className='green-circle fade-in' onClick={() => setSelected('Sthanik + Studio Morphogenesis')}>
                    {selected === 'Sthanik + Studio Morphogenesis' && (
                        <div onClick={() => navigate('/Sthanik + Studio Morphogenesis')}>
                            <Arrow className='slide-in' />
                            <div 
                                className='fade-in legend'
                            >
                                Sthanik + Studio Morphogenesis
                            </div>
                        </div>
                    )}
                </div>

                <div className='lime-circle fade-in' onClick={() => setSelected('Group of Architects and Thinkers (GOAAT)')}>
                    {selected === 'Group of Architects and Thinkers (GOAAT)' && (
                        <div onClick={() => navigate('/Group of Architects and Thinkers (GOAAT)')}>
                            <Arrow className='slide-in' />
                            <div 
                                className='fade-in legend'
                            >
                                Group of Architects and Thinkers (GOAAT)
                            </div>
                        </div>
                    )}
                </div>
                
                <div className='purple-circle fade-in' onClick={() => setSelected('River & Rain')}>
                    {selected === 'River & Rain' && (
                        <div onClick={() => navigate('/River & Rain')}>
                            <Arrow className='slide-in' />
                            <div 
                                className='fade-in legend'
                            >
                                River & Rain
                            </div>
                        </div>
                    )}
                </div>

                <div className='violet-circle fade-in' onClick={() => setSelected('Studio Dhaka')}>
                    {selected === 'Studio Dhaka' && (
                        <div onClick={() => navigate('/Studio Dhaka')}>
                            <Arrow className='slide-in' />
                            <div 
                                className='fade-in legend'
                            >
                                Studio Dhaka
                            </div>
                        </div>
                    )}
                </div>
                
                <div className='orange-circle fade-in' onClick={() => setSelected('Cubeinside Design Limited')}>
                    {selected === 'Cubeinside Design Limited' && (
                        <div onClick={() => navigate('/Cubeinside Design Limited')}>
                            <Arrow className='slide-in' />
                            <div 
                                className='fade-in legend'
                            >
                                Cubeinside Design Limited
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className='text' >
                Bridging Binaries
            </div>
        </motion.div>
    );
}

export default DotsPage;