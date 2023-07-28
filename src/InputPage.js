import React from "react";
import "./HomePage.css"

import Expenses from "./database.js";
const InputPage = () => {




    return(
        <>
        
        <div className='header'>
            <h1>Welcome to the expense tracker!</h1>

        </div>
        <br/>
        <br/>
        <div className='Mainborderpage'>
            <Expenses></Expenses>
        
            

        </div>
        

        </>

    );



};
export default InputPage;