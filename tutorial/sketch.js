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


