class Snow2{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
		    restitution:0.5,
            friction :1
			}
		this.x=x;
		this.y=y;
		this.r=2
		//this.image=loadImage("snow4.webp")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
		this.image = loadImage("snow5.webp");

	}

	update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,800),y: random(0,400)});
        }
    }

	display()
	{
		//var mangoPos=this.body.position;	
		//push()
		//translate(snowa.x, snowa.y);
		// rectMode(CENTER);
		//rotate(this.body.angle)
		//fill(255,0,255)
		imageMode(CENTER);
		//ellipseMode(CENTER);
		image(this.image, this.body.position.x,this.body.position.y,40,40)
		//pop()
 }
}