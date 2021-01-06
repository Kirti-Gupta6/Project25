class Dustbin {
    constructor(x, y) {
      var options = {
        isStatic:true,
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 200, 20, options);
      this.side1 = Bodies.rectangle(x-100, y-50, 20,120, options);
      this.side2 = Bodies.rectangle(x+100, y-50, 20, 120, options);
      World.add(world, this.body);
      World.add(world, this.side1);
      World.add(world, this.side2);
      
    }
    display(){
      var pos =this.body.position;
      var pos1 = this.side1.position;
      var pos2 = this.side2.position;
      push();
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y, 200,20);
      rect(pos1.x,pos1.y,20,120);
      rect(pos2.x,pos2.y,20,120);
      pop();
    }
  }