var achtergrond;


function preload() {
      achtergrond = loadImage('/game/asset/background.jpg');
}

function setup() {
  createCanvas(400,600);
}

function draw() {
  background(achtergrond);
}
