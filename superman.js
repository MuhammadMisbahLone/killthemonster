class Superman {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
    ;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("sprites/superman.png");
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      
    }
    display(){
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      var pos =this.body.position;
      imageMode(CENTER);
      fill("white");
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };
  