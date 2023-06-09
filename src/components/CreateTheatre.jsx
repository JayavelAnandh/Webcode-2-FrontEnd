import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Base from "./Base";
import "./All.css"


function CreateTheatre() {
  const [theatreName, setTheatreName] = useState("");
  const [movieName, setMovieName] = useState("");
  const [showTimings, setShowTimings] = useState([]);
  const [seatsBooked, setSeatsBooked] = useState([]);
  const [pricePerTicket, setPricePerTicket] = useState("");
  const navigate = useNavigate()

  useEffect(()=>{
    if(!localStorage.getItem("x-auth-token-admin")){
      alert("This page is Only Authorized for Admin ,.,Signup if you are a admin")
      navigate("/")
    }
  })

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(
        "https://webcode-2-back-end.vercel.app/theatre/create",
        {
          method: "POST",
          body: JSON.stringify({
            theatreName,
            movieName,
            showTimings : showTimings.split(","),
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log( res)
      alert("Theatre Created Successfully")
    } catch (error) {
        console.log(error)
    }
  };
  return (
    <Base>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              TheatreName
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            value={theatreName}
            onChange={(event) => setTheatreName(event.target.value)}
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              MovieName
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            value={movieName}
            onChange={(event) => setMovieName(event.target.value)}
          />
        </div>

       
        

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
               Time for MovieShow: 
            </span>
          </div>
          <input
            className="form-control"
            value={showTimings}
            onChange={(event) => setShowTimings(event.target.value)}
          />
        </div>
        {console.log(showTimings)}

        <button type="submit" style={{background:"green"}}>Submit</button>
      </form>
      <br />
      <button onClick={()=>navigate("/")} style={{background:"orange"}}>Return to Homepage</button>
    </Base>
  );
}

export default CreateTheatre;
