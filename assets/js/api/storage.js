export const getSavedCities = () => {
    return JSON.parse(localStorage.getItem('cities'));
}

export const saveCity = (city) => {
    const savedCities = getSavedCities();
    const newCity = [city]; 

    if(savedCities != null){
        const newCities = [...savedCities, ...newCity];
        localStorage.setItem("cities", JSON.stringify(newCities));
        console.log(newCities);
    } else{
        localStorage.setItem("cities", JSON.stringify(newCity));
    }    
}

export const cityExist = (city) => {
    const cities = getSavedCities();
    //search for cities saved in local storage and return false if not saved
    for (let i = 0; i < cities.length; i++) {
        if(cities[i] == city) {
            return true;
        }
    }

    return false;
}

