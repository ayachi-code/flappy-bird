var achtergrond;
var vogel;
var grond;



function preload() {
      achtergrond = loadImage('/game/asset/background.jpg');
}

function setup() {
  createCanvas(400,600);
  vogel = new vogel();

}

function draw() {
  background(achtergrond);
  vogel.show()
  vogel.update();




}

function keyPressed() {
    if (key == ' ') {
      vogel.up();
    }
}
