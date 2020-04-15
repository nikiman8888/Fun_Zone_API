import React, { Component } from 'react';
import './Weather.css';
import weather from '../../api/weather';
import localTime from '../../api/localTime';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import imagePath from '../../utils/imagePath';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';

class Weather extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cityName: '',
            imgPath: '',
            temp: '',
            feelsLike: '',
            windSpeed: '',
            error: '',
            infoDisplay: false,
            description: '',
            humidity: '',
            localTime: '',
            correctCity: '',
            loading: false
        }
    }

    cityHandler = (event) => {
        this.setState({ error: '' });
        this.setState({ infoDisplay: false });
        this.setState({ cityName: event.target.value })
    }

    sendHandler = (e) => {
        this.setState({ loading: true });
        e.preventDefault();
        const city = this.state.cityName;
        this.setState({ correctCity: city })//this state is saving the  name of city 
        this.setState({ cityName: '' }); //because here i want to clear the input field after pushing button
        this.setState({ imgPath: '' });

        weather.get(city)

            .then(res => res.json())
            .then(res => {
                if (res.message === 'city not found') { //if not found city set the error msg
                    this.setState({ error: `${city} city not found!`.toUpperCase() })
                    return;
                } else {
                    this.setState({ loading: false })

                    this.setState({ infoDisplay: true });
                    let lat = res.coord.lat;
                    let lng = res.coord.lon;
                    localTime.get(lat, lng)
                        .then(res => res.json())// make nested fetching to get the local time
                        .then(res => {
                            this.setState({ localTime: res.formatted });
                        }).catch(console.error);
                    let getDescription = res.weather[0].description;
                    this.setState({ imgPath: imagePath(getDescription) });

                    let degree = Number(res.main.temp) - 273.15;//Kelvin  
                    this.setState({ temp: Math.round(degree) });

                    let feelsLike = Number(res.main.feels_like) - 273.15 //Kelvin temp 
                    this.setState({ feelsLike: Math.round(feelsLike) });

                    let windSpeed = res.wind.speed;
                    this.setState({ windSpeed: windSpeed });

                    let humidity = res.main.humidity;
                    this.setState({ humidity: humidity });

                    this.setState({ description: res.weather[0].description });
                }
            })
            .catch(console.error)
    }

    render() {
        const {
            error,
            infoDisplay,
            imgPath,
            temp,
            feelsLike,
            correctCity,
            description,
            windSpeed,
            humidity,
            localTime,
            loading
        } = this.state;

        return (
            <div className="weather-wrapper">
                <h1>Weather Page</h1>
                <div className="input-wrapper">
                    <form>
                        <label htmlFor="city">Enter the City</label>
                        <input type="text"
                            id="city" required
                            placeholder="  enter city"
                            autoFocus
                            onChange={this.cityHandler}
                            value={this.state.cityName}
                            onBlur={this.cityHandler} />
                        <button type="button" onClick={this.sendHandler}>Send</button>
                    </form>
                </div>
                {error && <div className="error-message"><h2>{error}</h2></div>}
                {loading && <LoadingIndicator />}
                {infoDisplay && <WeatherInfo
                    imgPath={imgPath}
                    temp={temp}
                    feelsLike={feelsLike}
                    cityName={correctCity}
                    localTime={localTime}
                    description={description}
                    windSpeed={windSpeed}
                    humidity={humidity}
                />}
            </div>
        )
    }
}

export default Weather;