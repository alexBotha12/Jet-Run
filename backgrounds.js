class BackgroundBuildings {
  constructor(x, y, w, h, layerID) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.layerID = layerID;
  }

  // custom speeds for each of the layers
  move() {
    // Endless gamemode background here
    if (this.layerID == 1) {
      this.x -= 0.5;
    } else if (this.layerID == 2) {
      this.x -= 0.25;
    } else if (this.layerID == 3) {
      this.x -= 0.2;
    } else if (this.layerID == 4) {
      this.x -= 0.15;
      // level 1 background here
    } else if (this.layerID == 5) {
      this.x -= 0.5;
    } else if (this.layerID == 6) {
      this.x -= 0.35;
    } else if (this.layerID == 7) {
      this.x -= 0.25;
    } else if (this.layerID == 8) {
      this.x -= 0.2;
    } else if (this.layerID == 9) {
      this.x -= 0.1;
    } else if (this.layerID == 10) {
      this.x -= 0.5;
    } else if (this.layerID == 11) {
      this.x -= 0.35;
    } else if (this.layerID == 12) {
      this.x -= 0.25;
    } else if (this.layerID == 13) {
      this.x -= 0.2;
    } else if (this.layerID == 14) {
      this.x -= 0.1;
      // level 2 background here
      // left
    } else if (this.layerID == 15) {
      this.x -= 0.5;
    } else if (this.layerID == 16) {
      this.x -= 0.4;
    } else if (this.layerID == 17) {
      this.x -= 0.3;
    } else if (this.layerID == 18) {
      this.x -= 0.2;
    } else if (this.layerID == 19) {
      this.x -= 0.05;
    } else if (this.layerID == 20) {
      this.x -= 30;
      // right
    } else if (this.layerID == 21) {
      this.x -= 0.5;
    } else if (this.layerID == 22) {
      this.x -= 0.4;
    } else if (this.layerID == 23) {
      this.x -= 0.3;
    } else if (this.layerID == 24) {
      this.x -= 0.2;
    } else if (this.layerID == 25) {
      this.x -= 0.05;
    } else if (this.layerID == 26) {
      this.x -= 30;
    }
  }

  draw() {
    // endless gamemode background here
    if (this.layerID == 1) {
      image(backgroundsmallBuildings, this.x, this.y, this.w, this.h);
    } else if (this.layerID == 2) {
      image(backgroundlargeBuildings, this.x, this.y, this.w, this.h);
    } else if (this.layerID == 3) {
      image(clouds, this.x, this.y, this.w, this.h);
    } else if (this.layerID == 4) {
      image(mountains, this.x, this.y, this.w, this.h);
      // level 1 background here
    } else if (this.layerID == 5) {
      image(grassyFgHills, this.x, this.y, this.w, this.h);
    } else if (this.layerID == 10) {
      image(grassyFgHills2, this.x, this.y, this.w, this.h);
    } else if (this.layerID == 6) {
      image(grassyBgHills, this.x, this.y, this.w, this.h);
    } else if (this.layerID == 11) {
      image(grassyBgHills2, this.x, this.y, this.w, this.h);
    } else if (this.layerID == 7) {
      image(grassyFrontMountains, this.x, this.y, this.w, this.h);
    } else if (this.layerID == 12) {
      image(grassyFrontMountains2, this.x, this.y, this.w, this.h);
    } else if (this.layerID == 8) {
      image(grassyBgMountains, this.x, this.y, this.w, this.h);
    } else if (this.layerID == 13) {
      image(grassyBgMountains2, this.x, this.y, this.w, this.h);
    } else if (this.layerID == 9) {
      image(grassyClouds, this.x, this.y, this.w, this.h);
    } else if (this.layerID == 14) {
      image(grassyClouds2, this.x, this.y, this.w, this.h);
      // level 2 background here
      // left
    } else if (this.layerID == 15) {
      image(rockyFloor1Left, this.x, this.y, this.w, this.h);
    } else if (this.layerID == 21) {
      image(rockyFloor1Right, this.x, this.y, this.w, this.h);
    } else if (this.layerID == 16) {
      image(rockyFloor2Left, this.x, this.y, this.w, this.h);
    } else if (this.layerID == 22) {
      image(rockyFloor2Right, this.x, this.y, this.w, this.h);
    } else if (this.layerID == 17) {
      image(rockyFloor3Left, this.x, this.y, this.w, this.h);
    } else if (this.layerID == 23) {
      image(rockyFloor3Right, this.x, this.y, this.w, this.h);
    } else if (this.layerID == 18) {
      image(rockyFloor4Left, this.x, this.y, this.w, this.h);
    } else if (this.layerID == 24) {
      image(rockyFloor4Right, this.x, this.y, this.w, this.h);
    } else if (this.layerID == 19) {
      image(caveRoofLeft, this.x, this.y, this.w, this.h);
    } else if (this.layerID == 25) {
      image(caveRoofRight, this.x, this.y, this.w, this.h);
    } else if (this.layerID == 20) {
      image(bridgeLeft, this.x, this.y, this.w, this.h);
    } else if (this.layerID == 26) {
      image(bridgeRight, this.x, this.y, this.w, this.h);
    }
  }
}
