import {getCitiesListContainer, getWeatherFormInput, getLeftContent} from '../elements/elementHelpers.js'
import {} from '../elements/forecastCard.js';
import {createCitiesList, clearCitiesList} from '../elements/citiesList.js'
import {getCurrentCityWeather,
    getCurrentCityWeatherForDays
} from './requests.js';

import { getSavedCities, saveCity, cityExist } from './storage.js';

var currentWeather;
var currentWeatherForecast;

export const getCurrentWeather = () => currentWeather;
export const getCurrentWeatherForecast = () => currentWeatherForecast;

export const onSearchWeather = async () => {
    await searchWeather();
    
}

export const searchWeather = async () => {
    console.log('weather searched');

    const city = getWeatherFormInput().value;

    currentWeather = await getCurrentCityWeather(city);
    currentWeatherForecast = await getCurrentCityWeatherForDays(city);

    console.log(currentWeather);
    console.log(currentWeatherForecast);
}

export const initialize = () => {
    if(getSavedCities() == null){
        saveCity('New York');
        saveCity('Orlando');
        saveCity('Chicago');
    }

    createCitiesList(getCitiesListContainer(), getSavedCities());


    
}