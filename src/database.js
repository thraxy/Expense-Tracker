import { useState } from "react";
import axios from "./api/axios";
import "./MoreCss.css"
export default function Expenses() {

    const [Etype, setEtype] = useState("");
    const [Eprice, setEprice] = useState("");
    const [error, setError] = useState("");

    const axiosPostData = async () => {
        const postData = {
            Etype: Etype,
            Eprice: Eprice
        }
        try {
            const response = await axios.post("/expenses", postData, {
                withCredentials: true
            });
            // .then(res => setError(<p className="success">{res.data}</p>))
            // console.log(response.data);
        }
        catch (err) {
            console.log(err);
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        if (!Eprice && !Etype) {
            setError(<p className="required">Both fields are empty</p>)
        }
        else if (!Etype) {
            setError(<p className="required">Etype is empty</p>)
            console.log("error")
        }
        else if (!Eprice) {
            setError(<p className="required">Eprice is empty</p>)
        }
        else {
            axiosPostData()
        }
    }

    return (
        <>
            <h1>Input Page</h1>
            <form>
                <label className="InputLabelText">Expense Type: </label>
                <input className="eInput" type="text" id="Etype" name="Etype" placeholder="Expense Type" value={Etype} onChange={(event) => setEtype(event.target.value)} />
                <br />
                <br />
                <label className="InputLabelText">Expense Price: </label>
                <input className="eInput" type="text" id="Eprice" name="Eprice" placeholder="Expense Price" value={Eprice} onChange={(event) => setEprice(event.target.value)} />
                <br />
                <br />
                <button className="InputButton" type="submit" onClick={handleSubmit}>Submit</button>
                {error}
            </form>
        </>
    )
}
