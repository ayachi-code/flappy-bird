function buizen(hoeveel) {
  console.log("buizen zijn geladen ");

  this.buisboven_x = width/2;
  this.buisboven_y = 0;

  this.buisboven_x2 = width/2;
  this.buisboven_y2 = height-120-30;

  this.wave_teller = 0;


  this.wave = document.getElementById('wave');

  this.speed = 0.5;


  //Show buizen
  this.show = function () {
        rect(this.buisboven_x,this.buisboven_y,30,this.g1)
        rect(this.buisboven_x2,this.buisboven_y2,30,this.g2)
  }


  this.update = function() {
      this.buisboven_x -= this.speed;
      this.buisboven_x2 -= this.speed;

      if (this.buisboven_x <= 0 || this.buisboven_x2 <= 0) {
          console.log("Nieuwe buis");
          this.buisboven_x = 400;
          this.buisboven_x2 = 400;

          this.g1 = random(120,300);
          this.g2 = random(120,234);

          this.wave_teller += 1;


          this.wave.innerHTML = "Wave " + this.wave_teller;


          this.speed += 0.5

          console.log(this.wave_teller);

          console.log(this.speed);



      }


  }




}
