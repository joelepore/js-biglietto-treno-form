// Form
const inputFullName = document.getElementById('input-fullname');
const inputKm = document.getElementById('input-km');
const inputAge = document.getElementById('input-age');
const btnSubmit = document.querySelector('button[type=submit]');
// Biglietto
const ticketPrice = document.getElementById('total-price');
const passengerAge = document.getElementById('passenger-age');
const passengerName = document.getElementById('passenger-name');
const cabinNumber = document.getElementById('cabin-number');
const seatNumber = document.getElementById('seat-number');
const cpCode = document.getElementById('cp-code');
const totKm = document.getElementById('tot-km');

const pricePerKm = 0.21;
const discountUnderage = 20;
const discountOver65 = 40;

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  // Prendo i dati di input
  const fullName = inputFullName.value.trim();
  const totKm = parseInt(inputKm.value);
  const age = parseInt(inputAge.value);
  // Eseguo tutti i calcoli che occorrono
  const totalPrice = calculateTotalPrice(totKm, age);
  const cpCode = generateCPCode();
  const seatNumber = generateSeatNumber();
  const cabinNumber = getRandomNumber(1, 10);
  // Visualizzo l'output
  generateTicket(totalPrice, fullName, cabinNumber, seatNumber, cpCode, totKm);
})

function generateTicket(price, name, cabin, seat, cp, km) {
  ticketPrice.innerText = price.toFixed(2);
  passengerName.innerText = name;
  cabinNumber.innerText = cabin;
  seatNumber.innerText = seat;
  cpCode.innerText = cp;
  totKm.innerText = km;
}

// Funzione che restituisce il prezzo totale del biglietto prendendo in input il totale dei kilometri e l'eta' del passeggero
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
// Funzione che genera un codice cp random compreso tra 90000 e 99999
function generateCPCode() {
  return Math.floor(Math.random() * 10000) + 90000;
}
// Funzione che genera randomicamente il numero del sedile del passeggero (e.g. 1A, 3B, etc.)
function generateSeatNumber() {
  const seats = ['A', 'B', 'C', 'D', 'E'];
  return `${getRandomNumber(1, 6)}${seats[getRandomNumber(0, seats.length - 1)]}`;
}
// Funzione che restituisce un intero compreso tra due estremi, estremi inclusi
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}