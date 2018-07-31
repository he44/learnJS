/*  ideal calling

function setup(){
    // create a game object
}

function draw(){
    game.update();
    game.display();
}
*/

/*
@TODO:
1.) check that game.filled[] is being properly updated, kinda confused right now
Q: did I update the filled[] after a new cell is added to the snake body?
2.) Wierd issue when you try to do a two line snake at the boundary
    * * * * _ _ _ _
    * * * * _ _ _ _
    the head is the top left corner
    There is a memory error here.
    Failed to recreate the problem
*/

class Game{
    constructor(){
        this.board = new Board(); // food location
        this.snake = new Snake(); // snake body
        this.state = GAME_START;
        // Arrays to avoid collision in location
        this.filled = [];
        for (let row = 0; row < grid_row; row++){
            this.filled[row] = [];
            for (let col = 0; col < grid_col; col++){
                this.filled[row][col] = false;
            }
        }
        // mark head as occupied
        this.filled[this.snake.head.x][this.snake.head.y] = true;
    }
    // handles changing direction, pause, quit
    listentoUser(key){
        if (key === DOWN_ARROW){
            this.snake.changeDir(1);
        } else if (key === UP_ARROW){
            this.snake.changeDir(3);
        } else if (key === LEFT_ARROW){
            this.snake.changeDir(2);
        } else if (key === RIGHT_ARROW){
            this.snake.changeDir(0);
        } else if (key === ESCAPE){
            this.state = GAME_PAUSE;
        } else if (key === ENTER){
            if (this.state === GAME_START){
                this.state = GAME_PLAY;
            } else if (this.state === GAME_PAUSE){
                this.state = GAME_PLAY;
            } else if (this.state === GAME_END){
                this.restart();
                this.state = GAME_PLAY;
            }
        }
    }
    // handles snake moving in direction, eating fruit, chcking boundaries and conflicts
    update(){
        let snake_state = this.snake.move(this.filled);
        this.snake.eat(this.board, this.filled);
        this.show();
        return snake_state;
    }
    // draw the game (snake and baord) properly
    show(){
        this.board.show();
        this.snake.show();
    }
    restart(){
        this.board = new Board(); // food location
        this.snake = new Snake(); // snake body
        // Arrays to avoid collision in location
        for (let row = 0; row < grid_row; row++){
            this.filled[row] = [];
            for (let col = 0; col < grid_col; col++){
                this.filled[row][col] = false;
            }
        }
        // mark head as occupied
        this.filled[this.snake.head.x][this.snake.head.y] = true;
    }
    pause(){
        textSize(40);
        let str = 'Press Enter to Resume';
        let str_width = textWidth(str);
        let start_x = (board_width - str_width)/2;
        fill(0, 102, 153);
        text(str, start_x, 300);
        // textSize(40);
        // let str = 'Press Enter to Resume';
        // let str_width = textWidth(str);
        // fill(0, 102, 153);
        // text(str, (board_width - str_width)/2, 250);
    }
    start(){
        background(50);
        textSize(40);
        let str = 'Press Enter to Start';
        // let str_height = textAscent(str) + textDescent(str);
        let str_width = textWidth(str);
        // noStroke();
        // fill(0);
        // rect(100, 250, 400, 100);
        fill(0, 102, 153);
        text(str, (board_width - str_width)/2, 250);
    }
    end(){
        // we want to keep the "ending screenshot" on the canvas --> no erasing
        textSize(40);
        let str1 = 'Game Over!'
        let str2 = 'Press Enter to Restart!';
        let str1_width = textWidth(str1);
        let str2_width = textWidth(str2);
        let start1_x = (board_width - str1_width)/2;
        let start2_x = (board_width - str2_width)/2;
        fill(0, 102, 153);
        text(str1, start1_x, 275);
        text(str2, start2_x, 325);
    }
}