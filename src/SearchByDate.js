import Header from "./Header";
import NewNav from "./NewNav";
import SBDData from "./SBDData";

const SearchByDate = () => {
    return (
        <>
            {/* Header Component */}
            <Header />
            {/* NavBar Component */}
            <NewNav />
            <br />
            <br />
            <div className='Mainborderpage'>
                <SBDData></SBDData>

            </div>
        </>
    );
};

export default SearchByDate;

