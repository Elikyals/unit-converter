const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const convertBtn = document.getElementById("covert-btn")
const inputEl = document.getElementById("input-el")

convertBtn.addEventListener("click", function(){
    const num = inputEl.value
    convertMeter2Feet(num)
    convertLiters2Gallons(num)
    convertKilos2Pounds(num)
})

function convertMeter2Feet(num) {
    const meter2Feet = (num * 3.2803).toFixed(3)
    const feet2meter = (num * 0.3048).toFixed(3)
    lengthEl.textContent = `${num} meters = ${meter2Feet} feet | ${num} feet = ${feet2meter} meters`
}

function convertLiters2Gallons(num) {
    const liter2Gallon = (num * 0.2642).toFixed(3)
    const gallon2Liter = (num * 3.7854).toFixed(3)
    volumeEl.textContent = `${num} liters = ${liter2Gallon} gallons | ${num} gallons = ${gallon2Liter} liters`
}

function convertKilos2Pounds(num) {
    const kilogram2Pounds = (num * 2.2046).toFixed(3)
    const pound2kilogram = (num * 0.4536).toFixed(3)
    massEl.textContent = `${num} kilos = ${kilogram2Pounds} pounds | ${num} pounds = ${pound2kilogram} kilos`
}