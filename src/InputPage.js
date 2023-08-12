import React from "react";
import "./HomePage.css"
import Expenses from "./database.js";

import Header from "./Header";
import NewNav from "./NewNav";

// Input Expenses Component
const InputPage = () => {
    return (
        <>
            {/* Header Component */}
            <Header />
            {/* NavBar Component */}
            <NewNav />

            <br />
            <br />
            <div className='Mainborderpage'>
                <Expenses></Expenses>
            </div>
        </>
    );
};

export default InputPage;