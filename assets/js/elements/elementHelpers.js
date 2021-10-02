export const getContainerFluid = () => {
    var element = document.getElementsByClassName('container-fluid');
    return (element)? element : null;
}

export const getWeatherFormInput = () => {
    var element = document.getElementById('cityFormInput');
    return (element)? element : null;
}

export const getWeartherFormSearchButton = () => {
    var element = document.getElementById('weatherFormButton');
    return (element)? element : null;
}

export const getLeftContent = () => {  
    var element = document.getElementsByClassName('left-content');
    return (element)? element : null;
}
export const getCitiesListContainer = () => {  
    var element = document.getElementById('cities-list-container');
    return (element)? element : null;
}
export const getCurrentWeatherContainer = () => {  
    var element = document.getElementsByClassName('current-weather-container');
    return (element)? element : null;
}
export const getForecastContainer = () => {  
    var element = document.getElementsByClassName('forecast-container');
    return (element)? element : null;
}

