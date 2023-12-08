<<<<<<< Updated upstream
import logo from "./components/Menu";
import './App.css';
import Menu from "./components/Menu";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
>>>>>>> Stashed changes
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Map from './pages/Map';
import Account from './pages/Account';
import Settings from './pages/Settings';
import Results from './pages/Results';
import Menu from "./components/Menu";


function App() {
  return (
      <Router>
<<<<<<< Updated upstream
    <div className="App">
      <Menu element={<logo />} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/map" element={<Map />} />
        <Route path="/account" element={<Account />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
=======
        <div className="App">
          <Menu />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/map" element={<Map />} />
            <Route path="/account" element={<Account />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </div>
>>>>>>> Stashed changes
      </Router>
  );
}

export default App;