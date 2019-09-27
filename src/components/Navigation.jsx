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

function Navigation() {
  return (
    <Router>
            <nav className="[ navbar navbar-default ]" role="navigation">
			<div className="[ navbar-header ]">
			  <button type="button" className="[ navbar-toggle ]" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
				<span className="[ sr-only ]">Toggle navigation</span>
				<span className="[ icon-bar ]"></span>
				<span className="[ icon-bar ]"></span>
				<span className="[ icon-bar ]"></span>
			  </button>
			  <a className="[ navbar-brand ]" id="logo" href="#">Holidaze</a>
			</div>
		  
			<div className="[ collapse navbar-collapse ]" id="bs-example-navbar-collapse-1">

			  <ul className="[ nav navbar-nav navbar-right ]">
              <li className="nav__link"><NavLink activeClassName="nav__link--active" to="/">Home</NavLink></li>
              <li className="nav__link"><NavLink activeClassName="nav__link--active" to="/accommodations">Accommodations</NavLink></li>
              <li className="nav__link"><NavLink activeClassName="nav__link--active" to="/contact">Contact</NavLink></li>
              <li className="nav__link"><NavLink activeClassName="nav__link--active" to="/login">Login</NavLink></li>
			  </ul>
			</div>
		  </nav>

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