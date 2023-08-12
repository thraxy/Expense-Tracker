import Header from "./Header";
import NewNav from "./NewNav";
import Login from "./Login";

export default function LoginPage() {


    return (
        <>
            {/* Header Component */}
            <Header />
            {/* NavBar Component */}
            <NewNav />
            <br />
            <br />
            <div className='Mainborderpage'>
                <Login></Login>
            </div>
        </>
    );


}