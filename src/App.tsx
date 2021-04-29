import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { pull, compact } from "lodash";
import { weatherServices } from "./services"

function App() {
  const apikey = process.env.REACT_APP_WEATHER_API_KEY
  const cityName = 'Charlotte';

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=${"imperial"}`;

  const getWeatherData = async () => {
    const result = await fetch(url);

    const data = await result.json()
    return result;
  } 

  useEffect(() => {
    getWeatherData().then(data => console.log(data)).catch((error) => {
      console.log("Error Getting Weather " + error.message)
    });
  }, []);

  return (
    <div className="App">
     <h2>This is a test</h2>
    </div>
  );
}

export default App;
