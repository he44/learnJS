class Body{
    constructor(x=0, y=0){
        this.x = x;
        this.y = y;
        this.dir = -1;
    }
    show(){
        noStroke();
        fill(255);
        rect(this.x * cell_size, this.y * cell_size, cell_size*9/10, cell_size*9/10);
    }
}

class Snake{
    constructor(){
        // list of Body objects, representing the body of the snake
        this.bodys = []; 
        // create the head of the snake at random location
        let head = new Body(10, 10); 
        this.bodys.push(head);
        this.head = head;
        // snake stays at starting point without user input
        this.xspeed = 0;
        this.yspeed = 0;
    }
    changeDir(dir){
        // snake cannot move in the opposite direction of head (0-right, 1-down, 2-left, 3-up)
        if (this.head.dir == -1 || (this.head.dir + dir)% 2 == 1){
            this.head.dir = dir;
            if(dir == 1){
                this.yspeed = 1;
                this.xspeed = 0;
            } else if(dir == 3){
                this.yspeed = -1;
                this.xspeed = 0;
            } else if(dir == 2){
                this.xspeed = -1;
                this.yspeed = 0;
            } else if(dir == 0){
                this.xspeed = 1;
                this.yspeed = 0;
            }
        }
    }
    move(filled){
        // add one element at the front of the bodys list
        let next_step = new Body();
        next_step.dir = this.head.dir;
        next_step.x = this.head.x + this.xspeed;
        next_step.y = this.head.y + this.yspeed;
        this.bodys.unshift(next_step);
        // if head is out of bound, should go into ending page
        if (next_step.x >= grid_col || next_step.y >= grid_row ||
            next_step.x < 0 || next_step.y < 0){
                return -1;
        }
        // Note: 
        // 1.) we don't need to distinguish between snake body and food,
        // because food location is never marked as occupied
        // 2.) the snake speed will be both 0 when the game just started,
        // that way the filled[] always gives true since the snake is not
        // moving. We want to check that.
        // 3.) we need to rule out the situation where user starts the game
        // but hasn't givenn any instructions yet. In that case, the next_step
        // will always be the same as current location
        if ((this.xspeed+this.yspeed) != 0 && filled[next_step.x][next_step.y] == true){
            // console.log("Here");
            return -1;
        }
        filled[next_step.x][next_step.y] = true;
        // remove the last element from the bodys list
        let discarded = this.bodys.pop()
        filled[discarded.x][discarded.y] = false;
        // remap head to the front of the bodys list
        this.head = this.bodys[0];
        return 0;
    }
    eat(board, filled){
        // check if the head gets food
        if(this.head.x == board.food.x && 
           this.head.y == board.food.y){
            // get the last element and push a new cell in the opposite direction
            let last_body = this.bodys[this.bodys.length-1];
            console.log(this.bodys);
            switch (last_body.dir){
                case 0: //adding one on the left
                    this.bodys.push(new Body(last_body.x - 1, last_body.y));
                    break;
                case 1: // adding one on the top
                    this.bodys.push(new Body(last_body.x, last_body.y - 1));
                    break;
                case 2: // adding one on the right
                    this.bodys.push(new Body(last_body.x + 1, last_body.y));
                    break;
                case 3: // adding one on the bottom
                    this.bodys.push(new Body(last_body.x, last_body.y + 1));
                    break;
            }
            board.newFood(filled);
        }
    }
    show(){
        for (let body of this.bodys){
            body.show();
        }
    }
}