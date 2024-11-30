class Bullet {
  constructor(x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.w = 8;
    this.targetSet = false;
    this.removed = false;
  }

  settarget() {
    this.distanceX = this.x - player.x;
    this.distanceY = this.y - player.y;
    this.directionValue = this.distanceX / this.distanceY;
    this.direction = atan2(this.distanceX, this.distanceY);
  }

  move() {
    // console.log(this.x, this.y);
    this.x -= sin(this.direction) * 35;
    this.y -= cos(this.direction) * 35;
    this.centrePointX = this.x;
    this.centrePointY = this.y;
  }

  draw() {
    fill("yellow");
    strokeWeight(1);
    circle(this.x, this.y, this.w);
  }
}
