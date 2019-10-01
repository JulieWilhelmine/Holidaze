// Navigation component

import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import HomePage from '../pages/HomePage';
import AccommodationsPage from '../pages/AccommodationsPage';
import ContactPage from '../pages/ContactPage';
import LoginPage from '../pages/LoginPage';
import AdminPage from '../pages/AdminPage';
import AddEstablishmentPage from '../pages/AddEstablishmentPage';
import AccommodationSpecificPage from '../pages/AccommodationSpecificPage';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navigation() {
  return (
    <Router>
          <Navbar expand="lg" bg="light" className="[ nav ]">
            <Navbar.Brand id="logo">Holidaze</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="ml-auto" pullRight>
            <NavLink to="/" exact className="[ nav-link ] [ nav__link ]">Home</NavLink>
            <NavLink to="/accommodations/" className="[ nav-link ] [ nav__link ]">
              Accommodations</NavLink>
            <NavLink to="/contact/" className="[ nav-link ] [ nav__link ]">Contact</NavLink>
            <NavLink to="/login/" className="[ nav-link ] [ nav__link ]">Login</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        <hr />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/accommodations" component={AccommodationsPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/login" component={LoginPage} />

        <Route exact path="/adminPage" component={AdminPage} />
        <Route exact path="/addEstablishment" component={AddEstablishmentPage} />
        <Route exact path="/AccommodationSpecificPage/:id" component={AccommodationSpecificPage} />
    </Router>
  );
}

export default Navigation;
