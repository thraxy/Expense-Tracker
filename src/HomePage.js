
// importing the modules and the CSS file

import React from 'react';
import Header from './Header';
import './HomePage.css';
import NewNav from './NewNav';
// defing the homepage component as a functional component
export default function HomePage() {
    // return is used to render the JSX content
    return (
        <>
            {/* Header Section */}
            <Header />
            <br />
            {/* Main Content */}
            <div className='Mainborderpage'>
                {/* Rendering NewNav to display the Nav Bar*/}
                <NewNav />
            </div>
        </>
    );
}