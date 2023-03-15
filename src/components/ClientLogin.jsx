import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Base from "./Base";

function ClientLogin() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit= async(event)=>{
    event.preventDefault();
    localStorage.setItem("name",name)
    try {
        const res = await fetch(
            "https://webcode-2-back-end.vercel.app/clientLogin",{
                method:"POST",
                body:JSON.stringify({
                    name,
                    email,
                    password
                }),
                headers:{
                    "Content-Type": "application/json",
                }
            }
        );

        const response = await res.json();
        alert(response.message)
        await response.token
        localStorage.setItem("x-auth-token",await response.token)
        console.log("Your token has re-created")
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <Base>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              name
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              email
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              password
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit" style={{background:"green"}}>Submit</button>
      </form>
      <div>
        <button onClick={() => navigate("/")}> Return to Homepage</button>
      </div>
    </Base>
  );
}
export default ClientLogin;