class box {
  constructor(x,y){
    var opt= {
        restitution:0.3,
        friction:1.2,
        density:1.0
    }
    this.body=Bodies.rectangle(x,y,50,50,opt);
    World.add(world,this.body);
  }  
  display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      stroke("green");
      fill("yellow");
      rectMode(CENTER);
      rect(0,0,50,50);
      pop();
  }
}
