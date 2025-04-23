document.querySelector('.searchbox').addEventListener('input', function() {
    const countrybutton = document.getElementById('countrysuggestion')
    countrybutton.innerText = "..."
    countrybutton.innerHTML = `<img src="assets/search.svg" alt="search" width="24">`
    console.log(window.API.countryinfo(this.value))
    const obj = window.API.countryinfo(this.value)

    const result = obj[0].name.toLowerCase()
    countrybutton.innerText = result.charAt(0).toUpperCase() + result.slice(1)
});
async function load() {
    try {
        const data = await window.API.currentLocation();
        console.log(data);
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=e5745217b3394e008f4204815252304&q=${data.lat},${data.lon}&aqi=yes`);
        const forecast = await response.json();
        document.getElementById('temp').innerText = `${forecast.current.temp_c}°`;
        document.getElementById('conditionimg').src = `../assets/${forecast.current.condition.text}.svg`
        document.getElementById('condition').innerText = `${forecast.current.condition.text}`
        document.getElementById('location').innerText = `${data.country}, ${data.city}`;
        //document.getElementById('country').innerText = data.country;

    } catch (err) {
        console.error('Are you on earth ? :', err);
    }
}