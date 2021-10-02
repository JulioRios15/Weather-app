import {getCitiesListContainer} from './elementHelpers.js'
const createCitiesLi = (cities) => {
    var citiesLiEls = [];
    const cityLiId = 'cities-list-item';
    const emptyCityLiId = "cities-list-item-empty"

    if(cities){
        cities.forEach(item => {
            var liEl = document.createElement('li');
            liEl.textContent = item;
            liEl.id = cityLiId;

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

export const createCitiesList = (childToAppend, cities) => {
    //creating elements
    var ulEl = document.createElement('ul');
    var citiesLiEls = createCitiesLi(cities);

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