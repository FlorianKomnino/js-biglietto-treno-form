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
    let tripPrice = parseInt(tripLength.value) * pricePerKm;
    console.log(`Il prezzo senza sconti è: ${tripPrice.toFixed(2)}`);
    if (parseInt(userAge.value) < 18) {
        tripPrice = tripPrice - (tripPrice / 100 * 17.5);
    } else if (parseInt(userAge.value) >= 65) {
        tripPrice = tripPrice - (tripPrice / 100 * 33.3);
    }
    console.log(`Il prezzo finale è: ${tripPrice.toFixed(2)}`);
});