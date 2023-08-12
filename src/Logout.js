import { useNavigate, Link } from "react-router-dom";
import axios from "./api/axios";
import useAuth from './hooks/useAuth';
import useLogout from "./hooks/useLogout";

const Logout = () => {
    const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/LoginPage');
    }
    return (<button onClick={signOut}>Sign Out</button>)
}

export default Logout