import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { WeatherObject } from "./types/weatherDataTypes";
import {
    NotificationContainer,
    NotificationManager,
} from "react-notifications";
import { notificationService } from "./services/notificationService";
import { dateBuilder } from "./services/dateBuilder"
import Routes from "./services/Routes"
import NavBar from './components/navBar'
import { BrowserRouter } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    )
}
