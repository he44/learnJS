let snake;
let board;
var board_width = 600, board_height = 600;
var cell_size = 20;
var grid_col = board_width/cell_size, grid_row = board_height/cell_size;
var filled = [];
var state = 0;

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
	// Array to avoid collision in location
	for (let row = 0; row < grid_row; row++){
		filled[row] = [];
		for (let col = 0; col < grid_col; col++){
			filled[row][col] = false;
		}
	}
	// snake and game board
	snake = new Snake();
	filled[snake.head.x][snake.head.y] = true;
	board = new Board();
	while(filled[board.food.x][board.food.y] == true){
		borad = new Board();
	}
}

function draw() {
	background(50);
	state = snake.move();
	// @TODO: we have to check the value here in every draw() function
	if(state == 0){
		console.log(state);
		return;
	}
	snake.eat(board);
	snake.show();
	board.show();
}