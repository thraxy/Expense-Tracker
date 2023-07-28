import {useState, useEffect } from "react";
import axios from "axios";


export default function Expenses(){


    const [Etype, setEtype] = useState("");
    const [Eprice, setEprice] = useState("");
    const [error, setError] = useState("");
    const [selectData, setSelectData] = useState("");



    useEffect( ()=> {
        let processing = true;
        axiosFetchData(processing);
        return () => {
            processing = false;


        }



    }, [])


    const axiosFetchData = async(processing) => {
        

        await axios.get("http://localhost:4000/expenses")
        .then(res => {

            if(processing){
                setSelectData(res.data)

            }


        })
        .catch(err => console.log(err))

    }
    

    const axiosPostData = async() => {
        const postData = {
            Etype: Etype,
            Eprice: Eprice

        }
        await axios.post("http://localhost:4000/expenses", postData)
        .then(res => setError(<p className="success">{res.data}</p>))



    }


    const handleSubmit = (event) => {
        event.preventDefault();

        if(!Eprice && ! Etype){

            setError(<p className="required">Both fields are empty</p>)

        }

        else if(!Etype)
        {
            setError(<p className="required">Etype is empty</p>)
            console.log("error")


        }
        else if (!Eprice){

            setError(<p className="required">Eprice is empty</p>)
            
        }
        else{
           // setError(<p>message sent</p>)

            
            axiosPostData()

        }
       // setError('')
        



    }


    return(
        <>
            <h1>Test</h1>
            <form>
                <label>Expense Type: </label>
                <input type="text" id="Etype" name="Etype" placeholder="Expense Type" value={Etype} onChange={ (event) => setEtype(event.target.value)}/>
                <br/>
                <br/>
                <label>Expense Price: </label>
                <input type="text" id="Eprice" name="Eprice" placeholder="Expense Price" value={Eprice} onChange={ (event) => setEprice(event.target.value)}/>
                <br/>
                <br/>
                <button type="submit" onClick={handleSubmit}>Submit</button>
                
                {error}


            </form>
        
        
        
        
        </>




    )


}
