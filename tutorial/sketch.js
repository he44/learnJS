var ball = {
	x: 0,
	y: 0,
	xspeed: 2,
	yspeed: 2,
	size: 24
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
	placeBall();
}

function draw() {
	background(claycolor.r, claycolor.g, claycolor.b);
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
	fill(40, 200, 0);
	ellipse(ball.x, ball.y, ball.size, ball.size);
}