class Body{
    constructor(x=0, y=0){
        this.x = x;
        this.y = y;
        this.dir = -1;
    }
    show(){
        noStroke();
        fill(255);
        rect(this.x * cell_size, this.y * cell_size, cell_size, cell_size);
    }
}

class Snake{
    constructor(){
        // list of Body objects, representing the body of the snake
        this.bodys = []; 
        // create the head of the snake at random location
        let head_x = parseInt(random(grid_col));
        let head_y = parseInt(random(grid_row));
        let head = new Body(head_x, head_y); 
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
    move(){
        // add one element at the front of the bodys list
        let next_step = new Body();
        next_step.dir = this.head.dir;
        next_step.x = this.head.x + this.xspeed;
        next_step.y = this.head.y + this.yspeed;
        this.bodys.unshift(next_step);
        // remove the last element from the bodys list
        this.bodys.pop()
        // remap head to the front of the bodys list
        this.head = this.bodys[0];
        // if head is out of bound
        if (this.head.x > grid_col || this.head.y > grid_row ||
            this.head.x < 0 || this.head.y < 0){
                console.log("Game Over!");
        }
        // if head is hittng any other parts of the bodys
    }
    //  @TODO:
    eat(board){
        // check if the head gets food
        if(this.head.x == board.food.x && 
           this.head.y == board.food.y){
            // get the last element and push a new cell in the opposite direction
            let last_body = this.bodys[this.bodys.length-1];
            // console.log(last_body.dir);
            switch (last_body.dir){
                case 0: //adding one on the left
                    this.bodys.push(new Body(last_body.x - 1, last_body.y));
                case 1: // adding one on the top
                    this.bodys.push(new Body(last_body.x, last_body.y - 1));
                case 2: // adding one on the right
                    this.bodys.push(new Body(last_body.x + 1, last_body.y));
                case 3: // adding one on the bottom
                    this.bodys.push(new Body(last_body.x, last_body.y + 1));
            }
            board.newFood();
        }
        // console.log(this.bodys.length); 
    }
    show(){
        for (let body of this.bodys){
            body.show();
        }
    }
}