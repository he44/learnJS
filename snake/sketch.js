let snake;
let board;
var board_width = 600, board_height = 600;
var cell_size = 20;
var grid_col = board_width/cell_size, grid_row = board_height/cell_size;
//  @TODO: make sure new food does not fall on snake body 
var hashtable = {};


function keyPressed(){
	if (keyCode === DOWN_ARROW){
		snake.changeDir(1);
	} else if (keyCode === UP_ARROW){
		snake.changeDir(3);
	} else if (keyCode === LEFT_ARROW){
		snake.changeDir(2);
	} else if (keyCode === RIGHT_ARROW){
		snake.changeDir(0);
	}
}


function setup() {
	createCanvas(board_width, board_height);
	frameRate(5);
	snake = new Snake();
	board = new Board();
}

function draw() {
	background(50);
	snake.move();
	snake.eat(board);
	snake.show();
	board.show();
}