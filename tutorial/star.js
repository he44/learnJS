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