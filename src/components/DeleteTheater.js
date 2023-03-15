import { useEffect, useState } from "react";
import Base from "./Base";

function DeleteTheater (){

    const [theatreData,setTheatreData]=useState([])

    const renderTheatres =async()=>{
        try {
            const res = await fetch (
                "https://webcode-2-back-end.vercel.app/theatre",{
                method:"GET",
                }
            )
            const response = await res.json();
            
            setTheatreData([].concat(...response))
            console.log(theatreData)
    
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
      renderTheatres();
      },[])


    const removeTheater=async(id)=>{
        try {
            const res = await fetch(
                `https://webcode-2-back-end.vercel.app/theatre/delete/${id}`,{
                    method:"DELETE",
                },
                
            )
            alert("Removed Succesfully");
            console.log(res)
            renderTheatres();
        } catch (error) {
            console.log(error)
        }
        
    }

    
      return(
        <Base>
            <div className="container-md">
                <div className="row">
                    {
                        theatreData && theatreData.map((data,index)=>{
                            return(
                                
                                    <div key={index} className="col-4"><h3>{data.theatreName}</h3><button style={{ background:"Red"}} onClick={()=>removeTheater(data._id)}>Delete</button></div>
                               
                            )
                        })
                    }
                </div>
            </div>
        </Base>
      )
}
export default DeleteTheater;