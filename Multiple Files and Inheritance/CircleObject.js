//Child Class 1

//extends indicates that we will inherit from a parent
class CircleObject extends AnimatedObject {
    constructor() {
        super(random(width), random(height));
        this.size = random(20, 40);
    }

    display() { //override the display method
        strokeWeight(2);
        let d = dist(this.x, this.y, mouseX, mouseY);

        if (d <= this.size / 2) {
            fill("red");
        }

        else {
            fill("white");
        }

        circle(this.x, this.y, this.size);
    }
}