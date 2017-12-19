var welke;

var button = document.getElementById('speel').addEventListener('click',() => {
  window.location.href = 'game/index.html'
});


var descore = localStorage.getItem("score");

var rscore = document.getElementById('highscore');

var huidig = document.getElementById('huidig');

var welke_vogela = localStorage.getItem("welke-vogel");

rscore.innerHTML = "Jouw recenten score was " + descore;


var vogel_bom = document.getElementById('bomv').addEventListener('click',() => {
  welke = 2;
  localStorage.setItem("welke-vogel",welke)
  huidig.innerHTML = "Je gebruikt nu de bom vogel";
  console.log(welke);

});

//Als flappy word ingeklikt
var vogel_flappy = document.getElementById('flappy').addEventListener('click',() => {
      welke = 1;
      localStorage.setItem("welke-vogel",welke)
      huidig.innerHTML = "Je gebruikt nu de klasieken vogel";
      console.log(welke);
});



if (welke_vogela == 1) {
    huidig.innerHTML = "Je gebruikt nu de klasieken vogel";
} else if (welke_vogela == 2) {
    huidig.innerHTML = "Je gebruikt nu de bom vogel";
}
