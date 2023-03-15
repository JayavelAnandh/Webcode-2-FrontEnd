import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Base from "./Base.js";

function ViewTheatre(setSelectedTheatre) {
  const [theatreData, setTheatreData] = useState([]);

  useEffect(() => {
    const renderTheatres = async () => {
      try {
        const res = await fetch(
          "https://webcode-2-back-end.vercel.app/theatreView",
          {
            method: "GET",
          }
        );
        const response = await res.json();

        setTheatreData([].concat(...response));
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    renderTheatres();
  }, []);

  const navigate = useNavigate();

  const selectAndNavigate = (id) => {
    localStorage.setItem("theatreSelected",id);
    navigate("/bookTickets/selectShows");
  };

  return (
    <Base>
    <h1>Select -- theater</h1>
    <div>
      {theatreData.map((value, index) => {
        return (
          <button
            style={{background:"skyblue",height:"200px"}}
            key={index}
            onClick={()=>selectAndNavigate(value._id)}
          >
            <h1>Theatre ::{value.theatreName}</h1>
            <h2><i> MovieNow::{value.movieName}</i></h2>
            
          </button>
        );
      })}
    </div>
    </Base>
    
  );
}
export default ViewTheatre;
