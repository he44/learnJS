// width and height are reserved
let var_width = 600, var_height = 400;

let stars = [];


function setup() {
	createCanvas(var_width, var_height);
	// let num = random(20, 40);
	let num = 10;
	for (let i = 0; i < num; i++){
		stars[i] = new star(random(20,40));
	}
}

function draw() {
	background(0);
	for (let star of stars) {
		// star.blink();
		if(star.inbound(mouseX, mouseY)){star.changeColor();}
		star.display();
	}
}

// adding a new star to the array every time the mouse is clicked
function mousePressed(){
	for (let i = stars.length-1; i >= 0; i--){
		if(stars[i].inbound(mouseX, mouseY)){
			stars.splice(i,1);
		}
	}
}



class star {
	constructor(radius){
		this.x = Math.random() * var_width;
		this.y = Math.random() * var_height;
		this.size = radius;
		this.color = color(255, 100, 100);
	}
	blink(){
		this.x += random(-5,5);
		this.y += random(-5,5);
	}
	changeColor(){
		this.color = color(random(0,255), random(0,255), random(0,255));
	}
	inbound(x, y){
		return(dist(x, y, this.x, this.y) < this.size/2);
	}
	display(){
		stroke(255);
		strokeWeight(2);
		fill(this.color)
		ellipse(this.x, this.y, this.size);
	}
}