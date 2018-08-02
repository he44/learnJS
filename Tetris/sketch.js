var board_width = 600, board_height = 600;
var cell_size = 20;
var grid_col = board_width/cell_size, grid_row = board_height/cell_size;
const GAME_START = 0;
const GAME_PAUSE = 1;
const GAME_END = 2;
const GAME_PLAY = 3;

function setup() {
	createCanvas(board_width, board_height);
}

function draw() {
	background(50);
}