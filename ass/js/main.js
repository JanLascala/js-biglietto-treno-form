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
    const standardPrice = tckprice * kMEl.value

    //check in console if everything works as should
    console.log(ageEl.value)
    console.log(kMEl.value)
    console.log(standardPrice)

    if (ageEl.value === "1") {

        const minorDiscount = (80 * standardPrice) / 100;
        const minordecimal = minorDiscount.toFixed(2)
        priceEl.innerText = minordecimal



    } else if (ageEl.value === "3") {

        const seniorDiscount = (60 * standardPrice) / 100
        const seniordecimal = seniorDiscount.toFixed(2)
        priceEl.innerText = seniordecimal



    } else if (ageEl.value === "2") {
        priceEl.innerText = standardPrice


    }


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

