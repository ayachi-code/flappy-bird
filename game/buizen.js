function buizen(hoeveel) {
  console.log("buizen zijn geladen ");





  this.buisboven_x = width/2;
  this.buisboven_y = 0;

  this.buisboven_x2 = width/2;
  this.buisboven_y2 = height-120-30;

  this.wave_teller = 0;


  this.wave = document.getElementById('wave');

  this.speed = 2.0;

  this.count = 0;
  this.score = document.getElementById('score')


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


          this.speed += 0.5;

          console.log(this.wave_teller);

          console.log(this.speed);

          if (this.wave_teller % 20 === 0) {
            console.log("laager");
              this.speed -= 1;
          }

          if (vogel.y > this.g1 || vogel.y < this.g2) {
              this.count += 1;
              localStorage.setItem('score', this.count);
              score.innerHTML = "score " + this.count;
          }



      }


  }


  this.gameover = function () {
        console.log("Jammer");
        window.location.href = 'gameover/index.html';

  }


//Als vogel buis raakt dan game over
  this.raak = function () {
    if (vogel.y > height - this.g2 || vogel.y < this.g1) {
        if (vogel.x < this.buisboven_x2 + 30 && vogel.x > this.buisboven_x) {
              return true;
        }

    }

  }




}
