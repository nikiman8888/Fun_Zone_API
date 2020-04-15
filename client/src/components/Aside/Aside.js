import React from 'react';
import './Aside.css';
import {Link} from 'react-router-dom';

function Aside () {
    return (
        <div className ="news-wrapper">
             <h2>News</h2>
             <ul>
                 <li><Link to ="">More Games</Link></li>
                 <li><Link to ="">Do you know ...</Link></li>
                 <li><Link to ="">Best things to do 2020</Link></li>
                 <li><Link to ="">Funny markets</Link></li>
             </ul>
             <img src =""/>
        </div>
       
    )
}

export default Aside ;