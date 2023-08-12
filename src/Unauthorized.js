import { useNavigate } from "react-router-dom";
import Header from "./Header";
import NewNav from "./NewNav";

export default function Unauthorized() {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    return (
        <>
            {/* Header Component */}
            <Header />
            {/* NavBar Component */}
            <NewNav />
            <br />
            <br />
            <div className='Mainborderpage'>
                <p>You are unauthorized to access this page. If you are not logged in, please log in. Otherwise, you cannot access this page</p>
                <button onClick={goBack}>Go Back</button>
            </div>
        </>
    );
}