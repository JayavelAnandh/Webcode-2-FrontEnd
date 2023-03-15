import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import Base from "./Base";

function SelectShows(){
    const [shows,setShows] = useState([]);
 
    const navigate = useNavigate()
    useEffect(()=>{
        const showFinder = async(req,res)=>{
            let response = await fetch(
             `https://webcode-2-back-end.vercel.app/shows?theatreId=${localStorage.getItem("theatreSelected")}`,
             {
                 method:"GET",
                 headers: {
                    "Content-Type": "application/json",
                  },
             }
            )
            const jsonRes = await response.json()
            console.log(jsonRes)
            setShows(jsonRes);
            
        }
        showFinder()
    },[])
    
    const handleClick=(data)=>{
        localStorage.setItem("showData",data)
        navigate("/bookTickets/selectSeats");

    }
    
    return(
        <Base>
        <div>
            {
                shows.map((data,index)=>{
                        return(
                            
                            <button key={index} onClick={()=>handleClick(data)}>{data.time}</button>
                        )
                })
            }
        </div>
        </Base>
    )
}
export default SelectShows