import {getForecastContainer} from './elementHelpers.js'
import {getCurrentCityForecast} from '../api/weather.js';
import {getNextDay} from '../api/date.js';

export const createForecastCard = (childToAppend, data, date) => {
    //Creating Elements
    var containerEl = document.createElement('div');
    var dateEl = document.createElement('h3');
    var iconEl = document.createElement('span');
    var tempEl = document.createElement('p');
    var windEl = document.createElement('p');
    var humidityEl = document.createElement('p');

    //Ids Setup
    containerEl.id = "forecast-card";

    //Text Content
    dateEl.textContent = `(${date})`;
    tempEl.textContent = `Temp: ${data.main.temp} F`;
    windEl.textContent = `Wind: ${data.wind.speed} MPH`;
    humidityEl.textContent = `Humidity: ${data.main.humidity} %`;
    

    //Appending Elements
    containerEl.appendChild(dateEl);
    containerEl.appendChild(iconEl);
    containerEl.appendChild(tempEl);
    containerEl.appendChild(windEl);
    containerEl.appendChild(humidityEl);

    childToAppend.appendChild(containerEl);

}

export const createForecastCards = () => {
    const forecast = getCurrentCityForecast();
    for (let i = 0; i < 5; i++) {
        createForecastCard(getForecastContainer(), forecast.list[i], getNextDay(i+1));
    }
}

export const clearForecastCards = () => {
    var forecastContainer = getForecastContainer();
    forecastContainer.innerHTML = "";
}

export const rerenderForecastCards = () => {
    clearForecastCards();
    createForecastCards();
}