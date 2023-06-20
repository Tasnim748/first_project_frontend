import { Outlet } from "react-router-dom";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

function AdminProtect({authenticated, handleAuth, setGoHome}) {
    useEffect(() => {
        setGoHome(true);
    }, []);

    const passwordRef = useRef();

    const verification = (e) => {
        e.preventDefault();
        if (passwordRef.current.value === "verified") {
            handleAuth(true);
        } else {
            alert('Password is wrong!')
        }
    }

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            {authenticated ? (
            <div>
                <Outlet />
            </div>
            ) : (
                <form style={{margin: '8%', paddingTop: '100px'}} onSubmit={verification}>
                    <div className="mb-3">
                        <input type="password" className="form-control" placeholder="Please input password first" required ref={passwordRef} />
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" style={{background: 'black', color: 'white', border: 'none', padding: '5px'}}>Authenticate</button>
                    </div>
                </form>
            )}
            <div style={{textAlign: 'center'}}>
                <h1 style={{padding: '10%', fontSize: '40px', fontWeight: '400'}}>Bridging Binaries</h1>
            </div>  
        </motion.div>
    );
}
            


export default AdminProtect;