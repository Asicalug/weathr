const { contextBridge } = require('electron');
const countryInfo = require('country-js');

const API = {
    countryinfo: (country) => countryInfo.search(country)
}

contextBridge.exposeInMainWorld('countryAPI', API);