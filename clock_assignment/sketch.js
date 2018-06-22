let clock;
let cobalt_blue, light_yellow, vibrant_orange;
let pink, green, purple, silver;

function setup() {
	// createCanvas(windowWidth, windowHeight);
	createCanvas(600,400);
	cobalt_blue = color(0, 71, 171);
	light_yellow = color(255,255,0);
	vibrant_orange = color(255,165,0);
	pink = color(255,100,150);
	green = color(150,255,100);
	purple = color(150,100,255);
	silver = color(192,192,192);
	clock = new Clock();
}

function draw() {
	background(50);
	clock.getCurrentTime();
	// clock.hour = 18;
	// clock.displayTimeAsText();
	clock.displayTimeAsCircle();
}