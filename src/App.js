import './App.css';
import HomePage from './components/HomePage.jsx';
import AdminLogIn from './components/AdminLogIn';
import { Route, Routes } from 'react-router-dom';
import ClientSignup from './components/ClientSignUp';
import ClientLogin from './components/ClientLogin';
import CreateTheatre from './components/CreateTheatre';
import ViewTheatre from './components/ViewTheatre';
import { useEffect, useState } from 'react';

function App() {
  const [selectedTheatre,setSelectedTheatre]=useState("")
 

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/adminLogin" element={<AdminLogIn/>}/>
        <Route path="/clientSignup" element={<ClientSignup/>}/>
        <Route path="/clientLogIn" element={<ClientLogin/>}/>
        <Route path="/createTheatre" element={<CreateTheatre/>}/>
        <Route path="/bookTickets/selectTheatre" element={<ViewTheatre selectedTheatre={selectedTheatre} setSelectedTheatre={setSelectedTheatre}/>}/>
      


      </Routes>
      
    </div>
  );
}

export default App;
