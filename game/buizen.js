function buizen() {
  console.log("buizen zijn geladen ");

  this.buisboven_x = width/2;
  this.buisboven_y = 0;

  this.buisboven_x2 = width/2;
  this.buisboven_y2 = height-120-30;

  this.speed = 3;



  this.show = function () {
        rect(this.buisboven_x,this.buisboven_y,30,this.g1)
        rect(this.buisboven_x2,this.buisboven_y2,30,120)
  }

  this.update = function() {
      this.buisboven_x -= this.speed;
      this.buisboven_x2 -= this.speed;

      if (this.buisboven_x <= 0 || this.buisboven_x2 <= 0) {
          console.log("Nieuwe buis");
          this.buisboven_x = 400;
          this.buisboven_x2 = 400;

          this.g1 = random(200);



      }

  }




}
