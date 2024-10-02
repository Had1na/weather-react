import React, { useState } from "react";
import axios from "axios";
import { Vortex } from "react-loader-spinner";

export default function Weather(props) {
  const [city, setCity] = useState({});
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [loader, setLoader] = useState(false);

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLoader(true);
    let apiKey = "97f8e93f00107773f88eafd933ce86b7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function displayWeather(response) {
    setLoaded(true);
    setLoader(false);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidty: {Math.round(weather.humidity)}%</li>
          <li>Wind: {Math.round(weather.wind)}km/h</li>
          <img src={weather.icon} alt={weather.description} />
        </ul>
      </div>
    );
  }
  if (loader) {
    return (
      <div>
        {form}
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      </div>
    );
  } else {
    return form;
  }
}
