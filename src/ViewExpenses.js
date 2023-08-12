import React from "react";
import "./HomePage.css"
import ViewExpenseData from "./ViewExpenseData";
import Header from "./Header";
import NewNav from "./NewNav";

// ViewExpenses Component
const ViewExpenses = () => {
    return(
        <>
            {/* Header Component */}
            <Header />
            {/* NavBar Component */}
            <NewNav />
            <br />
            <br />
            <div className='Mainborderpage'>
                <ViewExpenseData>
                </ViewExpenseData>
            </div>
        </>
    );
};

export default ViewExpenses;