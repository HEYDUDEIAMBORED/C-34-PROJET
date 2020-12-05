class Chains{
    constructor(bodyA, pointB){
        
        var options = {
            
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 400
        }
        this.Sling = Constraint.create(options);
        this.pointB=pointB
        World.add(world, this.Sling);
    }

    display(){
        
        
        var pointA = this.Sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke("green")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }


}