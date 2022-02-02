class Dustbin{
    constructor(x, y){
        var options={
            'isStatic': true,
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        }
        this.leftBody = Bodies.rectangle(x-60, y-60-10-50, 20, 100, options);
        this.rightBody = Bodies.rectangle(x+100-40, y-60-10-50, 20, 100, options);
        this.centerBody = Bodies.rectangle(x, y-60, 100, 20, options);
        this.image = loadImage("dustbingreen.png");
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
        World.add(world, this.centerBody);
    }
    display(){
        push();
        rectMode(CENTER);
        fill(255);
        imageMode(CENTER);
        image(this.image, this.centerBody.position.x, this.centerBody.position.y-50, 100, 100);
        rect(this.centerBody.position.x, this.centerBody.position.y, 100, 20);
        rect(this.leftBody.position.x, this.leftBody.position.y, 20, 100);
        rect(this.rightBody.position.x, this.rightBody.position.y, 20, 100);
        pop();
    }
};