import { Offcanvas } from "react-bootstrap";
import { useEffect, useState } from "react";
import { COMPANY_URL } from "../imgData";

function SideBar({ show, handleIt }) {
    const [ companies, setCompanies ] = useState([]);

    useEffect(() => {
        fetch(COMPANY_URL)
            .then(resp => resp.json())
            .then(data => setCompanies(data))
            .catch(e => {
                console.log(e)
            })
    }, []);

    return (
        <Offcanvas show={show} onHide={handleIt}>
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
                <div style={{padding: '5%'}}>
                    {companies.map(comp => (
                        <ul>
                            <li>
                                <h6>{comp.title}</h6>
                            </li>
                        </ul>
                    ))}
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default SideBar;