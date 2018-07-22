class Board{
    constructor(){
        this.food = createVector(parseInt(random(grid_col)), parseInt(random(grid_row)));
    }
    show(){
        noStroke();
        fill(255, 100, 0);
        rect(this.food.x * cell_size, this.food.y * cell_size, cell_size, cell_size);
    }
    newFood(filled){
        // new food piece won't fall on snake body
        while (filled[this.food.x][this.food.y]){
            this.food.x = parseInt(random(grid_col));
            this.food.y = parseInt(random(grid_row));
        }
        // Note: we don't want to mark the "food" as an occupied space
        // because the snake head and the food can be on one tile 
    }
}