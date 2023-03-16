import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Base from "./Base.js";

function BookTheatre(props) {
  // const showDataNow = localStorage.getItem("showData")
  console.log(props.showData.seatsBooked)
  const choosenShowSeats = props.showData.seatsBooked
  const [selectedShowTime, setSelectedShowTime] = useState();
  const navigate = useNavigate();
  const [seatsBookedClient,setSeatsBookedClient] =useState(choosenShowSeats)
  
//   let seatsBooking = [];
  useEffect(() => {

    if (!localStorage.getItem("x-auth-token")) {
      navigate("/clientSignup");
      alert("Signup to Continue...");
    }
    // const retriveTheatreData = async (req, res) => {
    //   try {
    //     const res = await fetch(
    //       `https://webcode-2-back-end.vercel.app/theatre/query?theatreName=${localStorage.getItem(
    //         "theatreSelected"
    //       )}`,
    //       {
    //         method: "GET",
    //       }
    //     );
        
    //     const response = await res.json();
    //     await setSelectedTheatreData(response);
    //     setSeatsBookedClient(response.seatsBooked);
    //     console.log(response);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // retriveTheatreData();
  }, []);

  // const bookTickets = async (event) => {
  //   try {
  //     event.preventDefault();
  //     const res = fetch("https://webcode-2-back-end.vercel.app/booking", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         theatreName: selectedTheatreData.theatreName,
  //         movieName: selectedTheatreData.movieName,
  //         showTiming: selectedShowTime,
  //         seatsBooked: seatsBooked,
  //         clientName: localStorage.getItem("name"),
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //         "x-auth-token": localStorage.getItem("x-auth-token"),
  //       },
  //     });

  //     navigate("/payment");
  //     alert("Booked SuccessFully");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  let seatsArray = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  ];

  const handleOnSelect = (value) => {
    if (!seatsBookedClient.includes(value)) {
      setSeatsBookedClient([].concat(...seatsBookedClient,value))
      console.log("seats",seatsBookedClient);
    } else {
      alert("You already selected this seat");
    }
  };
  const handleSubmit=async(event)=>{
    try {
      event.preventDefault()
      let response = await fetch (
        "https://webcode-2-back-end.vercel.app/shows/upt?_id=641158de2feda0209d8d00b3",
        // `https://webcode-2-back-end.vercel.app/shows/update?_id=${props.showData._id}`,
       {
        method:"PUT",
        headers:{
          "Content-Type": "application/json",
        },
        body:{
          seatsBooked:["12","13"]
        }
       }
      )
      alert("Booked Successfully")
    } catch (error) {
       console.log(error)
    }
    

  }
  return (
    <Base>
      <div className="container-md">
        <form onSubmit={(event)=>{
          handleSubmit(event);
        }}

        >
          {/* {selectedTheatreData &&
            selectedTheatreData.showTimings.map((value, index) => {
              return (
                <button
                  key={index}
                  value={selectedShowTime}
                  onClick={(event) => {
                    event.preventDefault();
                    setSelectedShowTime(value);
                    console.log(value);
                  }}
                >
                  {value}
                </button>
              );
            })} */}
          <br />
          <br />
          <div>
            {seatsArray &&
              seatsArray.map((value, index) => {
                
                return (
                  <div key={index}>
                    {value.map((innervalue, innerindex) => {
                        const currentSeat = index + "" + innerindex
                      return (
                        <span
                          className="col-md-2"
                          key={currentSeat}
                        >
                          <button
                            disabled={seatsBookedClient.includes(currentSeat)}
                            className="col-md-2"
                            value={currentSeat}
                            onClick={(event) => {
                              event.preventDefault();
                              handleOnSelect(currentSeat);
                            }}
                          >
                            {" "}
                            {currentSeat}
                          </button>
                        </span>
                      );
                    })}
                  </div>
                );
              })}
          </div>
          <button type="submit" value="submit">
            Submit
          </button>
        </form>
      </div>
    </Base>
  );
}
export default BookTheatre;
