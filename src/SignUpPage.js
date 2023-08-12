import Header from "./Header";
import Register from "./Register"
import NewNav from "./NewNav";

export default function SignUpPage() {
    return (
        <>
            {/* Header Component */}
            <Header />
            {/* NavBar Component */}
            <NewNav />
            <br />
            <br />
            <div className='Mainborderpage'>
                <Register></Register>
            </div>
        </>
    );
}