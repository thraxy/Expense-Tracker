import { Link } from "react-router-dom";
import Users from "./Users";
import Header from "./Header";
import NewNav from "./NewNav";

const Admin = () => {
    return (
        <>
            {/* Header Component */}
            <Header />
            {/* NavBar Component */}
            <NewNav />
            <br />
            <br />
            <div className='Mainborderpage'>
                <section>
                    <h1>Admin Page</h1>
                    <br />
                    <Users />
                    <br />
                    <div className="flexGrow">
                        <Link to="/">Home</Link>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Admin;