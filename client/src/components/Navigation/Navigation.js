import React from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom';


function Navigation() {
    return (
        <div className="navigation-wrapper">
            <div className="name">
                <h1>The Fun Zone</h1>
            </div>
            <div className="navbar">
                <ul>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/weather">Weather</Link></li>
                    <li><Link to = "/">Logic Games</Link></li>
                    <li><Link to = "/horoscope">Horoscope</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation;
