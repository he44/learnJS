// width and height are reserved
let var_width = 600, var_height = 400;

let stars = [];
let pics = [];

function preload(){
	// for (let i = 0; i < 6; i++){
	// 	pics[i] = loadImage('editor_icon' + (i+1) + '.png');
	// }
	for (let i = 0; i < 6; i++){
		pics[i] = loadImage(`editor_icon${i+1}.png`);
	}
}

function setup() {
	createCanvas(var_width, var_height);
	// let num = random(20, 40);
	for (let i = 0; i < 10; i++){
		stars[i] = new star(random(40,60));
	}
}

function draw() {
	background(0);
	for (let i = 0; i < stars.length; i++){
		let overlap = false;
		for (let j = i+1; j < stars.length; j++){
			if (stars[i].overlap(stars[j])){
				overlap = true;
				break;
			}
		}
		// overlap = stars[i].overlap(unicorn);
		if(overlap){stars[i].goGrayscale(255);}
		else{stars[i].goGrayscale(0);}
	}
	for (let star of stars) {
		star.display();
		star.blink();
	}
}

function mousePressed(){
	for (let star of stars){
		star.clicked(mouseX, mouseY);
	}
}

class star {
	constructor(radius){
		this.x = Math.random() * var_width;
		this.y = Math.random() * var_height;
		this.size = radius;
		this.pic = random(pics);
		this.color = 0;
	}
	blink(){
		this.x += random(-5,5);
		this.y += random(-5,5);
	}
	goGrayscale(color){
		this.color = color;
	}
	goRandomColor(){
		this.color = color(random(0,255), random(0,255), random(0,255));
	}
	inbound(x, y){
		return(dist(x, y, this.x, this.y) < this.size);
	}
	overlap(other){
		let d = dist(this.x, this.y, other.x, other.y);
		return (d < (this.size + other.size)/2);
	}
	goEmacs(){
		this.pic = pics[4];
	}
	clicked(x, y){
		if (x > this.x && x < this.x + this.size && y > this.y && y < this.y + this.size){
			this.goEmacs();
		}
	}
	display(){
		image(this.pic, this.x, this.y, this.size, this.size);
	}
}
