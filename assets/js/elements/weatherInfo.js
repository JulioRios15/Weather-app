import {getCurrentWeatherContainer} from './elementHelpers.js'
import {getCurrenCitytWeather} from '../api/weather.js';
import {getTodaysDate} from '../api/date.js'

export const createWeatherInfo = (childToAppend, data) => {
    var weatherInfoEl = document.createElement('div');
    var headingEl = document.createElement('h2');
    var tempEl = document.createElement('p');
    var windEL = document.createElement('p');
    var HumidityEl = document.createElement('p');


    headingEl.textContent = `${data.name} (${getTodaysDate()})`;
    tempEl.textContent = `Temp: ${data.main.temp} F`;
    windEL.textContent = `Wind: ${data.wind.speed} MPH`;
    HumidityEl.textContent = `Humidity: ${data.main.humidity} %`;



    //appending elements
    weatherInfoEl.appendChild(headingEl);
    weatherInfoEl.appendChild(tempEl);
    weatherInfoEl.appendChild(windEL);
    weatherInfoEl.appendChild(HumidityEl);

    childToAppend.appendChild(weatherInfoEl);
}

export const clearWeatherInfo = () => {
    var weatherContainer = getCurrentWeatherContainer();
    weatherContainer.innerHTML = "";
}

export const rerenderWeatherInfo = () => {
    clearWeatherInfo();
    createWeatherInfo(getCurrentWeatherContainer(), getCurrenCitytWeather());
}
