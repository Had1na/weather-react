import React, { useState } from "react";
import axios from "axios";
import { Vortex } from "react-loader-spinner";

export default function Weather(props) {
  const [temperature, setTemperature] = useState({});
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setTemperature(response.data.main.temp);
    setLoaded(true);
  }
  let apiKey = "97f8e93f00107773f88eafd933ce86b7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  if (loaded) {
    return (
      <h2>
        The temperature in {props.city} is {Math.round(temperature)}°C
      </h2>
    );
  } else {
    return (
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["red", "green", "blue", "yellow", "orange", "purple"]}
      />
    );
  }
}
