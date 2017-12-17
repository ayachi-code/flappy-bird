function grond() {
  console.log("grond is geladen");

  this.x = 0;
  this.y = 0;


  this.show = function() {
        rect(this.x,this.y,30,30);
  }


}
