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
                <Link className='sky-circle' to='/Jubair Hasan Architects'>
                </Link>

                <Link className='blue-circle' to='/Roofliners Studio of Architecture'>
                </Link>

                <Link className='red-circle' to='/Dehsar Works'>
                </Link>

                <Link className='magenta-circle' to='/Form.3 Architects'>
                </Link>
                
                <Link className='green-circle' to='/Sthanik+Studio Morphogenesis'>
                </Link>
                
                <Link className='lime-circle' to='/Group of Architects and Thinkers (GOAAT)'>
                </Link>
                
                <Link className='purple-circle' to='/River & Rain'>
                </Link>
                
                <Link className='violet-circle' to='/Studio Dhaka'>
                </Link>
                
                <Link className='orange-circle' to='/Cubeinside Design Limited'>
                </Link>
            </div>
            <div className='text' >
                Bridging Binaries
            </div>
        </motion.div>
    );
}

export default DotsPage;