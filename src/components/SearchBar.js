import React, { useState, useEffect, useContext } from 'react';
import { getWeatherData, getCityNames } from './ApiCall';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import CityContext from '../contexts/CityContext';

const SearchBar = () => {

    const [ value, setValue ] = useState("");
    const [ dropdown, setDropdown ] = useState(false);
    const [ dropdownElements, setDropdownElements ] = useState([]);

    const { setCityInfo } = useContext(CityContext);

    useEffect(() => {
        if (value === "") {
            setDropdown(false);
        }
        getCityNames(value, setDropdownElements);
    }, [value]);

    const handleOnChange = (event) => {
        setValue(event.target.value);
        setDropdown(true);
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (value !== "") {
            getWeatherData(value, setCityInfo);
        }
        setDropdown(false);
    }

    const handleOnClick = (element) => {
        setValue(element.name);
        getWeatherData(element.name, setCityInfo);
        setDropdown(false);
    }

    return (
        <form className="search" onSubmit={handleOnSubmit}>
            <input
                type="text"
                className="search__text"
                placeholder="City"
                value={value}
                onChange={handleOnChange}
                />
            <div className="search__icon-box">
                <FontAwesomeIcon className="search__icon" icon={faSearch} />
            </div>
            {dropdown && (
                <div className="search__dropdown">
                    <ul className="search__dropdown-ul">
                        {dropdownElements.map((element, index) => {
                                return (
                                <li 
                                    key={index} 
                                    onClick={() => handleOnClick(element)}
                                    className="search__dropdown-item"
                                >
                                    {element.name}, {element.country}
                                </li>
                                )
                            })
                        }
                    </ul>
                </div>
            )}
        </form>
    )
};

export default SearchBar;