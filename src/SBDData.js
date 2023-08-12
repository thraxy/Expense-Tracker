import { useState, useEffect } from "react";
import "./ViewExpenses.css";
import axios from "./api/axios";
import Moment from "react-moment";

export default function SBDData() {
    const [month, setMonth] = useState("")
    const [day, setDay] = useState("")
    const [year, setYear] = useState("")

    const handleChange = (event) => {
        setMonth(event.target.value)
    }
    const handleChangeDay = (event) => {
        setDay(event.target.value)
        //console.log(month)
    }
    const handleChangeYear = (event) => {
        setYear(event.target.value)
        //console.log(month)
    }

    const [selectData, setSelectData] = useState("");
    const [foundData, setFoundData] = useState("");

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
                await axios.get("/expenses")
                    .then(res => {
        
                        if (processing) {
                            setSelectData(res.data)
        
        
                        }
        
        
                    })
                    .catch(err => console.log(err))
                    */
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setFoundData(<div className="scrollbox">
            {Seedata()}
        </div>)

    }

    const deleteExpense = (id, name) => {
        if (window.confirm(`Are you sure you want to delete ${name}?`)) {
            /*Using fetch since axios wasn't working properly*/
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
        let months = { "January": 1, "February": 2, "March": 3, "April": 4, "May": 5, "June": 6, "July": 7, "August": 8, "September": 9, "October": 10, "November": 11, "December": 12 }
        let newdays = {
            "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10, "11": 11, "12": 12, "13": 13, "14": 14, "15": 15, "16": 16
            , "17": 17, "18": 18, "19": 19, "20": 20, "21": 21, "22": 22, "23": 23, "24": 24, "25": 25, "26": 26, "27": 27, "28": 28, "29": 29, "30": 30, "31": 31
        }
        let newyears = {
            "2000": 2000, "2001": 2001, "2002": 2002, "2003": 2003, "2004": 2004, "2005": 2005, "2006": 2006, "2007": 2007, "2008": 2008,
            "2009": 2009, "2010": 2010, "2011": 2011, "2012": 2012, "2013": 2013, "2014": 2014, "2015": 2015, "2016": 2016, "2017": 2017, "2018": 2018,
            "2019": 2019, "2020": 2020, "2021": 2021, "2022": 2022, "2023": 2023
        }
        // console.log(selectData[FED].Etype)
        if (month === "" && day === "" && year === "") {
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
            </div>)
        }

        else if ((month === "January" || month === "February" || month === "March" || month === "May" || month === "June" || month === "July" || month === "August" || month === "September" || month === "October" || month === "November" || month === "December") && day === "" && year === "") {
            return (<div>
                {Object.keys(selectData).filter(key => new Date(selectData[key].date).getMonth() + 1 == months[month]).map((key, i) => (
                    <p key={key}>
                        <span>Expense Type: {selectData[key].Etype}</span>
                        <br />
                        <span>Expense Price: ${selectData[key].Eprice}</span>
                        <br />
                        <span>Expense Date: <Moment format="MM/DD/YYYY">{selectData[key].date}</Moment></span>
                        <br />
                        <button onClick={() => deleteExpense(selectData[key]._id, selectData[key].Etype)}>Delete</button>
                    </p>
                ))}
            </div>)
        }

        else if ((month === "January" || month === "February" || month === "March" || month === "May" || month === "June" || month === "July" || month === "August" || month === "September" || month === "October" || month === "November" || month === "December") && day === "" && year <= 2023 && year >= 2000) {
            return (<div>
                {Object.keys(selectData).filter(key => new Date(selectData[key].date).getMonth() + 1 == months[month] && new Date(selectData[key].date).getFullYear() == newyears[year]).map((key, i) => (
                    <p key={key}>
                        <span>Expense Type: {selectData[key].Etype}</span>
                        <br />
                        <span>Expense Price: ${selectData[key].Eprice}</span>
                        <br />
                        <span>Expense Date: <Moment format="MM/DD/YYYY">{selectData[key].date}</Moment></span>
                        <br />
                        <button onClick={() => deleteExpense(selectData[key]._id, selectData[key].Etype)}>Delete</button>
                    </p>
                ))}
            </div>)
        }

        else if ((month === "January" || month === "February" || month === "March" || month === "May" || month === "June" || month === "July" || month === "August" || month === "September" || month === "October" || month === "November" || month === "December") && day <= 31 && year === "") {
            return (<div>
                {Object.keys(selectData).filter(key => new Date(selectData[key].date).getMonth() + 1 == months[month] && new Date(selectData[key].date).getDate() == newdays[day]).map((key, i) => (
                    <p key={key}>
                        <span>Expense Type: {selectData[key].Etype}</span>
                        <br />
                        <span>Expense Price: ${selectData[key].Eprice}</span>
                        <br />
                        <span>Expense Date: <Moment format="MM/DD/YYYY">{selectData[key].date}</Moment></span>
                        <br />
                        <button onClick={() => deleteExpense(selectData[key]._id, selectData[key].Etype)}>Delete</button>
                    </p>
                ))}
            </div>)
        }

        else if ((month === "January" || month === "February" || month === "March" || month === "May" || month === "June" || month === "July" || month === "August" || month === "September" || month === "October" || month === "November" || month === "December") && day <= 31 && year <= 2023 && year >= 2000) {
            return (<div>
                {Object.keys(selectData).filter(key => new Date(selectData[key].date).getMonth() + 1 == months[month] && new Date(selectData[key].date).getDate() == newdays[day] && new Date(selectData[key].date).getFullYear() == newyears[year]).map((key, i) => (
                    <p key={key}>
                        <span>Expense Type: {selectData[key].Etype}</span>
                        <br />
                        <span>Expense Price: ${selectData[key].Eprice}</span>
                        <br />
                        <span>Expense Date: <Moment format="MM/DD/YYYY">{selectData[key].date}</Moment></span>
                        <br />
                        <button onClick={() => deleteExpense(selectData[key]._id, selectData[key].Etype)}>Delete</button>
                    </p>
                ))}
            </div>)
        }

        else if (month === "" && day === "" && (year <= 2023 && year >= 2000)) {
            return (<div>
                {Object.keys(selectData).filter(key => new Date(selectData[key].date).getFullYear() == newyears[year]).map((key, i) => (
                    <p key={key}>

                        <span>Expense Type: {selectData[key].Etype}</span>
                        <br />
                        <span>Expense Price: ${selectData[key].Eprice}</span>
                        <br />
                        <span>Expense Date: <Moment format="MM/DD/YYYY">{selectData[key].date}</Moment></span>
                        <br />
                        <button onClick={() => deleteExpense(selectData[key]._id, selectData[key].Etype)}>Delete</button>
                    </p>
                ))}
            </div>)
        }

        else if ((month === "") && day <= 31 && year <= 2023 && year >= 2000) {
            return (<div>
                {Object.keys(selectData).filter(key => new Date(selectData[key].date).getDate() == newdays[day] && new Date(selectData[key].date).getFullYear() == newyears[year]).map((key, i) => (
                    <p key={key}>
                        <span>Expense Type: {selectData[key].Etype}</span>
                        <br />
                        <span>Expense Price: ${selectData[key].Eprice}</span>
                        <br />
                        <span>Expense Date: <Moment format="MM/DD/YYYY">{selectData[key].date}</Moment></span>
                        <br />
                        <button onClick={() => deleteExpense(selectData[key]._id, selectData[key].Etype)}>Delete</button>
                    </p>
                ))}
            </div>)
        }

        else if (month === "" && day <= 31 && year === "") {
            return (<div>
                {Object.keys(selectData).filter(key => new Date(selectData[key].date).getDate() == newdays[day]).map((key, i) => (
                    <p key={key}>
                        <span>Expense Type: {selectData[key].Etype}</span>
                        <br />
                        <span>Expense Price: ${selectData[key].Eprice}</span>
                        <br />
                        <span>Expense Date: <Moment format="MM/DD/YYYY">{selectData[key].date}</Moment></span>
                        <br />
                        <button onClick={() => deleteExpense(selectData[key]._id, selectData[key].Etype)}>Delete</button>
                    </p>
                ))}
            </div>)
        }
    }

    function searchfilter() {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let days = []
        let years = []
        if (month === "February" && year % 4 === 0 && year != "") {
            for (let i = 1; i <= 29; i++) {
                days[i - 1] = i
            }
        }

        else if (month === "January" || month === "March" || month === "May" || month === "July" || month === "August" || month === "October" || month === "December") {
            for (let i = 1; i <= 31; i++) {
                days[i - 1] = i
            }
        }

        else if (month === "April" || month === "June" || month === "September" || month === "November") {
            for (let i = 1; i <= 30; i++) {
                days[i - 1] = i
            }
        }

        else if (month === "February" && !(year % 4 === 0)) {
            for (let i = 1; i <= 28; i++) {
                days[i - 1] = i
            }
        }

        else if (month === "February" && year === "") {
            for (let i = 1; i <= 28; i++) {
                days[i - 1] = i
            }
        }

        else if (month === "") {
            for (let i = 1; i <= 31; i++) {
                days[i - 1] = i
            }
        }

        for (let i = 1; i < 25; i++) {
            years[i - 1] = i + 1999
        }

        return (<h4>
            Search by: {' '}
            <label>
                Month: {' '}
                <select value={month} onChange={handleChange} >
                    {/*} <option default>Select</option>*/}
                    <option value="">--Select a Month--</option>
                    {months.map((key, i) => (
                        <option key={i}>{key}</option>
                    ))}

                </select>
            </label>

            <label>
                {' '} Day: {' '}
                <select value={day} onChange={handleChangeDay} >
                    {/*} <option default>Select</option>*/}
                    <option value="">--Select a Day--</option>
                    {days.map((key, i) => (
                        <option key={i}>{key}</option>
                    ))}
                </select>

                {/*console.log(day)*/}

            </label>

            <label>
                {' '} Year: {' '}
                <select value={year} onChange={handleChangeYear} >
                    {/*} <option default>Select</option>*/}
                    <option value="">--Select a Year--</option>
                    {years.reverse().map((key, i) => (
                        <option key={i}>{key}</option>
                    ))}
                </select>

                {/*console.log(day)*/}

            </label>
            {' '}
            <button type="submit" onClick={handleSubmit} >Submit</button>
            {' '}
        </h4>);
    }

    return (
        <>
            <h1>Search By Date</h1>
            <div>
                {searchfilter()}
                <div className="scrollbox">
                    {foundData}
                </div>

            </div>
        </>
    );
}