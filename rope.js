class rope{
    constructor(body1,point){
        var opt = {
            bodyA:body1,
            pointB:point,
            stiffness: 0.04,
            length:200
        }
        this.rope = Constraint.create(opt);
        World.add(world,this.rope);
    }
    display(){
        var pos1 = this.rope.bodyA.position;
        var pos2 = this.rope.pointB;
        strokeWeight(5);
        stroke("green");
        
        line(pos1.x,pos1.y-25,pos2.x,pos2.y);
        
    }
}