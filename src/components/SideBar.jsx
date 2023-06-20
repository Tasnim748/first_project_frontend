import { Offcanvas } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { STUDIOS } from "../imgData";
import './SideBar.css';

function SideBar({ show, handleIt, studios }) {
    const navigate = useNavigate();

    return (
        <Offcanvas show={show} onHide={handleIt} style={{width: '100%'}}>
            <Offcanvas.Header>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => handleIt(false)} style={{cursor: 'pointer'}}>
                    <rect x="16.9706" y="33.9412" width="24" height="24" rx="12" transform="rotate(-135 16.9706 33.9412)" fill="black"/>
                    <path d="M17.6777 24.7488L9.54601 16.617L17.6777 8.48532" stroke="white" strokeWidth="2"/>
                    <path d="M9.78176 16.6171L25.3381 16.6171" stroke="white" strokeWidth="2"/>
                </svg>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="heading">
                    <div style={{padding: '16px 20px', cursor: 'pointer'}} onClick={() => {navigate('/about'); handleIt(false)}}>
                        About
                    </div>
                    <hr />
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Studios
                            </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                {STUDIOS.map((std, index) => (
                                    <div key={index}>
                                        <div onClick={() => {navigate(std); handleIt(false)}} style={{cursor: 'pointer'}} >
                                            {std}
                                        </div>
                                        <br />
                                    </div>
                                ))}
                            </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div style={{padding: '16px 20px', cursor: 'pointer'}}>
                        Programs
                    </div>
                    <hr />
                    <div style={{padding: '16px 20px', cursor: 'pointer'}}>
                        News & Events
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default SideBar;