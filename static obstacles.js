class StaticObstacles {
  constructor(x, y, w, h, obstacleID) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    if (menuID == 1) {
      this.obstacleID = this.generateObstacleID();
    } else {
      this.obstacleID = obstacleID;
    }
    this.collided = false;
    this.damage_dealt = false;
  }

  sethitboxes() {
    this.leftside = this.x;
    this.rightside = this.x + this.w;
    this.top = this.y;
    this.bottom = this.y + this.h;
  }
  generateObstacleID() {
    this.obstacleID = Math.floor(Math.random() * 3) + 1;
    // console.log(this.obstacleID);
    return this.obstacleID;
  }

  draw() {
    if (this.obstacleID == 1) {
      this.leftside = this.leftside + width / 14;
      this.rightside -= width / 35;
      this.y = height / 2 - 70;
      this.w = width / 6.5;
      this.h = height - this.y;
      fill("green");
      image(
        clocktowerimg,
        this.x - 155,
        this.y - 120,
        this.w + 370,
        this.h + 120,
        0,
        0,
        256,
        256
      );
      // image(img, this.x, this.y, this.w, this.h);
    } else if (this.obstacleID == 2) {
      this.y = height / 4;
      this.leftside = this.leftside += width / 19.5;
      this.rightside = this.rightside -= width / 19.5;
      this.top = this.top + 45;
      this.w = width / 6.8;
      this.h = height - this.y;

      if (buildingFrame >= 0 && buildingFrame <= 8) {
        image(
          skyscraperimg,
          this.x - 160,
          this.y - 40,
          this.w + 310,
          this.h + 40,
          0,
          0,
          256,
          256
        );
      }

      if (buildingFrame >= 9 && buildingFrame <= 16) {
        image(
          skyscraperimg,
          this.x - 160,
          this.y - 40,
          this.w + 310,
          this.h + 40,
          256,
          0,
          256,
          256
        );
      }

      if (buildingFrame >= 17 && buildingFrame <= 24) {
        image(
          skyscraperimg,
          this.x - 160,
          this.y - 40,
          this.w + 310,
          this.h + 40,
          512,
          0,
          256,
          256
        );
      }

      if (buildingFrame >= 25 && buildingFrame <= 32) {
        image(
          skyscraperimg,
          this.x - 160,
          this.y - 40,
          this.w + 310,
          this.h + 40,
          768,
          0,
          256,
          256
        );
      }

      if (buildingFrame >= 33 && buildingFrame <= 40) {
        image(
          skyscraperimg,
          this.x - 160,
          this.y - 40,
          this.w + 310,
          this.h + 40,
          1024,
          0,
          256,
          256
        );
      }

      if (buildingFrame >= 41 && buildingFrame <= 48) {
        image(
          skyscraperimg,
          this.x - 160,
          this.y - 40,
          this.w + 310,
          this.h + 40,
          1280,
          0,
          256,
          256
        );
      }

      if (buildingFrame >= 49 && buildingFrame <= 56) {
        image(
          skyscraperimg,
          this.x - 160,
          this.y - 40,
          this.w + 310,
          this.h + 40,
          1536,
          0,
          256,
          256
        );
      }

      if (buildingFrame >= 57 && buildingFrame <= 64) {
        image(
          skyscraperimg,
          this.x - 160,
          this.y - 40,
          this.w + 310,
          this.h + 40,
          1792,
          0,
          256,
          256
        );
      }

      if (buildingFrame >= 65 && buildingFrame <= 72) {
        image(
          skyscraperimg,
          this.x - 160,
          this.y - 40,
          this.w + 310,
          this.h + 40,
          2048,
          0,
          256,
          256
        );
      }

      if (buildingFrame >= 73 && buildingFrame <= 80) {
        image(
          skyscraperimg,
          this.x - 160,
          this.y - 40,
          this.w + 310,
          this.h + 40,
          2304,
          0,
          256,
          256
        );
      }

      if (buildingFrame >= 81 && buildingFrame <= 88) {
        image(
          skyscraperimg,
          this.x - 160,
          this.y - 40,
          this.w + 310,
          this.h + 40,
          2560,
          0,
          256,
          256
        );
      }
    } else if (this.obstacleID == 3) {
      this.leftside += width / 32;
      this.rightside -= width / 14;
      this.y = height / 1.5;
      this.w = width / 4.8;
      this.h = height - this.y;
      fill("purple");
      image(
        warehouseimg,
        this.x - 35,
        this.y - 125,
        this.w,
        this.h + 125,
        0,
        0,
        256,
        256
      );
    } else if (this.obstacleID == 4) {
      this.leftside = this.leftside + width / 30;
      this.rightside = this.rightside - width / 20;
      this.top = this.top + height / 7;
      image(windmill, this.x, this.y, this.w, this.h,);

    } else if (this.obstacleID == 5) {
      this.leftside = this.x + width / 12;
      this.rightside = this.x + this.w - width / 12;
      this.top = 0;
      this.bottom = this.top + this.h - height / 4;
      
      image(stalagtite, this.x, 0, this.w, this.h);
    } else if (this.obstacleID == 6) {
      this.leftside = this.x + width / 12;
      this.rightside = this.x + this.w - width / 12;
      this.top = this.y + 260;
      image(stalagmite, this.x, this.y, this.w, this.h);
    }

    // fill("white");
    // circle(this.leftside, this.top, 5);
    // fill("red");
    // circle(this.rightside, this.top, 5);
    // fill("purple");
    // circle(this.leftside, this.bottom, 5);
    // fill("green");
    // circle(this.rightside, this.bottom, 5);
  }

  move() {
    this.x -= buildingMoveAmount;
  }

  collisions() {
    // player top right corner
    if (player.hitbox2X >= this.leftside && player.hitbox2X <= this.rightside) {
      if (player.hitbox2Y >= this.top && player.hitbox2Y <= this.bottom) {
        this.collided = true;
      }
    }

    // player top left corner
    if (player.hitbox1X >= this.leftside && player.hitbox1X <= this.rightside) {
      if (player.hitbox1Y >= this.top && player.hitbox1Y <= this.bottom) {
        this.collided = true;
      }
    }

    // player bottom left corner
    if (player.hitbox3X >= this.leftside && player.hitbox3X <= this.rightside) {
      if (player.hitbox3Y >= this.top && player.hitbox3Y <= this.bottom) {
        this.collided = true;
      }
    }

    // player bottom right corner
    if (player.hitbox4X >= this.leftside && player.hitbox4X <= this.rightside) {
      if (player.hitbox4Y >= this.top && player.hitbox4Y <= this.bottom) {
        this.collided = true;
      }
    }

    // player centre point
    if (player.hitbox5X >= this.leftside && player.hitbox5X <= this.rightside) {
      if (player.hitbox5Y >= this.top && player.hitbox5Y <= this.bottom) {
        this.collided = true;
      }
    }
  }
}
