var button = document.getElementById('speel').addEventListener('click',() => {
  window.location.href = '/game/index.html'
});


var descore = localStorage.getItem("score");

var rscore = document.getElementById('highscore');


rscore.innerHTML = "Jouw recenten score was " + descore;
