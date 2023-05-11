import { useNavigate } from "react-router-dom";

function AdminIndex() {
    const navigate = useNavigate();
    return (
        <div style={{textAlign: 'center', margin: '20px'}}>
            <div className="d-grid gap-2">
            <button style={{background: 'black', border: '1mm ridge rgba(254, 255, 234, 0.5)', padding: '20px', color: 'white', margin: '20px'}} onClick={() => navigate('studios')}>Studios</button>
            </div><br />
            <div className="d-grid gap-2">
            <button style={{background: 'black', border: '1mm ridge rgba(254, 255, 234, 0.5)', padding: '20px', color: 'white', margin: '20px'}} onClick={() => navigate('news')}>News</button>
            </div><br />
            <div className="d-grid gap-2">
            <button style={{background: 'black', border: '1mm ridge rgba(254, 255, 234, 0.5)', padding: '20px', color: 'white', margin: '20px'}} onClick={() => navigate('programs')}>Programs</button>
            </div><br />
        </div>
    );
}

export default AdminIndex;