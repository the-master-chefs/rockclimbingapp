import React from "react";

function Weather() {
  return (
      <div className="Weather" elevation={20}>
        <a class="weatherwidget-io" 
          href="https://forecast7.com/en/30d27n97d74/austin/?unit=us" 
          data-label_1="AUSTIN" 
          data-label_2="WEATHER" 
          data-icons="Climacons Animated" 
          data-days="3" 
          data-theme="original" 
        >
          AUSTIN WEATHER
        </a>
      </div> 
  );
}

export default Weather;


