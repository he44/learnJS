var circle = {
	x: 300,
	y: 300,
	diameter: 50
};

var grayscale = 0;

function setup() {
	createCanvas(600, 600);
}

function draw() {
	// background(26, 88, 188);
	grayscale = map(mouseY, 0, 600, 0, 255);
	/*
		grayscale <--> mouseX: proportional
	*/
	background(grayscale);
	fill(26, 88, 188);
	noStroke();
	ellipse(mouseX, mouseY, circle.diameter, circle.diameter);
	// background(grayscale);
	console.log(mouseX);
	console.log(typeof(mouseX));
}

// text editor
