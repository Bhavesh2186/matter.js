class ball {
    constructor(x,y){
      var opt= {
          restitution:0.3,
          friction:1.2,
          density:1.0
      }
      this.body=Bodies.circle(x,y,70,opt);
      World.add(world,this.body);
    }  
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        //stroke("green");
        fill("red");
        ellipseMode(CENTER);
        ellipse(0,0,70,70);
        pop();
    }
  }