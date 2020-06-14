import React, { createContext, useState } from 'react';

const CityContext = createContext();


export const CityContextProvider = ({ children }) => {

    const [cityInfo, setCityInfo] = useState(undefined);

    return (
        <CityContext.Provider value={{cityInfo, setCityInfo}}>
            { children }
        </CityContext.Provider>
    );
}
 
export default CityContext;