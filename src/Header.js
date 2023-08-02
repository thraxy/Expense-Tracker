import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/asset-logo.png";
import Menu from "./assets/menu.png";
import "./Header.css";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="Header">
            {/* Logo for header */}
            <img src={Logo} className="Logo" alt="logo" />

            {/* Burger menu */}
            <div className={`BurgerMenu ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <img src={Menu} alt="menu" className="MenuIcon" />
            </div>

            {/* Navigation */}
            <nav className={`Navbar ${isMenuOpen ? "open" : ""}`}>
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
                <button className="LoginButton">Login</button>
            </nav>
        </header>
    );
}
