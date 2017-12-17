function grond() {
  console.log("grond is geladen");

  this.x = 0;
  this.y = 570;


  this.show = function() {
        rect(this.x,this.y,30,30);
  }


}
