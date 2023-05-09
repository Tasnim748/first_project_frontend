import './DotsPage.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function DotsPage() {
    return (
        <motion.div 
            style={{textAlign: 'center'}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <div>
                <Link to='/Jubair Hasan Architects'>
                    <div className='sky-circle'></div>
                </Link>

                <Link to='/Roofliners Studio of Architecture'>
                    <div className='blue-circle'></div>
                </Link>

                <Link to='/Dehsar Works'>
                    <div className='red-circle'></div>
                </Link>

                <Link to='/Form.3 Architects'>
                    <div className='magenta-circle'></div>
                </Link>
                
                <Link to='/Sthanik+Studio Morphogenesis'>
                    <div className='green-circle'></div>
                </Link>
                
                <Link to='/Group of Architects and Thinkers (GOAAT)'>
                    <div className='lime-circle'></div>
                </Link>
                
                <Link to='/River & Rain'>
                    <div className='purple-circle'></div>
                </Link>
                
                <Link to='/Studio Dhaka'>
                    <div className='violet-circle'></div>
                </Link>
                
                <Link to='/Cubeinside Design Limited'>
                    <div className='orange-circle'></div>
                </Link>
            </div>
            <div className='text'>Bridging Binaries</div>
        </motion.div>
    );
}

export default DotsPage;