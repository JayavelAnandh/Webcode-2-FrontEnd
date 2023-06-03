import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Base from "./Base";
import "./All.css";

function AdminLogIn() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    localStorage.setItem("name", name);
    try {
      const res = await fetch(
        "https://webcode-2-back-end.vercel.app/loginAdmin",
        {
          method: "POST",
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const response = await res.json();
      setToken(response.token);
      localStorage.setItem("x-auth-token-admin", await response.token);
      alert("Welcome Admin!!!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Base>
      <h3>Credentials:</h3>
      <ul>
        <li>
          <u>Name:</u>Admin
        </li>
        <li>
          <u>email:</u>Admin123@gmail.com
        </li>
        <li>
          <u>password:</u>AdminAdmin
        </li>
      </ul>
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
        <button type="submit" style={{ background: "green" }}>
          Submit
        </button>
      </form>
      <div>
        <button onClick={() => navigate("/")}> Return to Homepage</button>
      </div>
    </Base>
  );
}
export default AdminLogIn;
