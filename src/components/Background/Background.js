import React, { Component } from 'react';
import './Background.css';
import location from '../../img/location-on-material.svg';

class DisplayInfo extends Component {
  render() {
    const date = new Date().getDate();
    const day = new Date().getDay();
    const month = new Date().getMonth() + 1; 
    const year = new Date().getFullYear(); 

    var weekday= [];
    weekday[0]="Sunday";
    weekday[1]="Monday";
    weekday[2]="Tuesday";
    weekday[3]="Wednesday";
    weekday[4]="Thursday";
    weekday[5]="Friday";
    weekday[6]="Saturday";

    var months = [];
    months[1]="Jan";
    months[2]="Feb";
    months[3]="Mar";
    months[4]="Apr";
    months[5]="May";
    months[6]="June";
    months[7]="July";
    months[8]="Aug";
    months[9]="Sep";
    months[10]="Oct";
    months[11]="Nov";
    months[12]="Dec";

    return (
      <div className="DisplayInfo">
        <img src={location} alt="location"/><h1>Dallas, TX</h1>
        <h2>{weekday[day] + ", " + months[month] + " " + date + ", " + year}</h2>
      </div>
    );
  }
}

export default DisplayInfo;