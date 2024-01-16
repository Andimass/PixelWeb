import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/screens/home/Header/Header.jsx";
import Geo from "./components/screens/home/Geo/Geo.jsx";
import './index.css';
import Contacts from "./components/screens/home/Contacts/Contacts.jsx";
import Project from "./components/screens/home/Project/Project.jsx";
import Project_Supply from "./components/screens/home/Project_Supply/Project_Supply.jsx";
import Gaz from "./components/screens/home/Gaz/Gaz.jsx";
import Cadastr from "./components/screens/home/Cadastr/Cadastr.jsx";
import Communication_System from "./components/screens/home/Communication_System/Communication_System.jsx";
import Complex_Project from "./components/screens/home/Complex_Project/Complex_Project.jsx";
import About from "./components/screens/home/About/About.jsx";
import Gazification from "./components/screens/home/Gazification/Gazification.jsx";
import Geodezic from "./components/screens/home/Geodezic/Geodezic";
import Error from "./components/screens/home/Error/Error";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header />}/>
       <Route path='/geo' element={<Geo/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/gaz' element={<Gaz/>}/>
        <Route path='/gazification' element={<Gazification />}/>
        <Route path='/geodezic' element={<Geodezic />}/>
        <Route path='/communication_system' element={<Communication_System/>}/>
        <Route path='/cadastral_works' element={<Cadastr/>}/>
        <Route path='/project_supply' element={<Project_Supply/>}/>
        <Route path='/complex_project' element={<Complex_Project/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/error' element={<Error/>}/>
    </Routes>
  );
}

export default App;




