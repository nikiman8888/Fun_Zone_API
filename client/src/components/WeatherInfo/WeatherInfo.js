import React from 'react';
import './WeatherInfo.css';
//import localTime from '../../api/localTime';
function WeatherInfo(props) {

    //let cityTime = localTime.get(lat, lng); //get the current time iin the city

    return (

        <div className="weather-info-wrapper">
            <div className="city-time-wrapper">
                <h2>{props.cityName.toUpperCase()}</h2>
                {props.localTime && <p>Local time: {props.localTime.substring(0, props.localTime.length - 3)}</p> }
               
            </div>
            <div className="display-info-wrapper">
                <div className="img-descript-wrapper">
                    <img src={props.imgPath} alt="weather" />
                    <p className="description">{props.description.substring(0, 1).toUpperCase() + props.description.substring(1)}</p>
                </div>
                <div className="diagnostic-wrapper">
                <p >Temperature: {props.temp}&deg;</p>
                <p >Feels like: {props.feelsLike}&deg;</p>
                <p >Wind speed: {props.windSpeed}</p>
                <p >Humidity: {props.humidity}</p>
                </div>              
            </div>
        </div>
    )
}

export default WeatherInfo;