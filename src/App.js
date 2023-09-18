import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';
import React from 'react';
import LoginPage from "./LoginPage";
import ContactPage from "./ContactPage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faUserCircle, faEnvelope } from '@fortawesome/free-regular-svg-icons';


function App() {
  return (
    <Router>
      <>
        <div className="topNav">
        <div className="topNav-left">
          <Link to="/contact" className="contact-link">
              <FontAwesomeIcon icon={faEnvelope} size="2xl" style={{ color: "#ffffff" }} />
            </Link>
          </div>
          <div className="topNav-right"></div>
          <div className="link">
            <Link to="/login" className="text-wrapper">Log In</Link>
          </div>
        </div>

        {/* Left Navbar */}
        
          <div className="leftNav" />
          <div className="div-side-nav-links">
            <Nav>
              <Nav.Link className="nav-link">
              <FontAwesomeIcon icon={faSmile} size="2x" style={{ color: "#ffffff" }} />
                <span>Classes</span>
              </Nav.Link>
              <Nav.Link className="nav-link">
              <FontAwesomeIcon icon={faUserCircle} size="2xl" style={{color: "#ffffff"}} />
                <span>Races</span>
              </Nav.Link>
            </Nav>
          </div>
       



        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;

