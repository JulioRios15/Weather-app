import {getWeartherFormSearchButton, getWeatherFormInput} from './elements/elementHelpers.js';
import { onSearchWeather,searchWeather } from './api/weather.js';
import {saveCity, getSavedCities} from './api/storage.js'


var searchButton = getWeartherFormSearchButton();
searchButton.addEventListener('click', onSearchWeather);

var inputButton = getWeatherFormInput();
inputButton.addEventListener('keyup', ()=> {
        if(event.keyCode === 13){
            event.preventDefault();
            searchButton.click();
        }
    });





