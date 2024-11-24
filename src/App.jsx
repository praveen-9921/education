// src/App.js
import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import Header from './Pages/header/header'
import Footer from './component/footer/Footer';
import Course from './Pages/course/Course';
import Profile from './Pages/Details/Details'
import ContactUs from './Pages/contact/Contact';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/course" element={<Course />} />
          <Route path="/Instructor" element={<Profile/>} />
          <Route path="/Contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    );
}

export default App;