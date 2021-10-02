import {getCurrentCityWeather,
    getCurrentCityWeatherForDays
} from './requests.js';

import {getWeatherFormInput} from '../elements/elementHelpers.js'

var currentWeather;
var currentWeatherForecast;

export const getCurrentWeather = () => currentWeather;
export const getCurrentWeatherForecast = () => currentWeatherForecast;

export const searchWeather = async () => {
    console.log('weather searched');

    const city = getWeatherFormInput().value;

    currentWeather = await getCurrentCityWeather(city);
    currentWeatherForecast = await getCurrentCityWeatherForDays(city);
}
