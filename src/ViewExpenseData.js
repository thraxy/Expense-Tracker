import { useState, useEffect } from "react";
import axios from "./api/axios";
import "./ViewExpenses.css";
import Moment from "react-moment";


export default function ViewExpenseData() {
    const [Etype, setEtype] = useState("");
    const [Eprice, setEprice] = useState("");
    const [selectData, setSelectData] = useState("");

    useEffect(() => {
        let processing = true;
        axiosFetchData(processing);
        return () => {
            processing = false;
        }

    }, [])


    const axiosFetchData = async (processing) => {
        try {
            const response = await axios.get("/expenses", {
                withCredentials: true
            });
            if (processing) {
                setSelectData(response.data)
            }
        }
        catch (err) {
            console.log(err);
        }
        /*Old way */
        /*
                await axios.get("/expenses", { withCredentials: true })
                    .then(res => {
        
                        if (processing) {
                            setSelectData(res.data)
                            console.log(res.data)
        
                        }
        
        
                    })
                    .catch(err => console.log(err))
                    */
    }

    const deleteExpense = async (id, name) => {
        if (window.confirm(`Are you sure you want to delete ${name}?`)) {
            /*This axios way does not work for some reason*/
            /* try {
                 const response = await axios.post("/deleteExpense", expenseid, {
                     withCredentials: true
                 });
                 // .then(res => setError(<p className="success">{res.data}</p>))
                 console.log(response.data);
             }
 
             catch (err) {
                 console.log(err);
             }
             */
            /*Using fetch since axios doesn't work properly*/
            fetch("http://localhost:4000/deleteExpense", {
                method: "POST",
                crossDomain: true,
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    expenseid: id
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    alert(data.data);
                });

            alert("Deleted Expense");
            window.location.reload(false)
        } else {
            alert("Did Not Delete Expense")
        }
    }

    function Seedata() {
        if (selectData.length === 0) {
            return (<div>No Data</div>)
        }
        return (<div>
            {Object.keys(selectData).map((key, i) => (
                <p key={i}>
                    <span>Expense Type: {selectData[key].Etype}</span>
                    <br />
                    <span>Expense Price: ${selectData[key].Eprice}</span>
                    <br />
                    <span>Expense Date: <Moment format="MM/DD/YYYY">{selectData[key].date}</Moment></span>
                    <br />
                    <button onClick={() => deleteExpense(selectData[key]._id, selectData[key].Etype)}>Delete</button>
                </p>
            ))}
        </div>
        )
    }

    return (
        <>
            <h1>View Expenses</h1>
            <div className="scrollbox">
                {Seedata()}
            </div>
        </>
    )
}

