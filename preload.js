const { contextBridge } = require('electron');
const countryInfo = require('country-js');
const got = require("got");

const API = {
    countryinfo: (country) => countryInfo.search(country),
    currentLocation: () => 
        fetch('http://ip-api.com/json')
            .then(res => res.json())
            .then(data => {
                console.log(data); 
                return data;
            })
            .catch(err => {
                console.error("couldn't get your location:", err);
            }),
    locationForecast: () =>
        fetch('https://api.weather.gov/points/')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                return data;
            })
            .catch(err => {
                console.error("couldn't get weather forecast:", err);
            }),
}

contextBridge.exposeInMainWorld('API', API);
