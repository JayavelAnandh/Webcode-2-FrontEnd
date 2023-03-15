import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../cssStyles/BookingLogs.css";


function BookingLogs() {
  const [logs, setLogs] = useState([]);
  const navigate = useNavigate()

  useEffect(()=>{
    const retriveLogs = async () => {
        const res = await fetch(
          "https://webcode-2-back-end.vercel.app/bookinglogs",
          {
            method: "GET",
          }
        );
        const response = await res.json();
        setLogs(response);
        console.log(response);
      };
      retriveLogs()
  },[])
  
  return (
    <>
      <div className="container-md">
        <div className="row">
          {logs && logs.map((data, index) => {
            return (
              <div className="card" style={{width: "18rem"}} key={index}>
                <div className="card-body">
                  <h5 className="card-title"><b>Theatre:</b>{data.theatreName}</h5>
                  <h5 className="card-subtitle mb-2 "><b>Show:</b>{data.movieName }</h5> 
                  <h5 className="card-subtitle mb-2 "><b>ShowTime:</b>{ data.showTiming}</h5> 
                  <h5 className="card-subtitle mb-2 "><b>ClientBooked:</b>{data.clientName}</h5>
                  <h5 className="card-subtitle mb-2 "><b>No.of:seats</b>{data.seatsBooked.length}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button onClick={()=>navigate("/")}>Return to HomePage</button>
    </>
  );
}
export default BookingLogs