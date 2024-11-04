let player;

let startsfx;

let myFont;

let img;
let img4;
let img2;
let img3;
let img5;
let skyscraperimg;
let clocktowerimg;
let warehouseimg;
let background1;
let placeholderBg;
let img10;
let dashIcon;
let healIcon;
let backgroundsmallBuildings;
let backgroundlargeBuildings;
let clouds;
let mountains;
let sunrisebg;

let obstacleLimit = 0;

let enemy;
let enemies = [];
let enemiesNoSpawn = 0;
let enemiesRate = 18;
let counterForEnemies = 0;
let enemiesCooldown = 5000;
let enemiesAreSpawning = true;
let setTimerForEnemyChange = true;

let obstacle;
let obstacles = [];

let bullet;
let bullets = [];

let bulletsfx;
let damagesfx;
let dashsfx;
let gameOversfx;
let menu_selectsfx;
let healsfx;
let selectsfxendless = false;
let select_sfx_lLevel_select = false;
let select_sfx_achievements = false;
let select_sfx_exit_button = false;
let scoreMilestoneSfx;
let scoreSfxPlayed = false;
let backgroundMusic1;
let loopSong = true;

let playGameOverSound = true;

let timeForBuilding = true;
let drawCount = 0;
let countDown = 5000;
let subValue = 2;
let buildingFrame = 0;

let isLooping = true;

let powerUpSlot1 = 0;
let powerUpSlot2 = 0;
let powerUpSlot3 = 0;

let powerUp;
let powerUpsSpace = 95;
let powerUps = [0, 0, 0];
let powersOnScreen = [];
let powerUpsStartPos;
let powerUpSet = false;
let powerUpCounter = 0;

let score = 0;
let scoreCount = 0;
let hiddenscore;
let scoreboom;
let scoreExplosions = [];
let explosionAdded = false;

let backgroundFrame;
let backgroundFrames = [];
let backgroundFrameCount = 0;
let backgroundSet = false;

let menuID = 0;

function preload() {
  img = loadImage("images/player.png");
  img2 = loadImage("images/small enemy plane.png");
  img3 = loadImage("images/enemy medium plane.png");
  img4 = loadImage("images/big enemy plane.png");
  img5 = loadImage("images/medium building.png");
  skyscraperimg = loadImage("images/skyscrapers.png");
  clocktowerimg = loadImage("images/clocktower.png");
  warehouseimg = loadImage("images/warehouse.png");
  background1 = loadImage("images/pixil-frame-0.png");
  img10 = loadImage("images/rah2.png");
  dashIcon = loadImage("images/dash icon-5.png");
  healIcon = loadImage("images/heart icon.png");
  placeholderBg = loadImage("images/placeholderbg.jpg");
  backgroundsmallBuildings = loadImage("images/background small buildings.png");
  backgroundlargeBuildings = loadImage("images/background Large buildings.png");
  clouds = loadImage("images/clouds.png");
  mountains = loadImage("images/mountains.png");
  sunrisebg = loadImage("images/sky.png");

  bulletsfx = loadSound("audio/shot.mp3");
  damagesfx = loadSound("audio/damage.wav");
  dashsfx = loadSound("audio/dashsfx.wav");
  gameOversfx = loadSound("audio/game over.mp3");
  menu_selectsfx = loadSound("audio/select1.wav");
  healsfx = loadSound("audio/heal.wav");
  scoreMilestoneSfx = loadSound("audio/score milestone.mp3");
  backgroundMusic1 = loadSound("audio/game music 1.wav");
}

function setup() {
  createCanvas(windowWidth - 10, windowHeight - 100);
  myFont = loadFont("karmatic-arcade-font/KarmaticArcade-6Yrp1.ttf");
  player = new Player(width / 8, height / 2, 35, 10);
  startPos = width;
  bulletsfx.setVolume(0.3);
  damagesfx.setVolume(0.12);
  dashsfx.setVolume(0.15);
  gameOversfx.setVolume(0.2);
  healsfx.setVolume(0.2);
  backgroundMusic1.setVolume(0.9);
  scoreMilestoneSfx.setVolume(0.2);

  powerUpsStartPos = width / 2 + width / 3;
}

