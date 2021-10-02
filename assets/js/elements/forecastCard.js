export const createForecastCard = (childToAppend, weather) => {
    //Creating Elements
    var containerEl = document.createElement('div');
    var dateEl = document.createElement('h3');
    var iconEl = document.createElement('span');
    var tempEl = document.createElement('p');
    var windEl = document.createElement('p');
    var humidityEl = document.createElement('p');

    //Ids Setup
    containerEl.id = "forecast-card";

    //Text Content

    //Appending Elements
    containerEl.appendChild(dateEl);
    containerEl.appendChild(iconEl);
    containerEl.appendChild(tempEl);
    containerEl.appendChild(windEl);
    containerEl.appendChild(humidityEl);

    childToAppend.appendChild(containerEl);

}