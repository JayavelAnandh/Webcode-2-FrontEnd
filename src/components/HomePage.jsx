import { useNavigate } from "react-router-dom"

function HomePage(){
    const navigate = useNavigate()
    return(
        <div className="container-lg">
            <div className="row">
                <div className="col-4"><button onClick={()=>navigate("/adminLogin")}>Admin</button></div>
                <div className="col-4"><button onClick={()=>navigate("/clientSignup")}>Client Sign-up</button></div>
                <div className="col-4"><button onClick={()=>navigate("/clientLogIn")}>Client Log-in</button></div>
                <div className="col-4"><button onClick={()=>navigate("/createTheatre")}>Create a Theatre</button></div>
                <div className="col-4"><button onClick={()=>navigate("/bookTickets/selectTheatre")}>Select Theatre</button></div>
                <div className="col-4"><button onClick={()=>navigate("/bookingLogs")}>Get Booking Logs</button></div>
                <div className="col-4"><button onClick={()=>navigate("/deleteTheater")}>Remove a theater</button></div>



            </div>
        </div>
    )
}
export default HomePage