import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';
import React from 'react';
import LoginPage from "./LoginPage"; // Import your login page component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
  return (
    <Router>
      <>
        <div className="topNav">
          <div className="topNav-right"></div>
          <div className="link">
            {/* Use the Link component to navigate to the login page */}
            <Link to="/login" className="text-wrapper">Log In</Link>
          </div>
        </div>

        {/* Left Navbar */}
        <div className="div-side-nav-links">
        <div className="box">
          <div className="rectangle" />
          
            <Nav>
              <Nav.Link className="nav-link">
              <FontAwesomeIcon icon="fa-regular fa-face-smile" size="2xl" style={{color: "#ffffff",}} />
                <span>Classes</span>
              </Nav.Link>
              <Nav.Link className="nav-link">
              <FontAwesomeIcon icon="fa-regular fa-face-smile" size="2xl" style={{color: "#ffffff",}} />
                <span>Races</span>
              </Nav.Link>
              {/* Add similar Nav.Link elements for other items */}
            </Nav>
          </div>
        </div>



        {/* Define a route to render the Login page */}
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;

