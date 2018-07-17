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
        this.board = new Board();
        this.snake = new Snake();
        this.state = 0;
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
        }
        // } else if (key === ESC){
        //     //@TODO: check doc about escape keycode
        // }
    }
    // handles snake moving in direction, eating fruit, chcking boundaries and conflicts
    update(){
        this.snake.move(this.filled);
        this.snake.eat(this.board, this.filled);
        this.show();
    }
    // draw the game (snake and baord) properly
    show(){
        this.board.show();
        this.snake.show();
    }
}