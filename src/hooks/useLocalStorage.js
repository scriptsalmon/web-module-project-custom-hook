import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [values, setValues] = useState(() => {
      if(localStorage.getItem(key)) {
        return(JSON.parse(localStorage.getItem(key)));
      } else{
        localStorage.setItem(key, JSON.stringify(initialValue))
        return(initialValue);
      }
    });
  
    const setStoredValues = (values) => {
      localStorage.setItem(key, JSON.stringify(values));
      setValues(values);
    }
  
    return [values, setStoredValues];
}

export default useLocalStorage;