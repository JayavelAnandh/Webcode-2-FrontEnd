import './App.css';
import HomePage from './components/HomePage.jsx';
import AdminLogIn from './components/AdminLogIn';
import { Route, Routes } from 'react-router-dom';
import ClientSignup from './components/ClientSignUp';
import ClientLogin from './components/ClientLogin';
import CreateTheatre from './components/CreateTheatre';
import ViewTheatre from './components/ViewTheatre';
import { useEffect, useState } from 'react';
import BookTheatre from './components/BookTheatre';
import BookingLogs from './components/BookingLogs';
import DeleteTheater from './components/DeleteTheater';
import Payment from './components/Payment';
import SelectShows from './components/selectShows';

function App() {
 
 

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/adminLogin" element={<AdminLogIn/>}/>
        <Route path="/clientSignup" element={<ClientSignup/>}/>
        <Route path="/clientLogIn" element={<ClientLogin/>}/>
        <Route path="/createTheatre" element={<CreateTheatre/>}/>
        <Route path="/bookTickets/selectTheatre" element={<ViewTheatre/>}/>
        <Route path="/bookTickets/selectSeats" element={<BookTheatre/>}/>
        <Route path="/bookingLogs" element={<BookingLogs/>}/>
        <Route path="/deleteTheater" element={<DeleteTheater/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/bookTickets/selectShows" element={<SelectShows/>}/>



      </Routes>
      
    </div>
  );
}

export default App;
