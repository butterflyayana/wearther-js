// https://api.openweathermap.org/data/2.5/weather?q=Bishkek&appid=6511e14723ad8cb6f243ece1366c5deb
const url = "https://api.openweathermap.org/data/2.5/weather?q="
const api_key = "&appid=6511e14723ad8cb6f243ece1366c5deb"

function getWeather(cityName = "Bishkek") {
    const respons = fetch(url + cityName + api_key)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        showWheather(data)
    })
}
getWeather()

const cityName = document.getElementById("cityName")
const temp = document.getElementById("temp")
const weatherSt = document.getElementById("weatherStatus")
const wind = document.getElementById("wind")
const humidity = document.getElementById("humidity")
const textField = document.getElementById("textField")
const btnSnow = document.getElementById("btnSnow")
 
btnSnow.addEventListener('click', () => {
    getWeather(textField.value)
})
function showWheather(city) {
    const {name,sys,main} = city
    cityName.innerHTML = `${city.name} <span>${city.sys.country}</span>`
    temp.innerHTML = `${(city.main.temp - 273.15).toFixed()}`
}