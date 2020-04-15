import React, { Component } from 'react';
import './Horoscope.css';

class Horoscope extends Component {
    constructor(props) {
        super(props)
        this.state ={

        }
    }
    render() {
        return (
            <div className="horoscope-wrapper">
                <h1>Horoscope Page</h1>
                <div className="select-wrapper">
                    <label htmlFor ="horoscope">Choose a sign</label>
                    <select id ="horoscope">
                        <option>select</option>
                        <option>Goat</option>
                        <option>Water Bearer</option>
                        <option>Fish</option>
                        <option>Ram</option>
                        <option>Bull</option>
                        <option>Twins</option>
                        <option>Crab</option>
                        <option>Lion</option>
                        <option>Maiden</option>
                        <option>Scales</option>
                        <option>Scorpion</option>
                        <option>Archer</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Horoscope;