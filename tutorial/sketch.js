// width and height are reserved
let var_width = 600, var_height = 400;
let claycolor = {
	r: 166, 
	g: 61, 
	b: 47
};

let big_ball, small_ball;

class Ball {
	constructor(radius){
		this.x = Math.random() * var_width;
		this.y = Math.random() * var_height;
		this.xspeed = 2;
		this.yspeed = 2;
		this.size = radius;
	}
	move(){
		this.x += this.xspeed;
		this.y += this.yspeed;
	}
	bounce(){
		if (this.x + this.size/2 > var_width || this.x - this.size/2 < 0){
			this.xspeed = -this.xspeed;
		}
		if (this.y + this.size/2 > var_height || this.y - this.size/2 < 0){
			this.yspeed = -this.yspeed;
		}
	}
	display(){
		noStroke();
		fill(40, 200, 0);
		ellipse(this.x, this.y, this.size);
	}
}

function setup() {
	createCanvas(var_width, var_height);
	big_ball = new Ball(40);
	small_ball = new Ball(24);
}

function draw() {
	background(claycolor.r, claycolor.g, claycolor.b);
	big_ball.move();
	small_ball.move();
	big_ball.bounce();
	small_ball.bounce();
	big_ball.display();
	small_ball.display();
}
