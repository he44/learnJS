var circle = {
	x: 300,
	y: 300,
	diameter: 50
};

var grayscale = 0;

function setup() {
	createCanvas(600, 400);
}

function draw() {
	// background(26, 88, 188);
	grayscale = map(mouseX, 0, 600, 0, 255);
	background(grayscale);
	fill(26, 88, 188);
	noStroke();
	ellipse(mouseX, circle.y, circle.diameter, circle.diameter);
	console.log(mouseX);
}