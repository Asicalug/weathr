document.querySelector('.searchbox').addEventListener('input', function() {
    console.log(window.countryAPI.countryinfo(this.value))
    const obj = window.countryAPI.countryinfo(this.value)

    const countrybutton = document.getElementById('countrysuggestion')
    const result = obj[0].name.toLowerCase()
    countrybutton.style.visibility = "visible"
    countrybutton.innerText = result.charAt(0).toUpperCase() + result.slice(1)
});