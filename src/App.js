import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";

import './App.css';

import Login from "./Components/Login.js";
import Signup from "./Components/Signup.js";
import Navbar from "./Components/Navbar.js";
import Location from "./Components/Location.js";
import Favourite from "./Components/Favourite.js";
import User from "./Components/User.js";
import Place from "./Components/Place.js";

function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard/location" element={<div className="container-fluid row"><Navbar /><Location /></div>} />
          <Route path="/dashboard/favourite" element={<div className="container-fluid row"><Navbar /><Favourite /></div>} />
          <Route path="/dashboard/user" element={<div className="container-fluid row"><Navbar /><User/></div>} />
          <Route path="/dashboard/place" element={<div className="container-fluid row"><Navbar /><Place /></div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
