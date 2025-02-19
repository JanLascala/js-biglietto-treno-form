console.log("do i work")
// user selections
const nameEl = document.getElementById('name')
const formEl = document.getElementById('form')
const ageEl = document.getElementById('passAge')
const kMEl = document.getElementById('Kmselect')
const submEl = document.getElementById('Submitdata')
//ticket card
const nametckcard = document.getElementById('ticketname')
const kmticket = docu.getElementById('ticketKM')
const priceEl = document.getElementById('price')
const discountCard = document.getElementById('discount')





//generic immutable
const tckprice = 0.21;

//form the calculation
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

