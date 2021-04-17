class Hero {
  constructor(x,y,w,h)
	{
		var options = { 
			density: 1, 
			frictionAir: 1
		};
		this.w = w

		this.h=h;
		this.image=loadImage("Images/Batman (1).png");
		this.body=Bodies.rectangle(x,y,w,h, options);
		World.add(world, this.body);
		console.log(this.body);
	}
	
	display()
	{
			
			var heroPos=this.body.position;		
			push()
			translate(heroPos.x, heroPos.y);
			imageMode(CENTER);
			image(this.image, 0,0,this.w, this.h)
			pop()
			
	}
}
