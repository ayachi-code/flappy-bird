var restart_knop = document.getElementById('restart').addEventListener('click',() => {
  window.location.href = '/'
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
