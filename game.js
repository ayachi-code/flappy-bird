var welke;

var button = document.getElementById('speel').addEventListener('click',() => {
  window.location.href = '/game/index.html'
});


var descore = localStorage.getItem("score");

var rscore = document.getElementById('highscore');


rscore.innerHTML = "Jouw recenten score was " + descore;


var vogel_bom = document.getElementById('bomv').addEventListener('click',() => {
  welke = 2;
  localStorage.setItem("welke-vogel",welke)
  console.log(welke);

});
