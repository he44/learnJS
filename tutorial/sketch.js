var ball = {
	x: 0,
	y: 0,
	xspeed: 2,
	yspeed: 2,
	size: 24
}

let class_ball;


class Ball {
	constructor(){
		this.x = Math.random() * var_width;
		this.y = Math.random() * var_height;
		this.xspeed = 2;
		this.yspeed = 2;
		this.size = 24;
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
		ellipse(this.x, this.y, this.size, this.size);
	}
}

// width and height are reserved
var var_width = 600, var_height = 400;
var claycolor = {
	r: 166, 
	g: 61, 
	b: 47
};

function setup() {
	createCanvas(var_width, var_height);
	class_ball = new Ball();
	placeBall();
}

function draw() {
	background(claycolor.r, claycolor.g, claycolor.b);
	class_ball.move();
	class_ball.bounce();
	class_ball.display();
	move();
	bounce();
	display();
}

function placeBall()
{
	ball.x = Math.random() * var_width;
	ball.y = Math.random() * var_height;
}

function move()
{
	ball.x += ball.xspeed;
	ball.y += ball.yspeed;
}

function bounce()
{
	if (ball.x + ball.size/2 > var_width || ball.x - ball.size/2 < 0){
		ball.xspeed = -ball.xspeed;
	}
	if (ball.y + ball.size/2 > var_height || ball.y - ball.size/2 < 0){
		ball.yspeed = -ball.yspeed;
	}
}

function display()
{
	noStroke();
	fill(255, 200, 0);
	ellipse(ball.x, ball.y, ball.size, ball.size);
}