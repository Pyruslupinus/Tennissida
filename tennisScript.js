//Funktion för att öppna/stänga mobilmeny
function toggleMobileMenu (mobileMenu) {
    mobileMenu.classList.toggle('open');
}

//Kontrollera datum i input
//Ta reda på dagens datum och sätt det som minsta input-värde i formulärerna
let today = new Date;
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();
let maxMm = today.getMonth() +1;

if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10){
    mm = '0' + mm;
}

today = yyyy + '-' + mm + '-' + dd;
document.getElementById("datum").setAttribute("min", today);

//Räknar ut maxvärdet på datum, två månader från idag
if (maxMm < 11) {
    maxMm= maxMm +2;
}
else if (maxMm == 11){
    yyyy = yyyy + 1;
    maxMm = 1;
}
else {
    yyyy = yyyy+1;
    maxMm = 2;
}

if (maxMm < 10) {
    maxMm = '0' + maxMm
}
let maxDate = yyyy + '-'+ maxMm + '-' + dd;
document.getElementById("datum").setAttribute("max", maxDate);
