function grond() {
  console.log("grond is geladen");

  this.x = 0;
  this.y = 570;

  this.grond = loadImage('asset/ground.png');


  this.show = function() {
        fill(0,200,0)
        image(this.grond,this.x,this.y,400,400);
  }


}
