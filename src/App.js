import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from "./Pages/Homepage";
import About from './Pages/About';
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Feedback from "./Pages/Feedback";
import MyFlights from "./Pages/MyFlights";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="About" element={<About/>} />
      <Route path="Contact" element={<Contact/>} /> 
      <Route path="Feedback" element={<Feedback/>} /> 
      <Route path="Login" element={<Login/>} />

      <Route path="MyFlights" element={<MyFlights/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
