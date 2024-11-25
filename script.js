const inputFullName = document.getElementById('input-fullname');
const inputKm = document.getElementById('input-km');
const inputAge = document.getElementById('input-age');
const btnSubmit = document.querySelector('button[type=submit]');

const pricePerKm = 0.21;
const discountUnderage = 20;
const discountOver65 = 40;

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();

  const totKm = parseInt(inputKm.value);
  const age = parseInt(inputAge.value);

  const totalPrice = calculateTotalPrice(totKm, age);
  const cpCode = generateCPCode();
  const seatNumber = generateSeatNumber();
  const cabinNumber = getRandomNumber(1, 10);
})

function calculateTotalPrice(totKm, age) {
  if (age < 18) {
    discount = discountUnderage;
  } else if (age > 65) {
    discount = discountOver65;
  } else {
    discount = 1;
  }
  const totalPrice = totKm * pricePerKm;
  const discountPrice = totalPrice * discount / 100;
  const totalDiscountedPrice = totalPrice - discountPrice;

  return totalDiscountedPrice;
}

function generateCPCode() {
  return Math.floor(Math.random() * 10000) + 90000;
}

function generateSeatNumber() {
  const seats = ['A', 'B', 'C', 'D', 'E'];
  return `${getRandomNumber(1, 6)}${seats[getRandomNumber(0, seats.length - 1)]}`;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}