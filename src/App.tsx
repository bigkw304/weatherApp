import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import weatherObject  from './customTypes/types'

function App() {
  const apikey = process.env.REACT_APP_WEATHER_API_KEY
  const openWeatherURL = "https://api.openweathermap.org/data/2.5/"
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState<weatherObject>({temp: 88, name: "New York", country: "US", weatherDescription: "sunny"});



  const search = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
    fetch(`${openWeatherURL}weather?q=${query}&units=imperial&appid=${apikey}`)
    .then(res => res.json())
    .then(result => {
      //pass info to our own custom object
      const temp = result.main.temp;
      const name = result.name;
      const country = result.sys.country;
      const weatherDescription = result.weather[0].main
      setWeather({temp, name, country, weatherDescription});
      setQuery('');
      console.log(result)
      });
    }
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const dateBuilder = (d: Date) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate()
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }


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
          {(typeof weather.temp === "undefined") ? (
            <div>
             <div className="location-box">
              <div className="location">THAT CITY IS NOT A REAL CITY</div>
            </div>
          </div>
          ) : ('')}
          {(typeof weather.temp != "undefined") ? (
            <div>
                          <div className="location-box">
              <div className="location">{weather.name}, {weather.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div  className="weather-box">
              <div className="temperature">
                {Math.round(weather.temp)}°
              </div>
              <div className="weather">
                  {weather.weatherDescription}
              </div>
            </div>
          </div>
          ) : ('')}
        </main>
    </div>
  );
}

export default App;