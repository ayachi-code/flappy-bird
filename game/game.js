var achtergrond;
var vogel;
var grond;
var buizen;
var buizen2;
var begin = false;




function preload() {
      achtergrond = loadImage('asset/background.jpg');
}

function setup() {
  createCanvas(400,600);
  vogel = new vogel();
  grond = new grond();
  buizen = new buizen();



}

function draw() {
  background(achtergrond);
  grond.show();
  vogel.show()
  if (begin == true) {
      vogel.update();
      buizen.show();
      buizen.update();

      if (buizen.raak()) {
        buizen.gameover();
      }


  }




}

function keyPressed() {
    if (key == ' ' || key == "W") {
      begin = true
      console.log(begin);
      vogel.up();
      var geluid_af = new Audio('asset/geluid/sound.mp3');
      geluid_af.play();
    }
}
