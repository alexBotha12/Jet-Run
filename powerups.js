class Powerup {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.y = Math.floor(Math.random() * (height - height / 10)) + height / 20;
    this.w = w;
    this.h = h;
    this.powerUpID;
    this.lastHoverState = 0;
    this.updateHoverState = true;
    this.collided = false;
    this.top;
    this.bottom;
    this.leftside;
    this.rightside;
    this.added = false;
    this.offScreen = false;
    this.powerUpID = Math.floor(Math.random() * 2) + 1;
  }

  generateID() {
    this.powerUpID = Math.floor(Math.random() * 3) + 1;
    return this.powerUpID;
  }

  move() {
    this.x -= 5;

    this.top = this.y;
    this.bottom = this.y + this.h;
    this.leftside = this.x;
    this.rightside = this.x + this.w;
  }

  draw() {
    stroke("white");
    strokeWeight(3);
    if (this.powerUpID == 1) {
      noFill();
      image(dashIcon, this.x, this.y, this.w, this.h);
      rect(this.x, this.y, 40, 40, 8);
    } else if (this.powerUpID == 2) {
      noFill();
      image(healIcon, this.x, this.y, this.w, this.h);
      rect(this.x, this.y, this.w, this.h, 8);
    }
  }

  // hover motion;
  hover() {
    this.lastHoverState++;
    if (this.lastHoverState >= 0 && this.lastHoverState <= 3) {
      this.y += 1;
      this.hoverUpdated = true;
    } else if (this.lastHoverState >= 4 && this.lastHoverState <= 7) {
      this.y += 1;
      this.lastHoverState++;
    } else if (this.lastHoverState >= 8 && this.lastHoverState <= 11) {
      this.y += 2;
      this.lastHoverState++;
    } else if (this.lastHoverState >= 12 && this.lastHoverState <= 15) {
      this.y += 3;
      this.lastHoverState++;
    } else if (this.lastHoverState >= 16 && this.lastHoverState <= 19) {
      this.y += 3;
      this.lastHoverState++;
    } else if (this.lastHoverState >= 20 && this.lastHoverState <= 23) {
      this.y += 2;
      this.lastHoverState++;
    } else if (this.lastHoverState >= 24 && this.lastHoverState <= 27) {
      this.y += 1;
      this.lastHoverState++;
    } else if (this.lastHoverState >= 28 && this.lastHoverState <= 31) {
      this.y -= 1;
      this.lastHoverState++;
    } else if (this.lastHoverState >= 32 && this.lastHoverState <= 35) {
      this.y -= 2;
      this.lastHoverState++;
    } else if (this.lastHoverState >= 36 && this.lastHoverState <= 39) {
      this.y -= 3;
      this.lastHoverState++;
    } else if (this.lastHoverState >= 40 && this.lastHoverState <= 43) {
      this.y -= 3;
      this.lastHoverState++;
    } else if (this.lastHoverState >= 44 && this.lastHoverState <= 47) {
      this.y -= 2;
      this.lastHoverState++;
    } else if (this.lastHoverState >= 48 && this.lastHoverState >= 51) {
      this.y -= 1;
      this.lastHoverState++;
    } else {
      this.y -= 1;
      this.lastHoverState = 0;
    }
  }

  collisions() {
    if (this.leftside < 50) {
      this.offScreen = true;
    }

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
