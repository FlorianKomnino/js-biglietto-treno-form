console.log('Hello World!');

// Assegno input lunghezza viaggio inserita dall'utente a una variabile
const tripLength = document.getElementById('tripLength');
// Assegno input età inserita dall'utente a una variabile
const userAge = document.getElementById('userAge');
// Assegno prezzo unitario al chilometro
const pricePerKm = 0.2762;

// Assegno html button a una variabile
const button = document.getElementById('buyButton');

// add event listener sul click al button
button.addEventListener('click', function() {
    let tripPrice = parseInt(tripLength.value) * pricePerKm;
    console.log(`Il prezzo senza sconti è: ${tripPrice.toFixed(2)}`);
    // *SE userAge è minore di 18
    if (parseInt(userAge.value) < 18) {
        // * prezzo biglietto = prezzo biglietto - 17.5%
        tripPrice = tripPrice - (tripPrice / 100 * 17.5);
    } 
    // *ALTRIMENTI SE userAge è maggiore o uguale a 65
    else if (parseInt(userAge.value) >= 65) {
        // *prezzo biglietto = prezzo biglietto - 33.3%
        tripPrice = tripPrice - (tripPrice / 100 * 33.3);
    }
    // *ALTRIMENTI SE userAge è NaN(not a number)
    else if (isNaN(parseInt(userAge.value))) {
        // *pop up alert
        alert('inserisci un numero. Scellerato!')
    }
    console.log(`Il prezzo finale è: ${tripPrice.toFixed(2)}`);
});