alert('Maak uw keuze uit de formaten pizzas');

var Small = prompt('Hoeveel small pizzas');
var Medium = prompt('Hoeveel medium pizzas');
var Large = prompt('Hoeveel large pizzas');

//Vraagt hoeveel pizzas
document.write('<br>Small : ' + Small);
document.write('<br>Medium : ' + Medium);
document.write('<br>Large : ' + Large);

//Prijs pizzas
const PriceSmall = 2;
const PriceMedium = 4;
const PriceLarge = 5;

var BetaaldSmall = Small * PriceSmall;
var BetaaldMedium = Medium * PriceMedium;
var BetaaldLarge = Large * PriceLarge;

//Berekening pizzas
document.write('<br> Prijs small pizza: €' + BetaaldSmall);
document.write('<br> Prijs medium pizza: €' + BetaaldMedium);
document.write('<br> Prijs large pizza: €' + BetaaldLarge);

//Berekening totaalbedrag
var Totaalbedrag = BetaaldSmall + BetaaldMedium + BetaaldLarge;

document.write('<br> Totaalbedrag: €' + Totaalbedrag);