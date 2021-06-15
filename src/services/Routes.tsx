import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import App from "../App"
import TenDayForecast from "../components/10DayForecast"
import HourlyForecast from "../components/HourlyForecast"
import NavBar from "../components/navBar";
import weatherHome from "../components/weatherHome"


export default function Routes() {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route path="/" component={weatherHome} exact />
                    <Route path="/10DayForecast" component={TenDayForecast} exact />
                    <Route path="/HourlyForecast" component={HourlyForecast} exact />
                </Switch>
            </div>
        </Router>
    );
}