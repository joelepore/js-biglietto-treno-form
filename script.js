const inputFullName = document.getElementById('input-fullname');
const inputKm = document.getElementById('input-km');
const inputAge = document.getElementById('input-age');

const pricePerKm = 0.21;
const discountUnderage = 20;
const discountOver65 = 40;

let totalPrice, totalDiscountedPrice, discountPrice;
let discount = 0;

const totKm = parseInt(inputKm.value);
const age = parseInt(inputAge.value);

totalPrice = totKm * pricePerKm;

if (age < 18) {
  discount = discountUnderage;
} else if (age > 65) {
  discount = discountOver65;
}

discountPrice = totalPrice * discount / 100;
totalDiscountedPrice = totalPrice - discountPrice;