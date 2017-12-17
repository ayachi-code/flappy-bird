function vogel() {


  this.vogel_image = loadImage('/game/asset/vogel.png');


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
        }



    }


}
