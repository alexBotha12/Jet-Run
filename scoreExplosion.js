class scoreExplosion {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.alpha = 255;
        this.delete = false;
    }

    update() {
        this.w += 5;
        this.h += 5;
        this.alpha-=8;
    }

    draw() {
        rectMode(CENTER);
        noFill();
        strokeWeight(25);
        stroke(247, 201, 74, this.alpha);
        rect(this.x, this.y, this.w, this.h, 300);
        rectMode(CORNER);
        strokeWeight(3);
    }
}
