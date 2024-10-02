import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [temperature, setTemperature] = useState({});
  function handleResponse(response) {
    setTemperature(response.data.main.temp);
  }
  let apiKey = "97f8e93f00107773f88eafd933ce86b7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <h2>
      The temperature in {props.city} is {Math.round(temperature)}°C
    </h2>
  );
}
