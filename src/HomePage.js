import './HomePage.css';


import NewNav from './NewNav';
export default function HomePage(){



    return(
        <>
        
        <div className='header'>
            <h1>Welcome to the expense tracker!</h1>

        </div>
        <br/>
        <br/>
        <div className='Mainborderpage'>

        
            <NewNav></NewNav>

        </div>
        

        </>


    );



}