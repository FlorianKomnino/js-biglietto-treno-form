console.log('Hello World!');

// Assegno input lunghezza viaggio inserita dall'utente a una variabile
const tripLength = document.getElementById('tripLength');
// Assegno input età inserita dall'utente a una variabile
const userAge = document.getElementById('userAge');
// Assegno prezzo unitario al chilometro
const pricePerKm = 0.2762;

// Assegno html button a una variabile
const button = document.getElementById('buyButton');

// add event listener sulla variabile del button
button.addEventListener('click', function() {
    console.log(`Il prezzo senza sconti è ${parseInt(tripLength.value) * pricePerKm}`);

})