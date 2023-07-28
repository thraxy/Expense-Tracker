import {useState, useEffect } from "react";
import axios from "axios";
import xtype from 'xtypejs';
import "./ViewExpenses.css";


export default function ViewExpenseData(){


    const [Etype, setEtype] = useState("");
    const [Eprice, setEprice] = useState("");
    const [error, setError] = useState("");
    const [selectData, setSelectData] = useState("");
    const [jsonData, setJsonData] = useState("");
    
    



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
        //let Myobject = JSON.parse(selectData)
        
        
      //  console.log(Dataarray)

        //setJsonData(JSON.stringify(selectData));
        
       // setJsonData(JSON.stringify(selectData));
        
      //  console.log(Array.isArray(jsonData));
       
        // const result = Array.from(selectData).map();
        //console.log(result);
       
        
       // console.log(selectData)
        
    }
    

    const axiosPostData = async() => {
        const postData = {
            Etype: Etype,
            Eprice: Eprice

        }
        await axios.post("http://localhost:4000/expenses", postData)
        .then(res => setError(<p className="success">{res.data}</p>))



    }
   // axiosFetchData();




   const deleteExpense = (id, name) =>{

        
        if(window.confirm(`Are you sure you want to delete ${name}?`))
        {
            fetch("http://localhost:4000/deleteExpense", {
                method: "POST",
                crossDomain: true,
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


        }else{



        }
        
        alert("Deleted Expense");
        window.location.reload(false)


   }


   //console.log(selectData[2]?.Etype);
/*
   function Seedata(){
    let strings = []
    for(let i = 0; i < selectData.length; i++){
        let thestring = `${selectData[i]?.Etype}: $${selectData[i]?.Eprice}\n`
        strings.push(thestring)


    }
    console.log(strings)
    return(strings.map((string, index) => {
        return (<p key={index}>{string}<button onClick={()=>deleteExpense(string)}>Delete</button></p>)


    }))

   }
   */
   function Seedata(){
    if(selectData.length === 0)
    {
    return(<div>No Data</div>)
    }
    return(<div>
        {Object.keys(selectData).map((key, i) => (
            <p key = {i}>

                <span>Expense Type: {selectData[key].Etype}</span>
                <br/>
                <span>Expense Price: ${selectData[key].Eprice}</span>
                <br/>
                <button onClick={()=> deleteExpense(selectData[key]._id, selectData[key].Etype)}>Delete</button>



            </p>




        ))}



    </div>
    )



   }
   


/*
    function Seedata(){

    let string = "";

    
     for(let i = 0; i < selectData.length; i++)
     {

        string = string + `${selectData[i]?.Etype}: $${selectData[i]?.Eprice}\n`
        


     }
     return(string);
    }
    */

/*
    const handleSubmit = (event) => {
        event.preventDefault();

        if(!Eprice && ! Etype){

            setError(<p className="required">Both fields are empty</p>)

        }

        else if(!Etype)
        {
            setError(<p className="required">Etype is empty</p>)


        }
        else if (!Eprice){

            setError(<p className="required">Eprice is empty</p>)
        }
        else{
            setError(<p>message sent</p>)

        }
        setError('')
        axiosFetchData()
        
    }

*/
    
    


    return(
        <>
            <h1>Test</h1>
            <div className="scrollbox">
            
            {Seedata()}
            

            </div>
        
        
        
        
        </>




    )
    


}

