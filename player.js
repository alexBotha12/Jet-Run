class Player {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.dy = 0;

    this.health = 100;
    this.frameCount = 0;
    this.angleMultiplier = 0;

    this.dashDirection;
    this.dashTokens = 3;
    this.dashed = false;
    this.healed = false;
  }

  // draw function
  draw() {
    if (this.health < 0) {
      this.health = 0;
    }
    if (this.health > 0) {
      push();

      angleMode(DEGREES);
      translate(this.hitbox5X, this.hitbox5Y);
      this.angleMultiplier = this.dy / 25;
      this.angle = 35 * this.angleMultiplier;
      rotate(this.angle);

      rectMode(CORNER);
      // rect(this.x, this.y, this.w, this.h);
      if (this.frameCount >= 0 && this.frameCount <= 3) {
        image(img, -32, -32, 80, 80, 0, 0, 64, 64);
      } else if (this.frameCount >= 4 && this.frameCount <= 7) {
        image(img, -32, -32, 80, 80, 64, 0, 64, 64);
      } else if (this.frameCount >= 8 && this.frameCount <= 11) {
        image(img, -32, -32, 80, 80, 128, 0, 64, 64);
      } else if (this.frameCount >= 12 && this.frameCount <= 15) {
        image(img, -32, -32, 80, 80, 192, 0, 64, 64);
      }

      pop();

      if (this.y < 20) {
        this.y = 20;
      } else if (this.y > height - 30) {
        this.y = height - 30;
      }

      // fill("white");
      // circle(this.hitbox1X, this.hitbox1Y, 5);
      // fill("red");
      // circle(this.hitbox2X, this.hitbox2Y, 5);
      // fill("orange");
      // circle(this.hitbox3X, this.hitbox3Y, 5);
      // fill("yellow");
      // circle(this.hitbox4X, this.hitbox4Y, 5);
      // fill("purple");
      // circle(this.hitbox5X, this.hitbox5Y, 5);
    }
  }

  // player movement
  move() {
    this.y += this.dy;

    // double movement key detection
    if (keyIsDown(UP_ARROW) == true && keyIsDown(DOWN_ARROW) == true) {
      this.dy *= 0.95;
    }

    // speed cap
    if (this.dy > 25) {
      this.dy = 25;
    } else if (this.dy < -25) {
      this.dy = -25;
    }
    // upward movement
    if (keyIsDown(UP_ARROW) == true) {
      if (this.dy > 0) {
        this.dy -= 1;
      } else {
        this.dy -= 0.5;
      }
    }
    // downward movement
    if (keyIsDown(DOWN_ARROW) == true) {
      if (this.dy < 0) {
        this.dy += 1;
      } else {
        this.dy += 0.5;
      }
    }
    // deceleration when neither key is pressed
    if (keyIsDown(UP_ARROW) == false && keyIsDown(DOWN_ARROW) == false) {
      this.dy *= 0.85;
    }
  }

  // set hitboxes for player
  sethitboxes() {
    this.hitbox1X = this.x;
    this.hitbox1Y = this.y;

    this.hitbox2X = this.x + this.w;
    this.hitbox2Y = this.y;

    this.hitbox3X = this.x;
    this.hitbox3Y = this.y + this.h;

    this.hitbox4X = this.x + this.w;
    this.hitbox4Y = this.y + this.h;

    this.hitbox5X = this.x + this.w / 2;
    this.hitbox5Y = this.y + this.h / 2;
  }

  dash() {
    if (this.dashed == false) {
      let dash2 = false;
      for (let i = 0; i < powerUps.length; i++) {
        if (powerUps[i] == 1 && dash2 == false) {
          this.dashpart1();
          this.dashpart2();
          this.dashed = true;
          dash2 = true;
          powerUps[i] = 0;
          powerUpsUsed++;
        }
      }
    }
  }

  dashpart1() {
    if (keyIsDown(UP_ARROW) == true) {
      this.dashed = false;
      dashsfx.play();
      if (this.y > 250) {
        this.y -= 250;
      } else {
        this.y -= this.y - 35;
      }
      this.dashDirection = 1;
    }

    if (keyIsDown(DOWN_ARROW) == true) {
      this.dashed = false;
      dashsfx.play();
      if (this.y < height - 250) {
        this.y += 250;
      } else {
        this.y += height - (this.y + 35);
      }
      this.dashDirection = 0;
    }
  }

  dashpart2() {
    if (this.dashDirection == 1) {
      this.dy = -8;
    } else if (this.dashDirection == 0) {
      this.dy = 8;
    }
  }

  heal() {
    let healed2 = false;
    for (let i = 0; i < powerUps.length; i++) {
      if (powerUps[i] == 2 && healed2 == false) {
        if (this.health <= 50) {
          this.health += 50;
        } else {
          this.health += 100 - this.health;
        }
        healsfx.play();
        healed2 = true;
        powerUps[i] = 0;
        powerUpsUsed++;
      }
    }
  }
}
