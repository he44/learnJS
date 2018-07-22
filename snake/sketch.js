let snake;
let board;
var board_width = 600, board_height = 600;
var cell_size = 20;
var grid_col = board_width/cell_size, grid_row = board_height/cell_size;
var filled = [];
const GAME_START = 0;
const GAME_PAUSE = 1;
const GAME_END = 2;
const GAME_PLAY = 3;

function keyPressed(){
	game.listentoUser(keyCode);
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
	switch(game.state){
		case GAME_START:
			game.start();
			break;
		case GAME_END:
			game.end();
			break;
		case GAME_PAUSE:
			game.pause();
			break;
		case GAME_PLAY:
			background(50);
			let res = game.update();
			if (res == -1){game.state = GAME_END;}
			break;
	}
}