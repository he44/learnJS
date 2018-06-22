class Clock {
    constructor(){
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
        this.convention = "AM";
        this.x = 300;
        this.y = 200;
        this.d = 200;
    }
    getCurrentTime(){
        this.hour = hour();
        this.minute = minute();
        this.second = second();
    }
    displayTimeAsText(){
        fill(255);
        text(this.hour + ":" + this.minute + ":" + this.second, 200, 200);
    }
    displayTimeAsCircle(){
        //  Getting the clock frame drawn
        strokeWeight(6);
        stroke(silver);
        noFill();
        arc(this.x, this.y, this.d+10, this.d+10, 0, 2*PI);
        //  Getting the hour drawn
        if(this.hour >= 12){
            this.convention = "PM";
            this.hour -= 12;
        }
        if(this.hour != 0){
            let hour_angle = map(this.hour * 60 + this.minute, 0, 720, -PI/2, 3*PI/2);
            strokeWeight(8);
            stroke(green);
            noFill();
            arc(this.x, this.y, this.d, this.d, -PI/2, hour_angle);
        }
        //  Getting the minute drawn
        if(this.minute != 0){
            let minute_angle = map(this.minute * 60 + this.second, 0, 3600, -PI/2, 3*PI/2);
            strokeWeight(8);
            stroke(purple);
            noFill();
            arc(this.x, this.y, this.d-20, this.d-20, -PI/2, minute_angle);
        }
        //  Getting the second drawn
        if(this.second != 0){
            let second_angle = map(this.second, 0, 60, -PI/2, 3*PI/2);
            strokeWeight(8);
            stroke(pink);
            noFill();
            arc(this.x, this.y, this.d-40, this.d-40, -PI/2, second_angle);
            console.log(second_angle);
        }
        // display AM/PM
        noStroke();
        fill(cobalt_blue);
        textSize(32);
        text(this.convention, this.x-20, this.y-20, 40, 40);
    }
}