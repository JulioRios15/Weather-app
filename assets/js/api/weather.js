import {getCitiesListContainer, getWeatherFormInput, getLeftContent} from '../elements/elementHelpers.js'
import {} from '../elements/forecastCard.js';
import {createCitiesList, rerenderCitiesList} from '../elements/citiesList.js'
import {getCurrentCityWeather,
    getCurrentCityWeatherForDays
} from './requests.js';

import { getSavedCities, saveCity, cityExist } from './storage.js';

var currentWeather;
var currentWeatherForecast;

export const getCurrentWeather = () => currentWeather;
export const getCurrentWeatherForecast = () => currentWeatherForecast;

//called when search button is clicked or enter pressed in input field
export const onSearchWeather = async () => {
    const city = getWeatherFormInput().value;
    await searchWeather(city);
    
}
//called after searche button pressed or city from list clicked
export const searchWeather = async (city) => {
    console.log('weather searched');

    currentWeather = await getCurrentCityWeather(city);
    currentWeatherForecast = await getCurrentCityWeatherForDays(city);

    //save only if city is valid and not exist in local storage
    if(cityExist(city) ===false && currentWeather.cod === 200 || currentWeather.cod === "200"){
        saveCity(city);
        rerenderCitiesList();
        console.log(`city saved: ${city}`);
    }

    console.log(currentWeather);
    console.log(currentWeatherForecast);
}

export const initialize = () => {
    const savedCities = getSavedCities();
    if(savedCities == null){
        saveCity('New York');
        saveCity('Orlando');
        saveCity('Chicago');
    }

    createCitiesList(getCitiesListContainer());


    
}