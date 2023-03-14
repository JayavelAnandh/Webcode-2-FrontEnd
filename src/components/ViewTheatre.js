import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function ViewTheatre(setSelectedTheatre){

    const [theatreData,setTheatreData]=useState([])
  
    useEffect(()=>{
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
    renderTheatres();
    },[])
      

const navigate = useNavigate()


const selectAndNavigate=(name)=>{
    localStorage.setItem("theatreSelected",name)
    navigate("/")
}
const arr =[4,5,6,7]
    return(
       <div>
        {
            theatreData.map((value,index)=>{
                return(
                    <button key={index} onClick={()=>selectAndNavigate(value.theatreName)}><h1>{value.theatreName}</h1><i>{value.movieName}</i></button>
                )
            })
        }
       </div>

    )
}
export default ViewTheatre