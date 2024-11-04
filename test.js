class CORCLE {
  constructor(x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;
  }

  draw() {
    fill("purple");
    circle(this.x, this.y, 15);
  }
}
