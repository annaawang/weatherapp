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
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16">
        <path fill-rule="evenodd" d="M6 7.304a1.892 1.892 0 0 0 1.62-.927c.168-.282.252-.591.252-.927A1.87 1.87 0 0 0 6 3.578c-.336 0-.645.084-.927.252a1.892 1.892 0 0 0-.927 1.62c0 .516.18.954.54 1.314.36.36.798.54 1.314.54zM6 .212c.96 0 1.842.234 2.646.702a5.283 5.283 0 0 1 1.89 1.89c.468.804.702 1.686.702 2.646 0 .732-.18 1.572-.54 2.52-.312.804-.744 1.674-1.296 2.61a34.43 34.43 0 0 1-1.566 2.322c-.408.564-.84 1.116-1.296 1.656l-.54.63-.54-.63a28.036 28.036 0 0 1-1.296-1.656 34.43 34.43 0 0 1-1.566-2.322c-.552-.936-.984-1.806-1.296-2.61-.36-.948-.54-1.788-.54-2.52 0-.96.234-1.842.702-2.646a5.283 5.283 0 0 1 1.89-1.89A5.166 5.166 0 0 1 6 .212z"/>
        </svg>

        <h1>Houston, TX</h1>
        <h2>{weekday[day] + ", " + months[month] + " " + date + ", " + year}</h2>
      </div>
    );
  }
}

export default DisplayInfo;