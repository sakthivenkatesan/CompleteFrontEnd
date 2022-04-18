import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AxiosCalls from "./components/HTTPRequest/httprequest";
import './App.css';
import User from './components/User';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Passenger from './components/Passenger';
import Location from './components/Location';
import Fleet from './components/Fleet';
import Homepage from "./components/Homepage";
import SignUp from "./components/SignUp";
import UserHome from "./components/UserHome";
import Update from "./components/Update";
import PassengerDetails from "./components/PassengerDetails";

function App() {
  return (
    <div className="App" id="app">
      <BrowserRouter>
        <Routes>
        <Route path="/" exact element={<Homepage />}></Route>
        <Route path="/add_booking" exact element={<Booking />}></Route>
        <Route path="/add_contact" exact element={<Contact />}></Route>
        <Route path="/add_fleet" exact element={<Fleet />}></Route>
        <Route path="/add_location" exact element={<Location />}></Route>
        <Route path="/add_passenger" exact element={<Passenger />}></Route>
        <Route path="/add_user" exact element={<User />}></Route>        
        <Route path="/add_new_user" exact element={<SignUp />}></Route>    
        <Route path="/user_home" exact element={<UserHome />}></Route> 
        <Route path="/updated_page" exact element={<Update />}></Route> 
        <Route path="/passenger_details" exact element={<PassengerDetails />}></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
