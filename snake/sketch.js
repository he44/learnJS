let snake;
let board;
var board_width = 600, board_height = 600;
var cell_size = 20;
var grid_col = board_width/cell_size, grid_row = board_height/cell_size;
var filled = [];
var state = 0;

function keyPressed(){
	game.listentoUser(keyCode);
	// if (keyCode === DOWN_ARROW){
	// 	snake.changeDir(1);
	// } else if (keyCode === UP_ARROW){
	// 	snake.changeDir(3);
	// } else if (keyCode === LEFT_ARROW){
	// 	snake.changeDir(2);
	// } else if (keyCode === RIGHT_ARROW){
	// 	snake.changeDir(0);
	// }
	
}


function setup() {
	createCanvas(board_width, board_height);
	frameRate(5);
	game = new Game();
	game.filled[game.snake.head.x][game.snake.head.y] = true;
	while(game.filled[game.board.food.x][game.board.food.y] == true){
		game.borad = new Board();
	}
}

function draw() {
	background(50);
	// @TODO: we have to check the value here in every draw() function
	game.update();
}