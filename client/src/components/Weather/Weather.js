import React, { Component } from 'react';
import './Weather.css';
import weather from '../../api/weather';
import localTime from '../../api/localTime';
import WeatherInfo from '../WeatherInfo/WeatherInfo';

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

        }

        this.sendHandler = this.sendHandler.bind(this);
        this.cityHandler = this.cityHandler.bind(this);
    }

    cityHandler = (event) => {
        this.setState({ error: '' });
        this.setState({ infoDisplay: false });
        this.setState({ cityName: event.target.value })
    }

    sendHandler = (e) => {
        e.preventDefault();
        const city = this.state.cityName;
        this.setState({ cityName: '' });
        this.setState({ imgPath: '' });

        weather.get(city)
            .then(res => res.json())
            .then(res => {
                if (res.message === 'city not found') { //if not found city set the error msg
                    this.setState({ error: res.message })
                    return;
                } else {

                    this.setState({ infoDisplay: true });
                    let lat = res.coord.lat;
                    let lng = res.coord.lon;
                    localTime.get(this.state.lat, this.state.lng)
                        .then(res => res.json())// make nested fetching to get the local time
                        .then(res => {
                            this.setState({ localTime: res.formatted });
                        }).catch(console.error);
                    if (res.weather[0].description === "few clouds") {
                        this.setState({ imgPath: '/images/cloud-sun.png' });
                    } else if (res.weather[0].description === 'scattered clouds') {
                        this.setState({ imgPath: '/images/cloud-sun.png' })
                    } else if (res.weather[0].description === 'overcast clouds') {
                        this.setState({ imgPath: '/images/overcast-clouds.png' })
                    } else if (res.weather[0].description === 'broken clouds') {
                        this.setState({ imgPath: '/images/cloud-sun.png' });
                    } else if (res.weather[0].description === "light rain") {
                        this.setState({ imgPath: '/images/light-rain.png' });
                    } else if (res.weather[0].description === 'clear sky') {
                        this.setState({ imgPath: '/images/sun.png' });
                    } else if (res.weather[0].description === 'light snow') {
                        this.setState({ imgPath: '/images/light-snow.png' });
                    } else if (res.weather[0].description === 'moderate rain') {
                        this.setState({ imgPath: '/images/moderate-rain.png' });
                    }
                    let degree = Number(res.main.temp) - 273.15;//Kelvin  
                    let feelsLike = Number(res.main.feels_like) - 273.15 //Kelvin temp 
                    let windSpeed = res.wind.speed;
                    let humidity = res.main.humidity;
                    this.setState({ temp: Math.round(degree) });
                    this.setState({ feelsLike: Math.round(feelsLike) });
                    this.setState({ description: res.weather[0].description });
                    this.setState({ windSpeed: windSpeed });
                    this.setState({ humidity: humidity });
                    //this.setState({cityName:res.name});
                    this.setState({ lat: lat });
                    this.setState({ lng: lng });

                }
            })
            .catch(console.error);
    }

    render() {
        const {
            error,
            infoDisplay,
            imgPath,
            temp,
            feelsLike,
            cityName,
            description,
            windSpeed,
            humidity,
            localTime
        } = this.state;

        return (
            <div className="weather-wrapper">
                <h1>Weather Page</h1>
                <div className="input-wrapper">
                    <form>
                        <label htmlFor="city">Enter the City</label>
                        <input type="text"
                            id="city" required
                            placeholder="  London"
                            autoFocus
                            onChange={this.cityHandler}
                            value={this.state.cityName}
                            onBlur={this.cityHandler} />
                        <button type="button" onClick={this.sendHandler}>Send</button>
                    </form>
                </div>
                {error && <div className="error-message"><h2>{error.toUpperCase() + '!'}</h2></div>}

                {infoDisplay && <WeatherInfo
                    imgPath={imgPath}
                    temp={temp}
                    feelsLike={feelsLike}
                    cityName={cityName}
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