import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './LOGIN/Login';
import StudentLogin from './LOGIN/STUDENT/StudentLogin';
import FacultyLogin from './LOGIN/FACULTY/FacultyLogin';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="StudentLogin" element={<StudentLogin/>}></Route>
        <Route exact path="FacultyLogin" element={<FacultyLogin/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
