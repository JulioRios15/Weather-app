import {config} from './config.js';

const key = config.apiKey;

export const getCurrentCityWeather = async (city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    var obj;

    await fetch(url)
    .then(res => res.json())
    .then(data => obj = data)
    .catch((err) => {
        obj = err;
    })

    return obj;
}

export const getCurrentCityWeatherForDays = async (city) => {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`;
    var obj;

    await fetch(url)
    .then(res => res.json())
    .then(data => obj = data)
    .catch((err) => {
        obj = err;
    })

    return obj;
}