import React from "react";
import "./HomePage.css"
import FindExpensesData from "./FindExpensesData";

const FindExpense = () => {




    return(
        <>
        
        <div className='header'>
            <h1>Welcome to the expense tracker!</h1>

        </div>
        <br/>
        <br/>
        <div className='Mainborderpage'>
            
            <FindExpensesData></FindExpensesData>
        
            

        </div>
        

        </>

    );



};
export default FindExpense;