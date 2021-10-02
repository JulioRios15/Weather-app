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

