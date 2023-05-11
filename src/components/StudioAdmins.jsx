import { COMPANY_URL } from "../imgData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function StudioAdmins() {
    const [studios, setStudios] = useState(null);

    useEffect(() => {
        fetch(COMPANY_URL)
            .then(resp => resp.json())
            .then(data => setStudios(data))
            .catch(e => alert('Network error'))
    }, []);
    return (
        <div style={{textAlign: 'center', margin: '30px 20px'}}>
            {studios ? studios.map(std => (
                <Link to={`/admin/form/${std.title}`}>
                    <h5>{std.title}</h5>
                    <br />
                </Link>
            )) : (
                "Loading..."
            )}
        </div>
    );
}

export default StudioAdmins;