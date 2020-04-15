import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Weather from './components/Weather/Weather';
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';
import Horoscope  from './components/Horoscope/Horoscope';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navigation />
        <div className="page-aside-wrapper">
          <div className="page-wrapper">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/weather" component={Weather} />
              <Route path="/horoscope" component={Horoscope} />
            </Switch>
          </div>
          <div className="aside-wrapper">
            <Aside />
          </div>
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
