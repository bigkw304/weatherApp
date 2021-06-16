import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { WeatherObject } from "../types/weatherDataTypes";

export default function HourlyForecast() {
    const apikey = process.env.REACT_APP_WEATHER_API_KEY;
    const openWeatherURL = "https://api.openweathermap.org/data/2.5/";
    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState<{}>();

    const search = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            fetch(
                `https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=imperial&appid=98c771a81cbb6a21ece54e48694a6144`
            )
                .then((res) => res.json())
                .then((result) => {
                    if (result.cod === "404") {
                        return;
                    }
                    console.log(result.list);

                    var data = result.list;
                    const listItems = data.map((d: any) => <li key={d.main.temp}>{d.main.temp}</li>);
                    var loopData = {};
                    var i = 0;
                    while (i < 23) {
                        loopData += data[i].main.temp;
                        i++;
                    }
                    console.log("THE DATA " + loopData);
                    setWeather(listItems);
                    setQuery("");
                    //pass info to our own custom object
                });
        }
    };

    const changeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    return (
        <div className="search-box">
            <main>
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search for a location..."
                    value={query}
                    onKeyPress={search}
                    onChange={changeEvent}
                />
                <div className="temperature">{weather}</div>
            </main>
        </div>
    );
}
