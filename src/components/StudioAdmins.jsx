import { Link } from "react-router-dom";
import { Fragment } from "react";
import { STUDIOS } from "../imgData";

function StudioAdmins() {
    
    return (
        <div style={{textAlign: 'center', margin: '30px 20px'}}>
            {STUDIOS.map((std, index) => (
                <Fragment key={index}>
                    <div>
                        <Link to={`/admin/form/${std}`} style={{display: 'inline-block'}}>
                            {std}
                        </Link>
                    </div>
                    <br />
                </Fragment>
            ))}
        </div>
    );
}

export default StudioAdmins;