import { useState } from "react";
import { useHistory } from "react-router";
import { notificationService } from "../../services/notificationService";
import { WeatherObject } from "../../types/weatherDataTypes";

export const Home = () => {
  // useHistory MUST be used inside of the <Router /> component
  const history = useHistory();

  const apikey = process.env.REACT_APP_WEATHER_API_KEY;
  const openWeatherURL = "https://api.openweathermap.org/data/2.5/";
  const [query, setQuery] = useState("");

  const [weather, setWeather] = useState<WeatherObject>({
    temp: 88,
    name: "New York",
    country: "US",
    weatherDescription: "sunny",
  });

  const search = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // how to push to a path specifically if you want
      // history.push("/weather");

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

  const dateBuilder = (d: Date) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
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
              {Math.round(weather.temp)}°               {" "}
            </div>
            <div className="weather">{weather.weatherDescription}</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </main>
  );
};
