import React, { Component } from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import cloud from './img/cloud.svg';

class App extends Component {
  render() {
    return (
      <div>
        
        <div class="OuterWrapper">
          <img id="cloud-one" src={cloud} alt="cloud" />
          <img id="cloud-two" src={cloud} alt="cloud" />
          <CurrentWeather />
        </div>

      </div>

    );
  }
}


export default App;
