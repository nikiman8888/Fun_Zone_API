import React from 'react';
import './WeatherInfo.css';
//import localTime from '../../api/localTime';
function WeatherInfo(props) {

    //let cityTime = localTime.get(lat, lng); //get the current time iin the city

    return (

        <div className="weather-info-wrapper">
            <div className="city-time-wrapper">
                {props.localTime}
            </div>
            <div className="img-descript-wrapper">
                <img src={props.imgPath} alt="weather" />
                <p className="description">{props.description.substring(0, 1).toUpperCase() + props.description.substring(1)}</p>
            </div>
            <p className="temp-wrapper">Temperature: {props.temp}&deg;</p>
            <p className="temp-wrapper-feels-like">Feels like: {props.feelsLike}&deg;</p>
            <p className="wind-wrapper">Wind speed: {props.windSpeed}</p>
            <p className="humidity-wrapper">Humidity: {props.humidity}</p>
        </div>
    )
}

export default WeatherInfo;