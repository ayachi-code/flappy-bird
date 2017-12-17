function grond() {
  console.log("grond is geladen");

  this.x = 0;
  this.y = 570;


  this.show = function() {
        fill(0,200,0)
        rect(this.x,this.y,400,400);
  }


}
