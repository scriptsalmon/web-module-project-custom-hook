import useLocalStorage from './useLocalStorage';
import React from 'react';

const useDarkMode = (boolean) => {
    const [darkMode, setDarkMode] = useLocalStorage("mode", false);
    return (
        <div className={darkMode ? "darkmode App" : "App"}>
            
        </div>
    )
}

export default useDarkMode;


//dark mode returns a boolean to tell us whether its on or off
//setter function to set true or false