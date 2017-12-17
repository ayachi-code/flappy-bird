function buizen() {
  console.log("buizen zijn geladen ");

  this.buisboven_x = width/2;
  this.buisboven_y = 0;

  this.buisboven_x2 = width/2;
  this.buisboven_y2 = height-120-30;



  this.show = function () {
        rect(this.buisboven_x,this.buisboven_y,30,120)
        rect(this.buisboven_x2,this.buisboven_y2,30,120)
  }

  




}
