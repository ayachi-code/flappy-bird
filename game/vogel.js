function vogel() {

    this.welke = localStorage.getItem("welke-vogel")


    if (this.welke == 2) {
      this.vogel_image = loadImage('/vogels/bom.png');
    } else if (this.welke == 1) {
      this.vogel_image = loadImage('/game/asset/vogel.png');
    }





    this.x = 90;
    this.y = height/2;

    this.gravity = 1.1;
    this.lift = -25;
    this.velocity = 0;

    this.show = function(){
        image(this.vogel_image,this.x,this.y,60,60);
    }

    this.up = function(){
        this.velocity += this.lift;
    }

    this.update = function(){
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;

        if (this.y > height){
            this.y = height;
            this.velocity = 0;
        } else if (this.y > grond.y) {
              console.log("git");
        }





    }


}
