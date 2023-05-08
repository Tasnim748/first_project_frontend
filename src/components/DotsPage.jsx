import './DotsPage.css';
import { Link } from 'react-router-dom';

function DotsPage() {
    return (
        <div style={{textAlign: 'center'}}>
            <div>
                <Link>
                    <div className='sky-circle'></div>
                </Link>

                <Link>
                    <div className='blue-circle'></div>
                </Link>

                <Link to='/Dehsar Works'>
                    <div className='red-circle'></div>
                </Link>

                <Link>
                    <div className='magenta-circle'></div>
                </Link>
                
                <Link>
                    <div className='green-circle'></div>
                </Link>
                
                <Link>
                    <div className='lime-circle'></div>
                </Link>
                
                <Link>
                    <div className='purple-circle'></div>
                </Link>
                
                <Link>
                    <div className='violet-circle'></div>
                </Link>
                
                <Link>
                    <div className='orange-circle'></div>
                </Link>
            </div>
            <div className='text'>Bridging Binaries</div>
        </div>
    );
}

export default DotsPage;