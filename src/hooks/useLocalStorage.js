import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    //set and update localStorage
    //retrieve that value if user refreshes or closes window
    const [storedValue, setStoredValue] = useState(() => {
//SHORT VERSION
    const item = window.localStorage.getItem(key);
    //parse and return stored json, or if undefined, return initialValue
    return item ? JSON.parse(item) : initialValue;
    });
    const setValue = (value) => {
        window.localStorage.setItem(key, value);
        setStoredValue(value);
    }

    return [storedValue, setValue]
};

//LONG VERSION
        // if (localStorage.getItem(key)) {
        //     return JSON.parse(localStorage.getItem(key))
        // } else {
        //     localStorage.setItem(key, initialValue);
        //     return initialValue;
        // }