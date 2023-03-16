import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import Base from "./Base";

function SelectShows(props){
    const showData = props.showData;
    const setShowData = props.setShowData
    // console.log(props.showData,props.setShowData)
    console.log(showData,setShowData)
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
            const retrivedData = await response.json()
            // console.log(retrivedData)
            setShows(retrivedData);
            
        }
        showFinder()
    },[])
    
    const handleClick=(data)=>{
        localStorage.setItem("showData",(data.toString()))
        props.setShowData(data)
        console.log(props.showData)
        
        console.log("Datapassing",data)
        navigate("/bookTickets/selectSeats");

    }
    
    return(
        <Base>
        <div>
            {
                shows.map((data,index)=>{
                    console.log(data)
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