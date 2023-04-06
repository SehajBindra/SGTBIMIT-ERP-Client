import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './LOGIN/Login';
import StudentLogin from './LOGIN/STUDENT/StudentLogin';
import FacultyLogin from './LOGIN/FACULTY/FacultyLogin';
import StuBody from './STUDENT_PAGE/StuBody';
import StudentHome from './STUDENT_PAGE/StudentHome';
import StuSidebar from './STUDENT_PAGE/StuSidebar';
import StuHeader from './STUDENT_PAGE/StuHeader';
import FacBody from './FACULTY_PAGE/FacBody';
import FacHeader from './FACULTY_PAGE/FacHeader';
import FacSidebar from './FACULTY_PAGE/FacSidebar';
import FacultyHome from './FACULTY_PAGE/FacultyHome';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="StudentLogin" element={<StudentLogin/>}></Route>
        <Route exact path="FacultyLogin" element={<FacultyLogin/>}></Route>
        <Route exact path="StuBody" element={<StuBody/>}></Route>
        <Route exact path="StuSidebar" element={<StuSidebar/>}></Route>
        <Route exact path="StuHeader" element={<StuHeader/>}></Route>
        <Route exact path="StudentHome" element={<StudentHome/>}></Route>
        <Route exact path="FacBody" element={<FacBody/>}></Route>
        <Route exact path="FacHeader" element={<FacHeader/>}></Route>
        <Route exact path="FacSidebar" element={<FacSidebar/>}></Route>
        <Route exact path="FacultyHome" element={<FacultyHome/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
