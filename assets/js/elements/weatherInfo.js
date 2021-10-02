import {getCurrentWeatherContainer} from './elementHelpers.js'

export const createWeatherInfo = (childToAppend, data) => {
    var weatherInfoEl = document.createElement('div');
    var headingEl = document.createElement('h2');
    var tempEl = document.createElement('p');
    var windEL = document.createElement('p');
    var HumidityEl = document.createElement('p');
    var uvIndexEl = document.createElement('p');

    //appending elements
    weatherInfoEl.appendChild(headingEl);
    weatherInfoEl.appendChild(tempEl);
    weatherInfoEl.appendChild(windEL);
    weatherInfoEl.appendChild(HumidityEl);
    weatherInfoEl.appendChild(uvIndexEl);

    childToAppend.appendChild(weatherInfoEl);
}

export const clearWeatherInfo = () => {
    var weatherContainer = getCurrentWeatherContainer();
    weatherContainer.innerHTML = "";
}