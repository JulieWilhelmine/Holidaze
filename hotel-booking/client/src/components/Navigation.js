// Navigation component

import React from "react"
import { NavLink } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { ContextConsumer } from "../context/context"
import LogOutButton from "./LogOutButton"

function Navigation() {
	return (
		<>
			<ContextConsumer>
				{({ loggedIn, logOut }) => {
					console.log("loggedin", loggedIn)

					return (
						<Navbar expand="lg" bg="light" className="[ nav ]">
							<Navbar.Brand id="logo">Holidaze</Navbar.Brand>
							<Navbar.Toggle aria-controls="basic-navbar-nav" />
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="ml-auto">
									<NavLink to="/" exact className="[ nav-link ] [ nav__link ] [ nav__link--active ]">
										Home
									</NavLink>
									<NavLink to="/accommodations/" className="[ nav-link ] [ nav__link ] [ nav__link--active ]">
										Accommodations
									</NavLink>
									<NavLink to="/contact/" className="[ nav-link ] [ nav__link ] [ nav__link--active ]">
										Contact
									</NavLink>
									{loggedIn ? (
										<>
											<NavLink to="/adminPage/" className="[ nav-link ] [ nav__link ] [ nav__link--active ]">
												Admin
											</NavLink>
											<LogOutButton />
										</>
									) : (
										<NavLink to="/login/" className="[ nav-link ] [ nav__link ] [ nav__link--active ]">
											Login
										</NavLink>
									)}
								</Nav>
							</Navbar.Collapse>
						</Navbar>
					)
				}}
			</ContextConsumer>

			<hr />
		</>
	)
}

export default Navigation
