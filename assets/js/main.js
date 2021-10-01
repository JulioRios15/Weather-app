import {getCurrentCityWeather,
        getCurrentCityWeatherForDays
} from './api/requests.js';

const weather = await getCurrentCityWeather("thailand").finally();

const daysWeather = await getCurrentCityWeatherForDays("thailand");
console.log(weather);
console.log(daysWeather);
