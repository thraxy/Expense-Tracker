import React from 'react';
import { Link } from 'react-router-dom';
import "./NewNav.css";

export default function NewNav(){
    return(
        // conmtainer to center the navbar horizontally
        <div className="navbar-container">
            {/* Main NavBar*/}
            <div className="navbar">
                {/* List of Nav items */}
                <ul className="nav">
                    {/* Nav item: inputpage */}
                    <li>
                        {/* Link to inputpage route */}
                        <Link className="nav-link" to="/InputPage">
                            Input Page
                        </Link>
                    </li>
                    {/* Nav item: View Expenses */}
                    <li>
                        {/* Link to view expenses route */}
                        <Link className="nav-link" to="/ViewExpenses">
                            View Expenses
                        </Link>
                    </li>
                    {/* Nav item: Find Expenses */}
                    <li>
                        {/* Link to find expenses route */}
                        <Link className="nav-link" to="/FindExpenses">
                            Find Expenses
                        </Link>
                    </li>

                    <li>
                        {/* Link to search expenses by date route */}
                        <Link className="nav-link" to="/SearchByDate">
                            Search By Date
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}