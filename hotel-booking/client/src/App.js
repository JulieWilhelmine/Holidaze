import React from "react";
import "./styles/styles.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import AccommodationsPage from "./pages/AccommodationsPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import AddEstablishmentPage from "./pages/AddEstablishmentPage";
import AccommodationSpecificPage from "./pages/AccommodationSpecificPage";
import Provider from "./context/context";

function App() {
    return (
        <Router>
            <Provider>
                <div className="[ App ]">
                    <header className="[ App__header ]">
                        <Navigation />
                    </header>
                </div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/accommodations" component={AccommodationsPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/login" component={LoginPage} />

                    <Route exact path="/adminPage" component={AdminPage} />
                    <Route exact path="/addEstablishment" component={AddEstablishmentPage} />
                    <Route exact path="/AccommodationSpecificPage/:id" component={AccommodationSpecificPage} />
                </Switch>
            </Provider>
        </Router>
    );
}

export default App;
