class Mango{
    constructor(x, y, radius ) {
        var options = {
            isStatic:true,
            'restitution':0,
            'friction':1
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.image=loadImage("mango.png")
        World.add(world, this.body);
      }
      display(){
        push();
        //translate(this.body.position.x, this.body.position.y);
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x, pos.y, this.radius*2, this.radius*2);
       pop();
      }
}
