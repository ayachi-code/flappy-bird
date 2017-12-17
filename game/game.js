var achtergrond;
var vogel;


function preload() {
      achtergrond = loadImage('/game/asset/background.jpg');
}

function setup() {
  createCanvas(400,600);
  vogel = new vogel()

}

function draw() {
  background(achtergrond);


  ellipse(88,300,30,30)



}
