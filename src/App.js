import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, Nav } from 'react-bootstrap'; // Import Navbar components
import CreateTodo from "./components/create-todo.component";
import EditTodo from './components/edit-todo.component';
import TodosList from './components/homePage.component';

import logo from "./logo.png"

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="https://github.com/mariadoan247/brew-masters-cauldron/tree/main" target="_blank">
            <img src={logo} width="30" height="30" alt="github.com/brew-masters-cauldron" />
          </Navbar.Brand>
          <Navbar.Brand as={Link} to="/">Brew Master's Cauldron</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Todos</Nav.Link>
              <Nav.Link as={Link} to="/create">Create Todo</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/" element={<TodosList />} />
          <Route path="/edit/:id" element={<EditTodo />} />
          <Route path="/create" element={<CreateTodo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