function draw() {
  textFont(myFont);
  background("#34a1eb");
  // image(background1, 0, 0, width, height);
  if (menuID == 0) {
    mainMenu();
  }
  if (menuID == 1) {
    endless();
  }

  if (menuID == 2) {
    deathScreen();
  }

  if (menuID == 3) {
    pauseMenu();
  }

  if (menuID != 1) {
    backgroundMusic1.stop();
  }
}

function endless() {
  image(sunrisebg, 0, 0, 960, 940);
  image(sunrisebg, 959, 0, 960, 940);
  image(sunrisebg, 1918, 0, 960, 940);

  console.log(windowHeight);
  if (loopSong == true) {
    backgroundMusic1.loop();
    loopSong = false;
  }

  //

  //

  //

  // setting the background frames
  if (backgroundSet == false) {
    backgroundFrame = new BackgroundBuildings(0, 0, 960, 940, 4);
    backgroundFrames.push(backgroundFrame);

    backgroundFrame = new BackgroundBuildings(0, 0, 960, 940, 3);
    backgroundFrames.push(backgroundFrame);

    backgroundFrame = new BackgroundBuildings(0, 0, 960, 940, 2);
    backgroundFrames.push(backgroundFrame);

    backgroundFrame = new BackgroundBuildings(0, 0, 960, 940, 1);
    backgroundFrames.push(backgroundFrame);

    backgroundFrame = new BackgroundBuildings(959, 0, 960, 940, 4);
    backgroundFrames.push(backgroundFrame);

    backgroundFrame = new BackgroundBuildings(959, 0, 960, 940, 3);
    backgroundFrames.push(backgroundFrame);

    backgroundFrame = new BackgroundBuildings(959, 0, 960, 940, 2);
    backgroundFrames.push(backgroundFrame);

    backgroundFrame = new BackgroundBuildings(959, 0, 960, 940, 1);
    backgroundFrames.push(backgroundFrame);

    backgroundFrame = new BackgroundBuildings(1918, 0, 960, 940, 4);
    backgroundFrames.push(backgroundFrame);

    backgroundFrame = new BackgroundBuildings(1918, 0, 960, 940, 3);
    backgroundFrames.push(backgroundFrame);

    backgroundFrame = new BackgroundBuildings(1918, 0, 960, 940, 2);
    backgroundFrames.push(backgroundFrame);

    backgroundFrame = new BackgroundBuildings(1918, 0, 960, 940, 1);
    backgroundFrames.push(backgroundFrame);

    backgroundSet = true;
    backgroundFrameCount += 4;
  }

  for (let i = 0; i < backgroundFrames.length; i++) {
    backgroundFrames[i].draw();
    backgroundFrames[i].move();
    if (backgroundFrames[i].x <= -960 && backgroundFrames[i].layerID == 4) {
      backgroundFrames.splice(i, 1);
      backgroundFrames.push(new BackgroundBuildings(1918, 0, 960, 940, 4));
    } else if (
      backgroundFrames[i].x <= -960 &&
      backgroundFrames[i].layerID == 3
    ) {
      backgroundFrames.splice(i, 1);
      backgroundFrames.push(new BackgroundBuildings(1918, 0, 960, 940, 3));
    } else if (
      backgroundFrames[i].x <= -960 &&
      backgroundFrames[i].layerID == 2
    ) {
      backgroundFrames.splice(i, 1);
      backgroundFrames.push(new BackgroundBuildings(1918, 0, 960, 940, 2));
    } else if (
      backgroundFrames[i].x <= -960 &&
      backgroundFrames[i].layerID == 1
    ) {
      backgroundFrames.splice(i, 1);
      backgroundFrames.push(new BackgroundBuildings(1918, 0, 960, 940, 1));
    }
  }

  // powerup counter
  powerUpCounter++;
  // shortening the cooldown between enemy bursts
  if (enemiesCooldown > 2000) {
    enemiesCooldown -= 0.5;
  }

  //

  //

  // increasing the score;
  if (player.health > 0) {
    scoreCount++;
  }

  if (scoreCount == 5) {
    score++;
    scoreCount = 0;
  }

  // score visuals
  strokeWeight(0.5);
  if (score % 500 == 0 && score != 0) {
    fill("#faed3c");
    if (scoreSfxPlayed == false) {
      scoreMilestoneSfx.play();
      scoreSfxPlayed = true;
    }
    scoreboom = new scoreExplosion(95, 20, 180, 25);
    scoreExplosions.push(scoreboom);
  } else if (score % 500 == 1 && score != 1) {
    fill("#f7ec4a");
    scoreSfxPlayed = false;
  } else if (score % 500 == 2 && score != 2) {
    fill("#fff569");
  } else if (score % 500 == 3 && score != 3) {
    fill("#faf178");
  } else {
    fill("white");
  }
  text("SCORE: " + score, 0, 25);

  for (let i = 0; i < scoreExplosions.length; i++) {
    scoreExplosions[i].draw();
    scoreExplosions[i].update();
    if (scoreExplosions[i].alpha == 0) {
      scoreExplosions[i].delete = true;
    }
  }

  for (let i = 0; i < scoreExplosions.length; i++) {
    if (scoreExplosions[i].delete == true) {
      scoreExplosions.splice(i, 1);
    }
  }

  // decreasing count value for buildings
  if (countDown >= 1000) {
    countDown -= subValue;
    subValue -= 0.0001;
  }

  startsfx = true;

  if (subValue <= 0) {
    subValue = 0;
  }

  // building frames
  buildingFrame++;
  if (buildingFrame >= 88) {
    buildingFrame = 0;
  }

  if (powersOnScreen < 1 && powerUpCounter == 1000) {
    powerUpCounter = 0;
    powerUp = new Powerup(width, height / 2, 40, 40);
    powersOnScreen.push(powerUp);
  }

  for (let i = 0; i < powersOnScreen.length; i++) {
    powersOnScreen[i].draw();
    powersOnScreen[i].move();
    powersOnScreen[i].hover();

    if (powersOnScreen[i].leftside < 50) {
      powersOnScreen[i].offScreen = true;
    }

    if (
      player.hitbox2X >= powersOnScreen[i].leftside &&
      player.hitbox2X <= powersOnScreen[i].rightside
    ) {
      if (
        player.hitbox2Y >= powersOnScreen[i].top &&
        player.hitbox2Y <= powersOnScreen[i].bottom
      ) {
        powersOnScreen[i].collided = true;
      }
    }

    // player top left corner
    if (
      player.hitbox1X >= powersOnScreen[i].leftside &&
      player.hitbox1X <= powersOnScreen[i].rightside
    ) {
      if (
        player.hitbox1Y >= powersOnScreen[i].top &&
        player.hitbox1Y <= powersOnScreen[i].bottom
      ) {
        powersOnScreen[i].collided = true;
      }
    }

    // player bottom left corner
    if (
      player.hitbox3X >= powersOnScreen[i].leftside &&
      player.hitbox3X <= powersOnScreen[i].rightside
    ) {
      if (
        player.hitbox3Y >= powersOnScreen[i].top &&
        player.hitbox3Y <= powersOnScreen[i].bottom
      ) {
        powersOnScreen[i].collided = true;
      }
    }

    // player bottom right corner
    if (
      player.hitbox4X >= powersOnScreen[i].leftside &&
      player.hitbox4X <= powersOnScreen[i].rightside
    ) {
      if (
        player.hitbox4Y >= powersOnScreen[i].top &&
        player.hitbox4Y <= powersOnScreen[i].bottom
      ) {
        powersOnScreen[i].collided = true;
      }
    }

    // player centre point
    if (
      player.hitbox5X >= powersOnScreen[i].leftside &&
      player.hitbox5X <= powersOnScreen[i].rightside
    ) {
      if (
        player.hitbox5Y >= powersOnScreen[i].top &&
        player.hitbox5Y <= powersOnScreen[i].bottom
      ) {
        powersOnScreen[i].collided = true;
      }
    }

    // removal upon collision with player
    if (powersOnScreen[i].collided == true) {
      for (let j = 0; j < powerUps.length; j++) {
        if (powerUps[j] == 0 && powersOnScreen[i].added == false) {
          powersOnScreen[i].added = true;
          if (powersOnScreen[i].powerUpID == 1) {
            powerUps[j] = 1;
          } else if (powersOnScreen[i].powerUpID == 2) {
            powerUps[j] = 2;
          }
        }
      }
      powersOnScreen.splice(i, 1);
    }
  }

  for (let i = 0; i < powersOnScreen.length; i++) {
    if (powersOnScreen[i].offScreen == true) {
      powersOnScreen.splice(i, 1);
    }
  }

  //

  //

  //

  //

  //

  //

  //

  // player functions
  player.sethitboxes();
  player.frameCount += 1;
  // frame setting
  if (player.frameCount >= 16) {
    player.frameCount = 0;
  }
  player.draw();
  player.move();

  // activating death screen
  if (player.health == 0) {
    menuID = 2;
  }

  //

  //

  //

  //

  //

  //

  // generate enemies
  counterForEnemies++;
  // console.log(counterForEnemies);
  // console.log(enemiesNoSpawn);
  if (enemiesAreSpawning == true && enemiesNoSpawn == 0) {
    if (counterForEnemies == enemiesRate) {
      enemy = new Enemies(width + 20, 0, 0, 0);
      enemies.push(enemy);
      enemiesNoSpawn = Math.floor(Math.random() * 2);
      counterForEnemies = 0;
    }
  }

  if (counterForEnemies == enemiesRate) {
    counterForEnemies = 0;
  }

  if (enemiesNoSpawn == 1) {
    if (setTimerForEnemyChange == true) {
      setTimeout(AllowEnemies, enemiesCooldown);
      setTimerForEnemyChange = false;
    }
  }

  //

  //

  //

  //

  //

  //

  // enemy functions
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].sethitboxes();
    enemies[i].setFrameLimit();
    enemies[i].setguns();
    enemies[i].draw();
    enemies[i].move();
    enemies[i].pull();
    if (enemies[i].guns == 1) {
      enemies[i].timeToShoot();
    }

    // player top right corner
    if (
      player.hitbox2X >= enemies[i].leftside &&
      player.hitbox2X <= enemies[i].rightside
    ) {
      if (
        player.hitbox2Y >= enemies[i].top &&
        player.hitbox2Y <= enemies[i].bottom
      ) {
        enemies[i].collided = true;
      }
    }

    // player top left corner
    if (
      player.hitbox1X >= enemies[i].leftside &&
      player.hitbox1X <= enemies[i].rightside
    ) {
      if (
        player.hitbox1Y >= enemies[i].top &&
        player.hitbox1Y <= enemies[i].bottom
      ) {
        enemies[i].collided = true;
      }
    }

    // player bottom left corner
    if (
      player.hitbox3X >= enemies[i].leftside &&
      player.hitbox3X <= enemies[i].rightside
    ) {
      if (
        player.hitbox3Y >= enemies[i].top &&
        player.hitbox3Y <= enemies[i].bottom
      ) {
        enemies[i].collided = true;
      }
    }

    // player bottom right corner
    if (
      player.hitbox4X >= enemies[i].leftside &&
      player.hitbox4X <= enemies[i].rightside
    ) {
      if (
        player.hitbox4Y >= enemies[i].top &&
        player.hitbox4Y <= enemies[i].bottom
      ) {
        enemies[i].collided = true;
      }
    }

    // player centre point
    if (
      player.hitbox5X >= enemies[i].leftside &&
      player.hitbox5X <= enemies[i].rightside
    ) {
      if (
        player.hitbox5Y >= enemies[i].top &&
        player.hitbox5Y <= enemies[i].bottom
      ) {
        enemies[i].collided = true;
      }
    }

    // removal upon collision with player
    if (enemies[i].collided == true) {
      enemies.splice(i, 1);
      player.health -= 10;
      damagesfx.play();
    }
  }

  // removing enemies from array
  for (let i = 0; i < enemies.length; i++) {
    if (enemies[i].x < -60) {
      enemies.splice(i, 1);
    }
  }

  for (let i = 0; i < enemies.length; i++) {
    // enemy collisions with buildings.
    if (enemies[i].collidedWithBuilding == false) {
      for (let j = 0; j < obstacles.length; j++) {
        if (
          enemies[i].centreX >= obstacles[j].leftside &&
          enemies[i].centreX <= obstacles[j].rightside
        ) {
          if (
            enemies[i].centreY >= obstacles[j].top &&
            enemies[i].centreY <= obstacles[j].bottom
          ) {
            enemies[i].collidedWithBuilding = true;
          }
        }
      }

      if (enemies[i].collidedWithBuilding == true) {
        enemies.splice(i, 1);
      }
    }
  }

  // static obstacle generation

  // obstacle = new StaticObstacles(width, height / 2, 0, 0);
  // obstacles.push(obstacle);

  //

  //

  //

  //

  //

  //

  // static obstacle core functions
  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].sethitboxes();
    obstacles[i].draw();
    obstacles[i].move();

    // player top right corner
    if (
      player.hitbox2X >= obstacles[i].leftside &&
      player.hitbox2X <= obstacles[i].rightside
    ) {
      if (
        player.hitbox2Y >= obstacles[i].top &&
        player.hitbox2Y <= obstacles[i].bottom
      ) {
        obstacles[i].collided = true;
      }
    }

    // player top left corner
    if (
      player.hitbox1X >= obstacles[i].leftside &&
      player.hitbox1X <= obstacles[i].rightside
    ) {
      if (
        player.hitbox1Y >= obstacles[i].top &&
        player.hitbox1Y <= obstacles[i].bottom
      ) {
        obstacles[i].collided = true;
      }
    }

    // player bottom left corner
    if (
      player.hitbox3X >= obstacles[i].leftside &&
      player.hitbox3X <= obstacles[i].rightside
    ) {
      if (
        player.hitbox3Y >= obstacles[i].top &&
        player.hitbox3Y <= obstacles[i].bottom
      ) {
        obstacles[i].collided = true;
      }
    }

    // player bottom right corner
    if (
      player.hitbox4X >= obstacles[i].leftside &&
      player.hitbox4X <= obstacles[i].rightside
    ) {
      if (
        player.hitbox4Y >= obstacles[i].top &&
        player.hitbox4Y <= obstacles[i].bottom
      ) {
        obstacles[i].collided = true;
      }
    }

    // player centre point
    if (
      player.hitbox5X >= obstacles[i].leftside &&
      player.hitbox5X <= obstacles[i].rightside
    ) {
      if (
        player.hitbox5Y >= obstacles[i].top &&
        player.hitbox5Y <= obstacles[i].bottom
      ) {
        obstacles[i].collided = true;
      }
    }

    // deduct health upon collision
    if (obstacles[i].collided == true && obstacles[i].damage_dealt == false) {
      damagesfx.play();
      player.health -= 10;
      obstacles[i].damage_dealt = true;
    }
  }

  if (timeForBuilding == true) {
    setTimeout(generateBuildings, countDown);
    timeForBuilding = false;
  }

  for (let i = 0; i < obstacles.length; i++) {
    if (obstacles[i].x < -500) {
      obstacles.splice(i, 1);
    }
  }

  drawCount += 1;
  if (drawCount >= 100) {
    obstacleLimit += 1;
    drawCount = 0;
  }

  //

  //

  //

  //

  //

  //

  // handling bullets
  for (let i = 0; i < bullets.length; i++) {
    if (bullets[i].targetSet == false) {
      bullets[i].settarget();
      bullets[i].targetSet = true;
    }

    bullets[i].move();
    bullets[i].draw();
  }

  for (let i = 0; i < bullets.length; i++) {
    // collision detection + offscreen removal
    if (bullets[i].x < 0 || bullets[i].x > width) {
      bullets[i].removed = true;
    }

    if (bullets[i].y < 0 || bullets[i].y > height) {
      bullets[i].removed = true;
    }

    if (
      bullets[i].centrePointX <= player.hitbox2X &&
      bullets[i].centrePointX >= player.hitbox1X
    ) {
      if (
        bullets[i].centrePointY <= player.hitbox4Y + 15 &&
        bullets[i].centrePointY >= player.hitbox1Y - 15
      ) {
        damagesfx.play();
        bullets[i].removed = true;
        player.health -= 5;
      }
    }

    if (bullets[i].removed == true) {
      bullets.splice(i, 1);
    }
  }

  //

  //

  //

  //

  // powerups drawing
  for (let i = 0; i < powerUps.length; i++) {
    if (powerUps[i] == 0) {
      stroke("white");
      strokeWeight(3);
      fill("grey");
      rect(powerUpsStartPos + i * powerUpsSpace, height / 30, 60, 60, 8);
    } else if (powerUps[i] == 1) {
      image(
        dashIcon,
        powerUpsStartPos + i * powerUpsSpace,
        height / 30,
        60,
        60
      );
      stroke("white");
      strokeWeight(3);
      noFill();
      rect(powerUpsStartPos + i * powerUpsSpace, height / 30, 60, 60, 8);
    } else if (powerUps[i] == 2) {
      image(
        healIcon,
        powerUpsStartPos + i * powerUpsSpace,
        height / 30,
        60,
        60
      );
      stroke("white");
      strokeWeight(3);
      noFill();
      rect(powerUpsStartPos + i * powerUpsSpace, height / 30, 60, 60, 8);
    }
  }

  //

  //

  //

  //

  //

  // health display
  strokeWeight(0.2);
  textSize(25);
  fill("white");
  text(player.health, 300, height - height / 35);

  noStroke();
  fill("grey");
  rect(40, height - 55, 250, 40, 6);
  fill("red");
  rect(40, height - 55, player.health * 2.5, 40, 6);
  noFill();
  strokeWeight(3);
  stroke("white");
  rect(40, height - 55, 250, 40, 6);
}

