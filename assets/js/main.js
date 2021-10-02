import {getWeartherFormSearchButton, getWeatherFormInput} from './elements/elementHelpers.js';
import { searchWeather } from './api/weather.js';


var searchButton = getWeartherFormSearchButton();
searchButton.addEventListener('click', searchWeather);



