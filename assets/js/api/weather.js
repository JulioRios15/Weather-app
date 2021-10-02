//html elements
import {getCitiesListContainer, getWeatherFormInput, getLeftContent, getCurrentWeatherContainer} from '../elements/elementHelpers.js'
import { rerenderForecastCards } from '../elements/forecastCard.js';
import {createCitiesList, rerenderCitiesList} from '../elements/citiesList.js';
import {rerenderWeatherInfo} from '../elements/weatherInfo.js';
//Api
import {getCurrentCityWeather,
    getCurrentCityWeatherForDays
} from './requests.js';

import { getSavedCities, saveCity, cityExist } from './storage.js';

var currentCityWeather;
var currentCityForecast;

export const getCurrenCitytWeather = () => currentCityWeather;
export const getCurrentCityForecast = () => currentCityForecast;

//called when search button is clicked or enter pressed in input field
export const onSearchWeather = async () => {
    const city = getWeatherFormInput().value;
    await searchWeather(city);
    
}
//called after searche button pressed or city from list clicked
export const searchWeather = async (city) => {
    const cityWeatherResponse = await getCurrentCityWeather(city);
    const cityForecastResponse = await getCurrentCityWeatherForDays(city);

    //response ok
    if(cityWeatherResponse.cod == 200 && cityForecastResponse.cod == '200'){
        currentCityWeather = cityWeatherResponse;
        currentCityForecast = cityForecastResponse;
        rerenderWeatherInfo();
        rerenderForecastCards();
    }

    //save only if city is valid and not exist in local storage and rerender city list
    if(cityExist(cityWeatherResponse.name) ===false && cityWeatherResponse.cod === 200 || cityWeatherResponse.cod === "200"){
        saveCity(cityWeatherResponse.name);
        rerenderCitiesList();
    }

    console.log(cityWeatherResponse);
    console.log(cityForecastResponse);
}

export const initialize = async () => {
    const savedCities = getSavedCities();

    if(savedCities == null){
        saveCity('New York');
        saveCity('Orlando');
        saveCity('Chicago');

        await searchWeather('New york');  
    } else{
        await searchWeather(savedCities[0]);
    }

    createCitiesList(getCitiesListContainer());
     
}