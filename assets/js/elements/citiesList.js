import {getCitiesListContainer} from './elementHelpers.js'
import {getSavedCities} from '../api/storage.js'
import {searchWeather} from '../api/weather.js'
const createCitiesLi = () => {
    var citiesLiEls = [];
    const cityLiId = 'cities-list-item';
    const emptyCityLiId = "cities-list-item-empty"

    const cities = getSavedCities();

    if(cities){
        cities.forEach(item => {
            var liEl = document.createElement('li');
            liEl.textContent = item;
            liEl.id = cityLiId;
            liEl.onclick = ()=> {
                searchWeather(item);
            }

            citiesLiEls.push(liEl);
        });
    } else{
        //if no city saved
        var liEl = document.createElement('li');
        liEl.textContent = "Search for A City";
        liEl.id = emptyCityLiId;
        citiesLiEls.push(liEl);     
    }

    return citiesLiEls;
}

export const createCitiesList = (childToAppend) => {
    //creating elements
    var ulEl = document.createElement('ul');
    var citiesLiEls = createCitiesLi();

    //appending
    citiesLiEls.forEach((elemet) => {
        ulEl.appendChild(elemet);
    });
    childToAppend.appendChild(ulEl);
}

export const clearCitiesList = () => {
    var citiesListEl = getCitiesListContainer();  
    citiesListEl.innerHTML = "";
}

export const rerenderCitiesList = () => {
    clearCitiesList();
    createCitiesList(getCitiesListContainer());
}