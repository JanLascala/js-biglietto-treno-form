console.log("do i work")

const formEl = document.getElementById('form')
const ageEl = document.getElementById('passAge')
console.log(ageEl)
const kMEl = document.getElementById('Kmselect')
console.log(kMEl)
const optEl = document.querySelector('option')
const submEl = document.getElementById('Submitdata')
const priceEl = document.getElementById('price')

const tckprice = 0.21;
const standardPrice = tckprice * kMEl.value

formEl.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(ageEl.value)
    console.log(kMEl.value)
    console.log(standardPrice)

})







/*if (userAge < 18) {

    const minorDiscount = (80 * standardPrice) / 100;
    const minordecimal = minorDiscount.toFixed(2)

    document.getElementById("minorDiscount").innerHTML = (minordecimal);

} else if (userAge > 65) {
    const seniorDiscount = (60 * standardPrice) / 100

    const seniordecimal = seniorDiscount.toFixed(2)

    document.getElementById("seniorDiscount").innerHTML = (seniordecimal);


}*/

