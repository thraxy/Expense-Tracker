import React from "react";
import "./HomePage.css"
import ViewExpenseData from "./ViewExpenseData";
import Expenses from "./database.js";
import { Component, useEffect, useState} from "react";
import axios from "axios";

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