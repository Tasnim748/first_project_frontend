import { useNavigate } from "react-router-dom";
import './AdminIndex.css';

function AdminIndex() {
    const navigate = useNavigate();
    return (
        <div style={{textAlign: 'center', margin: '20px'}}>
            <div className="d-grid gap-2">
            <button className="admin-button" onClick={() => navigate('studios')}>Studios</button>
            </div><br />
            <div className="d-grid gap-2">
            <button className="admin-button" onClick={() => navigate('news')}>News</button>
            </div><br />
            <div className="d-grid gap-2">
            <button className="admin-button" onClick={() => navigate('programs')}>Programs</button>
            </div><br />
        </div>
    );
}

export default AdminIndex;