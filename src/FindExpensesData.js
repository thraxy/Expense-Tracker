import "./FED.css"
import { useState, useEffect, useReducer } from "react"
import axios from "axios"
import "./ViewExpenses.css"

export default function FindExpensesData(){
    const [FED, setFED] = useState("")
    console.log(FED)


    const [selectData, setSelectData] = useState("");
    const [foundData, setFoundData] = useState("");
    
    



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

    const handleSubmit = (event) => {
        event.preventDefault();
        setFoundData(<div className="scrollbox">
                        
                        {Seedata()}
                    

                    </div>)

    }
  
 
    
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
            alert("Deleted Expense");
            window.location.reload(false)
            
            

        }else{
            alert("Did Not Delete Expense")


        }
        
       
        


   }


   
    function Seedata(){
        let flag = 0
        for(let i = 0; i < selectData.length; i++)
        {
            if(selectData[i]?.Etype === FED){
                flag = 1
            }


        }   
        if(flag === 0){
            return(<p>No Data Found</p>)
        }     
       // console.log(selectData[FED].Etype)
        else{
        return(<div>
            {Object.keys(selectData).filter(key => selectData[key].Etype === FED).map((key, i) => (
                
                <p key = {key}>

                <span>Expense Type: {selectData[key].Etype}</span>
                <br/>
                <span>Expense Price: ${selectData[key].Eprice}</span>
                <br/>
                <button onClick={()=> deleteExpense(selectData[key]._id, selectData[key].Etype)}>Delete</button>
                
                </p>


            ))}



        </div>)}

       /*
        return(<div>
           {selectData.filter(expense => expense.Etype === FED).map((filteredexpenses, idx) =>  (

            <p filteredexpenses={idx}>
                {selectData[filteredexpenses]?.Etype} : {selectData[filteredexpenses]?.Eprice}
            </p>


           ))}
    
    
        </div>
        )

*/
    }

    /*
    return(<div>
        {Object.keys(selectData).map((key, i) => (
            <p key = {i}>

                <span>Expense Type: {selectData[key].Etype}</span>
                <br/>
                <span>Expense Price: {selectData[key].Eprice}</span>
                <br/>
                



            </p>




        ))}



    </div>
    )



    }
*/

    


    return(<div>
        <h1>Search for Expense</h1>
        <input type="text" id="FED" name="FED" placeholder="Search" value={FED} onChange={ (event) => setFED(event.target.value)}/>
        <button type="submit" onClick={handleSubmit} >Submit</button>
        {foundData}

{/* 
        <div>
            
        {selectData.filter(expense => expense.Etype === FED).map(filteredexpenses =>  (

            <li>
                {filteredexpenses.Etype} : {filteredexpenses.Eprice}
            </li>


            ))}
        </div>
        */}

    </div>)



}