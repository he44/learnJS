/*  ideal calling

function setup(){
    // create a game object
}

function draw(){
    game.update();
    game.display();
}
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
            this.pause();
        } else if (key === ENTER){
            if (this.state === GAME_START){
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
    pause(){
        background(50);         
        while(true){}
    }
    start(){
		background(50);
        textSize(40);
        let str = 'Press Enter to Start';
        // let str_height = textAscent(str) + textDescent(str);
        // let str_width = textWidth(str);
        // noStroke();
        // fill(0);
        // rect(100, 250, 400, 100);
        fill(0, 102, 153);
        text(str, 100, 250);
    }
    end(){
        textSize(40);
        let str = 'Game Over!';
        let str_width = textWidth(str);
        let start_x = (board_width - str_width)/2;
        fill(0, 102, 153);
        text(str, start_x, 300);
    }
}