//

//

//

//

//

//

function AllowEnemies() {
  enemiesNoSpawn = 0;
  setTimerForEnemyChange = true;
}

//

//

//

//

//

//

// putting buildings into the array

function generateBuildings() {
  if (obstacles.length < obstacleLimit) {
    obstacle = new StaticObstacles(width, height / 2, 0, 0);
    obstacles.push(obstacle);
  }
  timeForBuilding = true;
}

//

//

//

//

//

//

function setScore() {
  score = 0;
}

//

//

//

//

//

// all button functions
function keyPressed() {
  if (key == "f" && menuID == 1) {
    bullet = new Bullet(width, height / 2);
    bullets.push(bullet);
    bulletsfx.play();
  }

  if (key == "d") {
    if (
      player.dashed == false &&
      (keyIsDown(UP_ARROW) == true || keyIsDown(DOWN_ARROW) == true)
    ) {
      player.dash();
      player.dashed = false;
    }
  }

  if (key == "e") {
    powerUpSet = false;
    for (let i = 0; i < powerUps.length; i++) {
      if (powerUps[i] == 0 && powerUpSet == false) {
        powerUpSet = true;
        powerUps[i] = 1;
      }
    }
  }

  if (key == "g") {
    powerUpSet = false;
    for (let i = 0; i < powerUps.length; i++) {
      if (powerUps[i] == 0 && powerUpSet == false) {
        powerUpSet = true;
        powerUps[i] = 2;
      }
    }
  }

  if (key == "h") {
    if (player.healed == false) {
      player.heal();
      player.healed = false;
    }
  }

  if (key == " ") {
    menuID = 1;
  }
}

