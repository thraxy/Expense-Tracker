import React from "react";
import "./HomePage.css"
import FindExpensesData from "./FindExpensesData";

import Header from "./Header";
import NewNav from "./NewNav";

// FindExpenses Component
const FindExpense = () => {
    return (
        <>
            {/* Header Component */}
            <Header />
            {/* NavBar Component */}
            <NewNav />
            <br />
            <br />
            <div className='Mainborderpage'>

                <FindExpensesData>
                </FindExpensesData>
            </div>
        </>
    );
};

export default FindExpense;