import { Link } from "react-router-dom/cjs/react-router-dom";
import "./NewNav.css";

export default function NewNav(){



    return(

        <div className="container">
        <div className="navbar">
            <div className="navbar-inner">
                <ul className="nav">
                   <button className="InputPage"><Link className="InputPage2" to="/InputPage">InputPage</Link></button>
                   <button className="ViewExpenses"><Link className="ViewExpenses2" to="/ViewExpenses">ViewExpenses</Link></button>
                   <button className="FindExpenses"><Link className="FindExpenses2" to="/FindExpenses">FindExpenses</Link></button>
                </ul>
            </div>
        </div>
    </div>
    
    );



}