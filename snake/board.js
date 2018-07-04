class Board{
    constructor(){
        this.food = createVector(parseInt(random(grid_col)), parseInt(random(grid_row)));
    }
    show(){
        noStroke();
        fill(255, 100, 0);
        rect(this.food.x * cell_size, this.food.y * cell_size, cell_size, cell_size);
    }
    //  @TODO: make sure new food does not fall on snake body 
    newFood(){
        this.food.x = parseInt(random(grid_col));
        this.food.y = parseInt(random(grid_row));
    }
}