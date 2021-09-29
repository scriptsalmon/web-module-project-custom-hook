import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";


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


const App = () => {
  const [coinData, setCoinData] = useState([]);
  // const [darkMode, setDarkMode] = useState(false);
  const [darkMode, setDarkMode] = useLocalStorage("mode", false)

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className={darkMode ? "dark-mode App" : "App"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
