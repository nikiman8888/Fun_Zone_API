import React from 'react';
import './Home.css';
//import weather from '/images/weather.png';
//import games from '/images/brain-games.png';
//import zodiac from '/images/zodiac1.png';
import {Link} from  'react-router-dom';

function Home() {
    return (
        <div className="home-wrapper">
            <h1>The Fun Zone</h1>
            <h3>Enjoy the Fun Zone Api - play games ,get the weather, check your horoscoope.</h3>
            <hr/>
            <div className="text-wrapper">
                <section className="first-section">
                    <Link to ="/weather"><img src='/images/weather.png' alt="info" /></Link>
                    <p>
                        Weather API is a live worldwide weather
                        information.24/7.
                        Just go to the weather link and enter a city
                        you look for.                         
                    </p>
                </section>
                <section className="second-section">
                    <Link to ="/games"><img src='/images/brain-games.png' alt="games" /></Link>
                    <p>
                        The Brain Games - get some fun with our logic games,
                        The games are really amasing if you are interested in logic and 
                        brain games .Get some fun .
                                                           
                    </p>
                </section>
                <section className="third-section">
                    <Link to ="/horoscope"><img src='/images/zodiac1.png' alt="info" /></Link>             
                    <p>
                        Horoscoope API - is a monthly live prediction.
                        Choose your zodiac sign and get some information about 
                        what you can expect this month.
                                           
                    </p>
                </section>

            </div>
        </div>

    )
}


export default Home;
