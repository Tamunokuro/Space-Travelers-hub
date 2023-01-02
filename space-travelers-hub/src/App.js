import React from 'react';
import {
  BrowserRouter, Routes, Route, NavLink,
} from 'react-router-dom';
import logo from './planet.png';
import './App.css';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';

function App() {
  return (
    <>
      <img className="logo" src={logo} alt="logo" />
      <h1>Space Travelers&apos; Hub</h1>
      <BrowserRouter>
        <NavLink to="/">
          Rockets
        </NavLink>
        <NavLink to="/missions">
          Missions
        </NavLink>
        <NavLink to="/myprofile">
          My Profile
        </NavLink>
        <Routes>
          <Route exact path="/" element={<Rockets />} />
          <Route exact path="/missions" element={<Missions />} />
          <Route exact path="/myprofile" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
