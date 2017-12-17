var achtergrond;
var vogel;
var grond;



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
  vogel.update();




}

function keyPressed() {
    if (key == ' ') {
      vogel.up();
    }
}
