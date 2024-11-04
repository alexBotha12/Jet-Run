class StaticObstacles {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.obstacleID = this.generateObstacleID();
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
    }

    // fill("white");
    // circle(this.leftside, this.top, 5);
    // circle(this.rightside, this.top, 5);
  }

  move() {
    this.x -= 6;
  }
}
