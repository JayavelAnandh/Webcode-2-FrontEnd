import { useState } from "react";
import { useNavigate } from "react-router-dom";


function CreateTheatre() {
  const [theatreName, setTheatreName] = useState("");
  const [movieName, setMovieName] = useState("");
  const [showTimings, setShowTimings] = useState([]);
  const [seatsBooked, setSeatsBooked] = useState([]);
  const [pricePerTicket, setPricePerTicket] = useState("");
  const navigate = useNavigate()


    const timingAdder =(time)=>{
        if(!showTimings.includes(time)){
            setShowTimings([].concat(...showTimings,time))
        }
        else{
            alert("This Showtime is already added")
        }
    }

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
            showTimings,
            pricePerTicket,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Theatre Created Successfully")
      alert("Theatre Created Successfully")
    } catch (error) {
        console.log(error)
    }
  };
  return (
    <>
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

        {/* <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              ShowTimings
            </span>
          </div>
          <input
            type="array"
            className="form-control"
            value={showTimings}
            onChange={(event) => setShowTimings(event.target.value)}
          />
        </div> */}
        <h3>Select showTimings</h3>
        <button onClick={()=>timingAdder("10.00 AM")} >10.00 AM</button>
        <button onClick={()=>timingAdder("1.00 PM")} >1.00 PM</button>
        <button onClick={()=>timingAdder("4.00 PM")} >4.00 PM</button>
        <button onClick={()=>timingAdder("7.00 PM")} >7.00 PM</button>
        <div>{showTimings}</div>
        {/* <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              SeatsBooked
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            value={seatsBooked}
            onChange={(event)=>setSeatsBooked(event.target.value)}
          />
        </div> */}

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Price/tickete Thermal
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            value={pricePerTicket}
            onChange={(event) => setPricePerTicket(event.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
      <br />
      <button onClick={()=>navigate("/")}>Return to Homepage</button>
    </>
  );
}

export default CreateTheatre;
