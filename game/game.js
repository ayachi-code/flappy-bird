var achtergrond;
var vogel;
var grond;
var begin = false;




function preload() {
      achtergrond = loadImage('/game/asset/background.jpg');
}

function setup() {
  createCanvas(400,600);
  vogel = new vogel();
  grond = new grond();

}

function draw() {
  background(achtergrond);
  grond.show();
  vogel.show()
  if (begin == true) {
      vogel.update();
  }





}

function keyPressed() {
    if (key == ' ') {
      begin = true
      console.log(begin);
      vogel.up();
    }
}
