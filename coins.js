class Coin {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.collided = false;
    this.collected = false;
  }

  draw() {
    image(coinImg, this.x - 3, this.y, this.w, this.h);
  }

  move() {
    this.x -= 10;
  }

  hitboxes() {
    this.leftside = this.x;
    this.rightside = this.x + this.w;
    this.top = this.y;
    this.bottom = this.y + this.h;

    // circle(this.leftside, this.top, 5);
    // circle(this.rightside, this.top, 5);
    // circle(this.leftside, this.bottom, 5);
    // circle(this.rightside, this.bottom, 5);
  }

  collisions() {
    if (
      player.hitbox2X >= this.leftside &&
      player.hitbox2X <= this.rightside
    ) {
      if (
        player.hitbox2Y >= this.top &&
        player.hitbox2Y <= this.bottom
      ) {
        this.collided = true;
      }
    }

    // player top left corner
    if (
      player.hitbox1X >= this.leftside &&
      player.hitbox1X <= this.rightside
    ) {
      if (
        player.hitbox1Y >= this.top &&
        player.hitbox1Y <= this.bottom
      ) {
        this.collided = true;
      }
    }

    // player bottom left corner
    if (
      player.hitbox3X >= this.leftside &&
      player.hitbox3X <= this.rightside
    ) {
      if (
        player.hitbox3Y >= this.top &&
        player.hitbox3Y <= this.bottom
      ) {
        this.collided = true;
      }
    }

    // player bottom right corner
    if (
      player.hitbox4X >= this.leftside &&
      player.hitbox4X <= this.rightside
    ) {
      if (
        player.hitbox4Y >= this.top &&
        player.hitbox4Y <= this.bottom
      ) {
        this.collided = true;
      }
    }

    // player centre point
    if (
      player.hitbox5X >= this.leftside &&
      player.hitbox5X <= this.rightside
    ) {
      if (
        player.hitbox5Y >= this.top &&
        player.hitbox5Y <= this.bottom
      ) {
        this.collided = true;
      }
    }
  }
}