//

//

//

//

//

//

// interactions with buttons and mouse use
function mouseClicked() {
  if (menuID == 0) {
    if (mouseX > 10 && mouseX < width / 3) {
      if (mouseY > height / 2 - 25 && mouseY < height / 2 + 65) {
        menuID = 1;
      }
    }
    if (mouseX > 10 && mouseX < width / 3) {
    }

    if (
      mouseX > width - width / 12 &&
      mouseX < width - width / 12 + width / 12 - 20
    ) {
      if (
        mouseY > height / 2 - 25 + 240 &&
        mouseY < height / 2 - 25 + 240 + 90
      ) {
        window.close();
      }
    }
  }
}

function mainMenu() {
  // background("#34a1eb");
  // background("#4287f5");
  background(placeholderBg);

  // drawing the buttons
  fill("white");
  stroke("black");
  strokeWeight(3);
  rect(10, height / 2 - 25, width / 3, 90, 5);

  rect(10, height / 2 - 25 + 120, width / 3, 90, 5);

  rect(10, height / 2 - 25 + 240, width / 7, 90, 5);

  rect(width / 19 + width / 7, height / 2 - 25 + 240, width / 7, 90, 5);

  rect(width - width / 12, height / 2 - 25 + 240, width / 12 - 20, 90, 5);

  // adding text
  fill("black");
  strokeWeight(1);
  textSize(((height / 15) * width) / 2000);
  text("Play Endless", 50, height / 2 + 35);
  text("Level Select", 50, height / 2 + 35 + 120);
  textSize(height / 35);
  strokeWeight(0.5);
  text("Achievements", 27, height / 2 + 22 + 240);

  // lighting up edges if the mouse is on the button

  // play endless
  if (mouseX > 10 && mouseX < width / 3) {
    if (mouseY > height / 2 - 25 && mouseY < height / 2 + 65) {
      stroke("white");
      strokeWeight(4);
      noFill();
      rect(10, height / 2 - 25, width / 3, 90, 5);
    }
  }

  // level select
  if (mouseX > 10 && mouseX < width / 3) {
    if (mouseY > height / 2 - 25 + 120 && mouseY < height / 2 + 65 + 120) {
      stroke("white");
      strokeWeight(4);
      noFill();
      rect(10, height / 2 - 25 + 120, width / 3, 90, 5);
    }
  }

  // achievements
  if (mouseX > 10 && mouseX < 10 + width / 7) {
    if (mouseY > height / 2 - 25 + 240 && mouseY < height / 2 + 65 + 240) {
      stroke("white");
      strokeWeight(4);
      noFill();
      rect(10, height / 2 - 25 + 240, width / 7, 90, 5);
    }
  }

  // exit button
  if (
    mouseX > width - width / 12 &&
    mouseX < width - width / 12 + width / 12 - 20
  ) {
    if (mouseY > height / 2 - 25 + 240 && mouseY < height / 2 - 25 + 240 + 90) {
      stroke("white");
      strokeWeight(4);
      noFill();
      rect(width - width / 12, height / 2 - 25 + 240, width / 12 - 20, 90, 5);
    }
  }
}

function deathScreen() {
  if (playGameOverSound == true) {
    gameOversfx.play();
    playGameOverSound = false;
  }

  fill("white");
  stroke("black");
  strokeWeight(3);
  rect(width / 4, height / 4, width / 2, height / 2, 10);
  line(width / 2, height / 4, width / 2, height / (4 / 3));

  strokeWeight(3);
  textSize((width / height) * 32);
  fill("black");
  text("you died", width / 3, height / 10);
  textSize((width / height) * 10);
  strokeWeight(width / height - 0.8);
  text("attempt stats", width / 4 + width / 20, height / 4 + height / 20);
  textSize((width / height) * 10);
  text(
    "Score: " + score,
    width / 4 + width / 20,
    height / 4 + height / 20 + height / 10
  );
}

function pauseMenu() {
  text("GAME PAUSED", width / 3, height / 30);
}

// const fs = require("node:fs");
// let content = "HAHAHAHA YOU STINK";

// fs.writeFile("user data.txt", content);
