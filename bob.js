class Bob { 
    constructor(x, y,r){
        this.radius=r
        this.x=x
        this.y=y
        var options = { isStatic:false,restitution:0.3, friction:0.5, density:1.2 } 
        this.body = Bodies.circle(x, y,this.radius/2, options); 
        World.add(world, this.body); }
        display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        //rotate(angle)
        ellipseMode(CENTER)
        fill("blue")
        stroke("blue")
        strokeWeight(3)
        ellipse(0,0,this.radius,this.radius)
        pop()
        }
    }