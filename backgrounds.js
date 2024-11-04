class BackgroundBuildings {
    constructor(x, y, w, h, layerID) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.layerID = layerID;
    }

    move() {
        if (this.layerID == 1) {
            this.x -= 0.5;
        } else if (this.layerID == 2) {
            this.x -= 0.25;
        } else if (this.layerID == 3) {
            this.x -= 0.1;
        } else if (this.layerID == 4) {
            this.x -= 0.05;
        }
    }

    draw() {
        if (this.layerID == 1) {
            image(backgroundsmallBuildings, this.x, this.y, this.w, this.h);
        } else if (this.layerID == 2) {
            image(backgroundlargeBuildings, this.x, this.y, this.w, this.h);
        } else if (this.layerID == 3) {
            image(clouds, this.x, this.y, this.w, this.h);
        } else if (this.layerID == 4) {
            image (mountains, this.x, this.y, this.w, this.h);
        }
    }
}