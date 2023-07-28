import React from "react";
import "./HomePage.css"
import ViewExpenseData from "./ViewExpenseData";
import Expenses from "./database.js";
import { Component, useEffect, useState} from "react";
import axios from "axios";
const ViewExpenses = () => {


    

    


    return(
        <>
        
        <div className='header'>
            <h1>Welcome to the expense tracker!</h1>

        </div>
        <br/>
        <br/>
        <div className='Mainborderpage'>
            
        <ViewExpenseData></ViewExpenseData>
            

        </div>
        

        </>

    );



};
export default ViewExpenses;