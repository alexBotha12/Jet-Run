class Enemies {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = this.setY();
    this.w = w;
    this.h = h;
    this.enemyID = this.generateID();
    this.distanceY = 0;

    this.leftside = 0;
    this.rightside = 0;
    this.top = 0;
    this.bottom = 0;

    this.ammo = 0;
    this.guns = 0;
    this.gunTimerValue = 0;
    this.needGunTimer = true;
    this.setGuns = true;

    this.collided = false;
    this.centreX = 0;
    this.centreY = 0;
    this.collidedWithBuilding = false;

    this.frameCount = 0;
    this.frameLimit = 0;

    this.trigValue = 0;
    this.angleToPlayer = 0;
    this.lastAngle = 0;
    this.doRotate = true;

    this.bulletCount = 0;
    this.bulletCountLimit = Math.floor(Math.random() * 20) + 15;
  }

  sethitboxes() {
    if (this.enemyID == 1) {
      this.w = 30;
      this.h = 30;
      this.centreX = this.x + this.w / 2;
      this.centreY = this.y + this.h / 2;
    } else if (this.enemyID == 2) {
      this.w = 45;
      this.h = 45;
      this.centreX = this.x + this.w / 2;
      this.centreY = this.y + this.h / 2;
    } else if (this.enemyID == 3) {
      this.w = 80;
      this.h = 60;
      this.centreX = this.x + this.w / 2;
      this.centreY = this.y + this.h / 2;
    }

    this.rightside = this.x + this.w;
    this.top = this.y;
    this.bottom = this.y + this.h;
    this.leftside = this.x;
  }

  // generating the plane ID
  generateID() {
    this.enemyID = Math.floor(Math.random() * 3) + 1;
    // console.log(this.enemyID);
    return this.enemyID;
  }

  // randomly generate the enemy height.
  setY() {
    this.y = Math.floor(Math.random() * height) + 1;
    return this.y;
  }

  // Decide if plane has guns
  setguns() {
    if (this.setGuns == true) {
      this.guns = Math.floor(Math.random() * 2);
      if (this.guns == 1) {
        this.ammo = Math.floor(Math.random() * 3) + 3;
      }
    }
    this.setGuns = false;
    return this.guns;
  }

  timeToShoot() {
    if (this.guns == 1 && this.bulletCount >= this.bulletCountLimit) {
      this.shoot();
    }

    // if (this.needGunTimer == true) {
    //   this.gunTimerValue = Math.floor(Math.random() * 200) + 1;
    //   setTimeout(this.shoot, this.gunTimerValue);
    //   this.needGunTimer = false;
    // }
  }

  //setting the frame limit
  setFrameLimit() {
    if (this.enemyID == 1) {
      this.frameLimit = 16;
    } else if (this.enemyID == 2) {
      this.frameLimit = 16;
    } else if (this.enemyID == 3) {
      this.frameLimit = 15;
    }
    return this.frameLimit;
  }

  // drawing the enemies
  draw() {
    // calculating the angle from the enemy to the player
    // angleMode(DEGREES);
    // if (this.x > player.x) {
    //   this.trigValue = (player.y - this.y) / (player.x - this.x);
    //   this.angleToPlayer = atan(this.trigValue);
    //   console.log(this.angleToPlayer);
    // }

    //updating the frame count
    this.frameCount = this.frameCount + 1;
    if (this.frameCount >= this.frameLimit) {
      this.frameCount = 0;
    }

    this.bulletCount += 1;
    if (this.bulletCount > this.bulletCountLimit + 3) {
      this.bulletCount = 0;
    }

    rectMode(CORNER);

    push();
    translate(this.x + this.w / 2, this.y + this.h / 2, 5);
    // circle(0, 0, 5);
    angleMode(DEGREES);

    // capping the rotation
    if (this.angleToPlayer > 35) {
      this.angleToPlayer = 35;
    } else if (this.angleToPlayer < -35) {
      this.angleToPlayer = -35;
    }

    if (this.x > player.x) {
      rotate(this.angleToPlayer * (this.x / width));
      this.lastAngle = this.angleToPlayer * (this.x / width);
    } else {
      rotate(this.lastAngle);
    }

    // drawing plane 1
    if (this.enemyID == 1) {
      if (this.frameCount >= 0 && this.frameCount <= 1) {
        image(img2, -32, -32, 90, 90, 0, 0, 64, 64);
      }

      if (this.frameCount >= 2 && this.frameCount <= 3) {
        image(img2, -32, -32, 90, 90, 64, 0, 64, 64);
      }

      if (this.frameCount >= 4 && this.frameCount <= 5) {
        image(img2, -32, -32, 90, 90, 128, 0, 64, 64);
      }

      if (this.frameCount >= 6 && this.frameCount <= 7) {
        image(img2, -32, -32, 90, 90, 192, 0, 64, 64);
      }

      if (this.frameCount >= 8 && this.frameCount <= 9) {
        image(img2, -32, -32, 90, 90, 256, 0, 64, 64);
      }

      if (this.frameCount >= 10 && this.frameCount <= 11) {
        image(img2, -32, -32, 90, 90, 320, 0, 64, 64);
      }

      if (this.frameCount >= 12 && this.frameCount <= 13) {
        image(img2, -32, -32, 90, 90, 384, 0, 64, 64);
      }

      if (this.frameCount >= 14 && this.frameCount <= 15) {
        image(img2, -32, -32, 90, 90, 448, 0, 64, 64);
      }

      // drawing plane 2
    } else if (this.enemyID == 2) {
      if (this.frameCount >= 0 && this.frameCount <= 3) {
        image(img3, -64, -64, 128, 128, 0, 0, 128, 128);
      }

      if (this.frameCount >= 4 && this.frameCount <= 7) {
        image(img3, -64, -64, 128, 128, 128, 0, 128, 128);
      }

      if (this.frameCount >= 8 && this.frameCount <= 11) {
        image(img3, -64, -64, 128, 128, 256, 0, 128, 128);
      }

      if (this.frameCount >= 12 && this.frameCount <= 16) {
        image(img3, -64, -64, 128, 128, 384, 0, 128, 128);
      }

      // drawing  plane 3
    } else if (this.enemyID == 3) {
      if (this.frameCount >= 0 && this.frameCount <= 5) {
        image(img4, -64, -64, 150, 150, 0, 0, 128, 128);
      } else if (this.frameCount >= 6 && this.frameCount <= 10) {
        image(img4, -64, -64, 150, 150, 128, 0, 128, 128);
      } else if (this.frameCount >= 11 && this.frameCount <= 15) {
        image(img4, -64, -64, 150, 150, 256, 0, 128, 128);
      }
    }

    pop();

    // fill("white");
    // circle(this.leftside, this.top, 5);
    // circle(this.rightside, this.top, 5);
    // circle(this.leftside, this.bottom, 5);
    // circle(this.rightside, this.bottom, 5);

    // fill("white");
    // circle(this.x + this.w / 2, this.y + this.h / 2, 5);
  }

  // lateral enemy movement
  move() {
    if (this.enemyID == 1) {
      this.x -= (enemymoveAmount + 12);
    } else if (this.enemyID == 2) {
      this.x -= (enemymoveAmount + 10);
    } else if (this.enemyID == 3) {
      this.x -= (enemymoveAmount + 6);
    }
  }

  // pulling towards the player
  pull() {
    this.distanceY = player.y - this.y;
    if (this.enemyID == 1) {
      this.y += this.distanceY / 20;
    } else if (this.enemyID == 2) {
      this.y += this.distanceY / 35;
    } else if (this.enemyID == 3) {
      this.y += this.distanceY / 50;
    }
  }

  // shooting
  shoot() {
    if (bullets.length < 10 && this.ammo > 0) {
      bullet = new Bullet(this.x, this.y);
      this.ammo -= 1;
      if (startsfx == true) {
        bulletsfx.play();
      }
      bullets.push(bullet);
    }
    this.bulletCount = 0;
  }

  collisions() {
    // player top right corner
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
