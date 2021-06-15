import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { WeatherObject } from "../types/weatherDataTypes";
import {
    NotificationContainer,
    NotificationManager,
} from "react-notifications";
import { notificationService } from "../services/notificationService";
import { dateBuilder } from "../services/dateBuilder"

function App() {
    const apikey = process.env.REACT_APP_WEATHER_API_KEY;
    const openWeatherURL = "https://api.openweathermap.org/data/2.5/";
    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState<WeatherObject>({
        temp: 88,
        name: "New York",
        country: "US",
        weatherDescription: "sunny",
    });

    useEffect(() => { document.title = weather.name }, [weather.name])

    const search = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            fetch(
                `${openWeatherURL}weather?q=${query}&units=imperial&appid=${apikey}`
            )
                .then((res) => res.json())
                .then((result) => {
                    console.log(result);
                    if (result.cod === "404") {
                        notificationService.showErrorNotifiction(
                            "That City does not exist!"
                        );
                        return;
                    }
                    //pass info to our own custom object
                    const temp = result.main.temp;
                    const name = result.name;
                    const country = result.sys.country;
                    const weatherDescription = result.weather[0].main;
                    notificationService.showInfoNotification(
                        "Check out your city's weather!"
                    );
                    setWeather({ temp, name, country, weatherDescription });
                    setQuery("");
                    console.log(result);
                });
        }
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    return (
        <div className="App">
            <main>
                <div className="search-box">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search for a location..."
                        onChange={onChange}
                        value={query}
                        onKeyPress={search}
                    />
                </div>
                {typeof weather.temp != "undefined" ? (
                    <div>
                        <div className="location-box">
                            <div className="location">
                                {weather.name}, {weather.country}
                            </div>
                            <div className="date">{dateBuilder(new Date())}</div>
                        </div>
                        <div className="weather-box">
                            <div className="temperature">
                                {Math.round(weather.temp)}°{" "}
                            </div>
                            <div className="weather">{weather.weatherDescription}</div>
                        </div>
                    </div>
                ) : (
                    ""
                )}
            </main>
            <NotificationContainer />
        </div>
    );
}

export default App;