import removeAccents from 'remove-accents';

export const getWeatherData = async (location, setCityInfo) => {
    // OpenWeather's API_Key is stored in .env file at the root of the project
    const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${removeAccents(location)}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        );
    // Query data from the db
    const response = await api_call.json();
    if (response.main) {
        // Log API response for debugging
        setCityInfo(response);
    } else {
        console.log(response);
    }
};

export const getCityNames = async (cityPrefix, setDropdownElements) => {
    if (cityPrefix !== "") {
        let response = await fetch('/world-cities.json');

        if (response.ok) { // if HTTP-status is 200-299
            // get the response body (the method explained below)
            let json = await response.json();
            const matches = json.filter(entrie => {
                if (removeAccents(entrie.name.toLowerCase()).startsWith(removeAccents(cityPrefix.toLowerCase()))) {
                    return true
                } else {return false}
            });
            setDropdownElements(matches.slice(0, 30));
        } else {
            console.log(response);
        }
    }
};