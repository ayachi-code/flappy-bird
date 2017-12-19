var restart_knop = document.getElementById('restart').addEventListener('click',() => {
  window.location.href = 'index.html/'
})


var config = {
  apiKey: "AIzaSyAQB5Ad30sgyUUjlXoEt7pZuEfwTXupGAY",
  authDomain: "flappy-bird-e8e40.firebaseapp.com",
  databaseURL: "https://flappy-bird-e8e40.firebaseio.com",
  projectId: "flappy-bird-e8e40",
  storageBucket: "",
  messagingSenderId: "527469947954"
};
firebase.initializeApp(config);




var score = localStorage.getItem("score")

var data = {
  score: score,
  naam: "bilal"
}


var ik_kan_geen_variable_verzinnen_voor_het_pakken_van_de_score = document.getElementById('naam').innerHTML = "Game over jouw score was " + score;

var database = firebase.database();

database.ref('scoren').push(data);
