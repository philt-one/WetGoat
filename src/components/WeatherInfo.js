import React, { Fragment, useContext } from 'react';
import CityContext from '../contexts/CityContext';

const WeatherInfo = () => {

    const { cityInfo } = useContext(CityContext);

    return cityInfo !== undefined ? (
        <div className="mx-auto weather-app">
            <div className="container weather-card">
                <div className="row">
                    <div className="">
                        <div className="weather-info__temperature">
                            {Math.round(cityInfo.main.temp - 273.15)}
                        </div>

                    </div>
                    <div className="col-xs-6 weather-info__right">
                        <div className="weather-info__name">{cityInfo.name}, {cityInfo.sys.country}</div>
                        <div className="weather-info__description">
                            <img 
                                style={{ paddingBottom: "6px" }}
                                height="40"
                                alt={cityInfo.weather[0].description} 
                                src={`http://openweathermap.org/img/wn/${cityInfo.weather[0].icon}@2x.png`} 
                            />
                            {cityInfo.weather[0].description.replace(/^\w/, c => c.toUpperCase())}
                        </div>
                    </div>
                </div>
                
                {/* <img 
                    alt={cityInfo.weather[0].description} 
                    src={`http://openweathermap.org/img/wn/${cityInfo.weather[0].icon}@2x.png`} 
                /> */}
            </div>
        </div>
    ) : (
        <div className="mx-auto weather-app">
            <h3 style={{ paddingTop: "30vh"}}>Choose a city ...</h3>
        </div> );
};

export default WeatherInfo;