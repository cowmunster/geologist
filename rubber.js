class Rubber{
    constructor(x,y,r){
        var options = {
            restitution:0.3,
            friction:5,
            desity:1
        }
    this.r = r
    this.body = Bodies.circle(x,y,r,options)
    World.add(world,this.body)
    }
    display(){
    var pos = this.body.position
    fill("darkblue")
    ellipse(pos.x,pos.y,this.r,this.r)
    
    }
    }