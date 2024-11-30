// delcaring values for the levels
let levelPositionPointer = 0;
let counterForLevels = 0;
let setdataForLevelMode = true;
let distanceCounter = 0;
let distanceInLevel = 0;
let levelScore = 0;
let backgroundSetForLevels = false;
let setBackGroundMusic = true;
let levelLength = 0;
let levelID;

let tutorialButtonHovered = false;
let noTutorialButtons = true;
let tutorialSfxCount = 0;
//

function levelMode() {
  background(150);

  if (levelID == 1) {
    currentLevel = [
      0, 4, 4, 4, 0, 4, 4, 0, 0, 4, 4, 4, 0, 4, 4, 0, 4, 0, 4, 0, 4, 4,
    ];
    levelLength = 1850;
  }
  if (levelID == 2) {
    currentLevel = [
      0, 5, 5, 6, 6, 5, 6, 0, 6, 5, 0, 5, 6, 6, 0, 5, 6, 5, 0, 6, 5, 0, 5, 6, 5,
    ];
    levelLength = 2100;
  }
  if (levelID == 3) {
    currentLevel = [
      1, 2, 1, 0, 3, 0, 2, 2, 0, 3, 1, 2, 1, 0, 3, 1, 1, 2, 1, 2, 0, 3, 2, 3, 1,
      2, 0, 3, 2, 1,
    ];
    levelLength = 2550;
  }

  if (setdataForLevelMode == true) {
    // console.log("looping");
    score = 0;
    totalScore = 0;
    score_mul = 0;
    scoreCount = 0;
    scoreCalculated = false;
    distanceCounter = 0;
    distanceInLevel = 0;

    player.health = 100;
    player.x = width / 8;
    player.y = height / 2;
    player.dy = 0;

    powerUps = [0, 0, 0];
    powersOnScreen = [];
    unusedPowerUps = 0;
    powerUpsUsed = 0;
    scoreExplosions = [];

    drawCount = 0;
    subValue = 2;

    buildingFrame = 0;

    backgroundFrames = [];
    backgroundFrameCount = 0;
    backgroundSet = false;

    countDown = 8000;
    enemies = [];
    enemymoveAmount = 6;
    enemiesNoSpawn = 0;
    enemiesRate = 25;
    enemychance = 2;
    enemychanceCount = 0;
    counterForEnemies = 0;
    enemiesCooldown = 5000;
    enemiesAreSpawning = true;
    setTimerForEnemyChange = true;

    obstacles = [];
    buildingMoveAmount = 5;

    overshadowSet = false;
    chooseJoke = Math.floor(Math.random() * 6);

    bullets = [];

    storeX = player.x;
    hitmovementCount = 0;

    sunHeight = 0;

    loopSong = true;
    playGameOverSound = true;

    deathScreenCounter = 0;
    winScreenCounter = 0;
    firstplayed = false;
    secondplayed = false;
    thirdplayed = false;
    fourthplayed = false;
    fifthplayed = false;
    sixthplayed = false;

    menuMusicIsPlaying = false;

    overshadowSetPause = false;

    coins = [];
    timeforCoinsLevels = true;
    totalCoins = 0;

    menubutton1Hovered = false;
    menubutton2Hovered = false;
    menubutton3Hovered = false;
    menubutton4Hovered = false;
    menubutton5Hovered = false;

    deathscreenbutton1Hovered = false;
    deathscreenbutton2Hovered = false;
    deathscreenbutton3Hovered = false;

    pauseMenubutton1Hovered = false;
    pauseMenubutton2Hovered = false;
    pauseMenubutton3Hovered = false;

    levelSelectButton1Hovered = false;
    levelSelectButton2Hovered = false;
    levelSelectButton3Hovered = false;

    overshadowSetwinScreen = false;

    setMenuSelectSfx = true;

    levelPositionPointer = 0;
    counterForLevels = 0;

    backgroundSetForLevels = false;

    setBackGroundMusic = true;

    setdataForLevelMode = false;
  }

  // loading the background music
  if (setBackGroundMusic == true) {
    if (levelID == 1) {
      level1Music.loop();
    }

    if (levelID == 2) {
      level2Music.loop();
    }

    if (levelID == 3) {
      level3Music.loop();
    }

    setBackGroundMusic = false;
  }

  // drawing background frames
  if (levelID == 1) {
    image(grassySky, 0, 0, 960, 980);
    image(grassySky, 959, 0, 960, 980);
    image(grassySky, 1918, 0, 960, 980);

    if (backgroundSetForLevels == false) {
      backgroundFrame = new BackgroundBuildings(0, 0, 960, 940, 9);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(959, 0, 960, 940, 14);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(1918, 0, 960, 940, 9);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(2877, 0, 960, 940, 14);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(0, 0, 960, 940, 8);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(959, 0, 960, 940, 13);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(1918, 0, 960, 940, 8);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(2877, 0, 960, 940, 13);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(0, 0, 960, 940, 7);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(959, 0, 960, 940, 12);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(1918, 0, 960, 940, 7);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(2877, 0, 960, 940, 12);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(0, 0, 960, 940, 6);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(959, 0, 960, 940, 11);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(1918, 0, 960, 940, 6);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(2877, 0, 960, 940, 11);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(0, 0, 960, 940, 5);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(959, 0, 960, 940, 10);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(1918, 0, 960, 940, 5);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(2877, 0, 960, 940, 10);
      backgroundFrames.push(backgroundFrame);

      backgroundSetForLevels = true;
    }
  }

  if (levelID == 2) {
    image(nightSkyLeft, 0, 0, 960, 980);
    image(nightSkyRight, 959, 0, 960, 980);
    image(nightSkyLeft, 1918, 0, 960, 980);

    if (backgroundSetForLevels == false) {
      backgroundFrame = new BackgroundBuildings(0, 0, 960, 940, 19);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(959, 0, 960, 940, 25);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(1918, 0, 960, 940, 19);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(2877, 0, 960, 940, 25);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(0, 0, 960, 940, 18);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(959, 0, 960, 940, 24);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(1918, 0, 960, 940, 18);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(2877, 0, 960, 940, 24);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(0, 0, 960, 940, 17);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(959, 0, 960, 940, 23);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(1918, 0, 960, 940, 17);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(2877, 0, 960, 940, 23);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(0, 0, 960, 940, 16);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(959, 0, 960, 940, 22);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(1918, 0, 960, 940, 16);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(2877, 0, 960, 940, 22);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(0, 0, 960, 940, 15);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(959, 0, 960, 940, 21);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(1918, 0, 960, 940, 15);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(2877, 0, 960, 940, 21);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(0, 0, 960, 940, 20);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(959, 0, 960, 940, 26);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(1918, 0, 960, 940, 20);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(2877, 0, 960, 940, 26);
      backgroundFrames.push(backgroundFrame);

      backgroundSetForLevels = true;
    }
  }

  if (levelID == 3) {
    console.log(backgroundSetForLevels);
    image(blueSky, 0, 0, 960, 940);
    image(blueSky, 959, 0, 960, 940);
    image(blueSky, 1918, 0, 960, 940);

    if (backgroundSetForLevels == false) {
      backgroundFrame = new BackgroundBuildings(0, 0, 960, 940, 4);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(959, 0, 960, 940, 4);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(1918, 0, 960, 940, 4);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(2877, 0, 960, 940, 4);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(0, 0, 960, 940, 3);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(959, 0, 960, 940, 3);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(1918, 0, 960, 940, 3);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(2877, 0, 960, 940, 3);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(0, 0, 960, 940, 2);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(959, 0, 960, 940, 2);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(1918, 0, 960, 940, 2);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(2877, 0, 960, 940, 2);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(0, 0, 960, 940, 1);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(959, 0, 960, 940, 1);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(1918, 0, 960, 940, 1);
      backgroundFrames.push(backgroundFrame);

      backgroundFrame = new BackgroundBuildings(2877, 0, 960, 940, 1);
      backgroundFrames.push(backgroundFrame);

      backgroundSetForLevels = true;
    }
  }

  for (let i = 0; i < backgroundFrames.length; i++) {
    backgroundFrames[i].move();
    backgroundFrames[i].draw();
    if (backgroundFrames[i].x <= -960 && backgroundFrames[i].layerID == 26) {
      backgroundFrames[i].x = 2876;
    }
    if (backgroundFrames[i].x <= -960 && backgroundFrames[i].layerID == 25) {
      backgroundFrames[i].x = 2876;
    }
    if (backgroundFrames[i].x <= -960 && backgroundFrames[i].layerID == 24) {
      backgroundFrames[i].x = 2876;
    }
    if (backgroundFrames[i].x <= -960 && backgroundFrames[i].layerID == 23) {
      backgroundFrames[i].x = 2876;
    }
    if (backgroundFrames[i].x <= -960 && backgroundFrames[i].layerID == 22) {
      backgroundFrames[i].x = 2876;
    }
    if (backgroundFrames[i].x <= -960 && backgroundFrames[i].layerID == 21) {
      backgroundFrames[i].x = 2876;
    }
    if (backgroundFrames[i].x <= -960 && backgroundFrames[i].layerID == 20) {
      backgroundFrames[i].x = 2876;
    }
    if (backgroundFrames[i].x <= -960 && backgroundFrames[i].layerID == 19) {
      backgroundFrames[i].x = 2876;
    }
    if (backgroundFrames[i].x <= -960 && backgroundFrames[i].layerID == 18) {
      backgroundFrames[i].x = 2876;
    }
    if (backgroundFrames[i].x <= -960 && backgroundFrames[i].layerID == 17) {
      backgroundFrames[i].x = 2876;
    }
    if (backgroundFrames[i].x <= -960 && backgroundFrames[i].layerID == 16) {
      backgroundFrames[i].x = 2876;
    }
    if (backgroundFrames[i].x <= -960 && backgroundFrames[i].layerID == 15) {
      backgroundFrames[i].x = 2876;
    }
    if (backgroundFrames[i].x <= -960 && backgroundFrames[i].layerID == 14) {
      backgroundFrames[i].x = 2876;
    }
    if (backgroundFrames[i].x <= -960 && backgroundFrames[i].layerID == 13) {
      backgroundFrames[i].x = 2876;
    }
    if (backgroundFrames[i].x <= -960 && backgroundFrames[i].layerID == 12) {
      backgroundFrames[i].x = 2876;
    }
    if (backgroundFrames[i].x <= -960 && backgroundFrames[i].layerID == 11) {
      backgroundFrames[i].x = 2876;
    }
    if (backgroundFrames[i].x <= -960 && backgroundFrames[i].layerID == 10) {
      backgroundFrames[i].x = 2876;
    }
    if (backgroundFrames[i].x <= -960 && backgroundFrames[i].layerID == 9) {
      backgroundFrames[i].x = 2876;
    }
    if (backgroundFrames[i].x <= -960 && backgroundFrames[i].layerID == 8) {
      backgroundFrames[i].x = 2876;
    }
    if (backgroundFrames[i].x <= -960 && backgroundFrames[i].layerID == 7) {
      backgroundFrames[i].x = 2876;
    }
    if (backgroundFrames[i].x <= -960 && backgroundFrames[i].layerID == 6) {
      backgroundFrames[i].x = 2876;
    }
    if (backgroundFrames[i].x <= -960 && backgroundFrames[i].layerID == 5) {
      backgroundFrames[i].x = 2876;
    }
    if (backgroundFrames[i].x <= -960 && backgroundFrames[i].layerID == 4) {
      backgroundFrames[i].x = 2876;
    }
    if (backgroundFrames[i].x <= -960 && backgroundFrames[i].layerID == 3) {
      backgroundFrames[i].x = 2876;
    }
    if (backgroundFrames[i].x <= -960 && backgroundFrames[i].layerID == 2) {
      backgroundFrames[i].x = 2876;
    }
    if (backgroundFrames[i].x <= -960 && backgroundFrames[i].layerID == 1) {
      backgroundFrames[i].x = 2876;
    }
  }

  // building frames incrementation
  buildingFrame++;
  if (buildingFrame >= 88) {
    buildingFrame = 0;
  }

  // calling the win screen
  if (distanceInLevel == levelLength) {
    menuID = 6;
  }

  // allow sound effects to come through here
  startsfx = true;

  // to have the correct buttons for the death screen / pause menu
  comeFromLevels = true;
  comeFromEndless = false;

  // Managing distance throughout the level
  distanceCounter++;
  if (distanceCounter == 3) {
    distanceCounter = 0;
    distanceInLevel++;
  }

  // displaying the player's distance in the level
  textSize(35);
  strokeWeight(1);
  if (levelID == 1) {
    fill("black");
  } else {
    fill("white");
  }
  text("DISTANCE: " + distanceInLevel + "m", 0, 25);

  // player functions
  player.move();
  player.draw();
  player.sethitboxes();

  //frame setting
  player.frameCount += 1;
  if (player.frameCount >= 16) {
    player.frameCount = 0;
  }
  if (player.health == 0) {
    menuID = 2;
  }

  //

  //

  //

  //

  // generate enemies
  counterForEnemies++;
  enemychanceCount++;
  if (enemychanceCount == 500) {
    enemychanceCount = 0;
    enemychance++;
  }

  if (enemymoveAmount < 20) {
    enemymoveAmount += 0.0025;
  }
  // console.log(counterForEnemies);
  // console.log(enemiesNoSpawn);
  if (enemiesAreSpawning == true && enemiesNoSpawn != 1) {
    if (counterForEnemies == enemiesRate) {
      enemy = new Enemies(width + 20, 0, 0, 0);
      enemies.push(enemy);
      enemiesNoSpawn = Math.floor(Math.random() * enemychance);
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

  // enemy functions
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].sethitboxes();
    enemies[i].setFrameLimit();
    enemies[i].setguns();
    enemies[i].draw();
    enemies[i].move();
    enemies[i].pull();
    enemies[i].collisions();
    if (enemies[i].guns == 1) {
      enemies[i].timeToShoot();
    }

    // removal upon collision with player and health deduction
    hitmovementCount++;
    if (enemies[i].collided == true) {
      player.x = player.x - 10;
      hitmovementCount = 0;

      enemies.splice(i, 1);
      player.health -= 10;
      damagesfx.play();
    }

    if (hitmovementCount == 10) {
      hitmovementCount = 0;
    }
  }

  // "hit" effect
  if (hitmovementCount < 10) {
    if (player.x < storeX) {
      player.x += (storeX - player.x) / 10;
      hitmovementCount++;
    }
    if (player.x >= storeX - 0.25) {
      player.x = storeX;
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

  if (buildingMoveAmount < 20) {
    buildingMoveAmount += 0.0025;
  }
  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].sethitboxes();
    obstacles[i].draw();
    obstacles[i].move();
    obstacles[i].collisions();

    // deduct health upon collision
    if (obstacles[i].collided == true && obstacles[i].damage_dealt == false) {
      damagesfx.play();
      player.health -= 10;
      obstacles[i].damage_dealt = true;
    }
  }

  //

  //

  //

  //

  //

  // going through the level
  counterForLevels++;

  // spawning buildings and resetting the counter
  if (counterForLevels == 250) {
    levelPositionPointer++;
    if (currentLevel[levelPositionPointer] != 0) {
      obstacle = new StaticObstacles(
        width,
        height / 4,
        400,
        height - height / 4,
        currentLevel[levelPositionPointer]
      );
      obstacles.push(obstacle);
    }
    counterForLevels = 0;
  }

  // offscreen removal for the buildings
  for (let i = 0; i < obstacles.length; i++) {
    if (obstacles[i].x < -500) {
      obstacles.splice(i, 1);
    }
  }

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
        player.x = player.x - 10;
        hitmovementCount = 0;
        player.health -= 5;
      }
    }

    if (bullets[i].removed == true) {
      bullets.splice(i, 1);
    }
  }

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

  // coins functions
  if (menuID == 5) {
    if (timeforCoinsLevels == true) {
      setTimeout(coinSpawn, coinTimer);
      timeforCoinsLevels = false;
    }
  }
  if (levelID == 1) {
    fill("black");
  } else {
    fill("white");
  }
  // onscreen display for coins
  strokeWeight(1);
  textSize(35);
  text("COINS: " + totalCoins, 0, 60);

  for (let i = 0; i < coins.length; i++) {
    coins[i].draw();
    coins[i].move();
    coins[i].hitboxes();
    coins[i].collisions();
  }

  for (let i = 0; i < coins.length; i++) {
    if (coins[i].remove == true) {
      coins.splice(i, 1);
    }
  }

  for (let i = 0; i < coins.length; i++) {
    if (coins[i].collided == true) {
      coins.splice(i, 1);
      totalCoins++;
      coinCollected.play();
    }
  }

  //

  //

  //

  // Powerups
  powerUpCounter++;
  if (powersOnScreen < 1 && powerUpCounter == 650) {
    powerUpCounter = 0;
    powerUp = new Powerup(width, height / 2, 40, 40);
    powersOnScreen.push(powerUp);
  }

  // handling powerups functions
  for (let i = 0; i < powersOnScreen.length; i++) {
    powersOnScreen[i].draw();
    powersOnScreen[i].move();
    powersOnScreen[i].hover();
    powersOnScreen[i].collisions();

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
      powerupPickup.play();
    }
  }

  for (let i = 0; i < powersOnScreen.length; i++) {
    if (powersOnScreen[i].offScreen == true) {
      powersOnScreen.splice(i, 1);
    }
  }

  // progress bar displayed here
  fill("gray");
  noStroke();
  rect(width / 4, 25, width / 2, 10, 5);
  fill("black");
  rect(width / 4, 25, ((distanceInLevel / levelLength) * width) / 2, 10, 5);
  stroke("white");
  strokeWeight(4);
  noFill();
  rect(width / 4, 25, width / 2, 10, 5);
  fill("black");
  text(
    Math.floor((distanceInLevel / levelLength) * 100) + "%",
    width / 1.3333 + 20,
    40
  );

  // health display
  strokeWeight(0.2);
  textSize(30);
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

//

function winScreen() {
  winScreenCounter++;

  // calculate score here
  if (scoreCalculated == false) {
    calculateScore();
    scoreCalculated = true;
  }

  if (overshadowSetwinScreen == false) {
    image(overshadow, 0, 0, 960, 980);
    image(overshadow, 959, 0, 960, 980);
    image(overshadow, 1918, 0, 960, 980);
    overshadowSetwinScreen = true;
  }

  // drawing the central window
  fill("white");
  stroke("black");
  strokeWeight(3);
  rect(width / 4, height / 4, width / 2, height / 2, 10);
  line(width / 2, height / 4, width / 2, height / (4 / 3));
  line(
    width / 4 + width / 20,
    height / 4 + height / 10,
    width / 2 - width / 20,
    height / 4 + height / 10
  );

  // title
  strokeWeight(3);
  textSize((width / height) * 60);
  fill("white");
  text("you win!", width / 3 + width / 15, height / 10);

  // text for the stats
  fill("black");
  textSize((width / height) * 20);
  strokeWeight(width / height - 0.8);
  text("attempt stats", width / 4 + width / 20, height / 4 + height / 20);
  textSize((width / height) * 15);
  if (winScreenCounter > 20) {
    if (comeFromEndless == true) {
      text(
        "raw score: " + score,
        width / 4 + width / 20,
        height / 4 + height / 20 + height / 10
      );
      if (firstplayed == false) {
        statsSound1.play();
        firstplayed = true;
      }
    } else if (comeFromLevels == true) {
      text(
        "raw distance: " + distanceInLevel,
        width / 4 + width / 20,
        height / 4 + height / 20 + height / 10
      );
      if (firstplayed == false) {
        statsSound1.play();
        firstplayed = true;
      }
    }
  }
  if (winScreenCounter > 40) {
    text(
      "Powerups used: " + powerUpsUsed,
      width / 4 + width / 20,
      height / 4 + height / 20 + height / 10 + height / 30
    );
    if (secondplayed == false) {
      statsSound2.play();
      secondplayed = true;
    }
  }

  if (winScreenCounter > 60) {
    text(
      "Powerups left over: " + unusedPowerUps,
      width / 4 + width / 20,
      height / 4 + height / 20 + height / 10 + height / 30 + height / 30
    );

    if (thirdplayed == false) {
      statsSound2.play();
      thirdplayed = true;
    }
  }

  if (winScreenCounter > 80) {
    text(
      "Coins Collected: " + totalCoins,
      width / 4 + width / 20,
      height / 4 +
        height / 20 +
        height / 10 +
        height / 30 +
        height / 30 +
        height / 30
    );
    if (fourthplayed == false) {
      statsSound2.play();
      fourthplayed = true;
    }
  }

  if (winScreenCounter == 95) {
    if (fifthplayed == false) {
      statsSound3.play();
      fifthplayed = true;
    }
  }
  if (winScreenCounter > 100) {
    text(
      "total score: " + totalScore,
      width / 4 + width / 20,
      height / 4 + height / 20 + height / 10 + (4 * height) / 30
    );
  }

  if (sixthplayed == false && winScreenCounter == 96) {
    statsSound4.play();
    sixthplayed = true;
  }

  if (winScreenCounter > 140) {
    textSize(45);
    text("I guess you aren't", width / 2 + width / 50, height / 4 + height / 8);
    text("THAT", width / 2 + width / 50, height / 4 + height / 8 + 35);
    strokeWeight(2);
    line(
      width / 2 + width / 50,
      height / 4 + height / 8 + 42,
      width / 2 + width / 50 + 85,
      height / 4 + height / 8 + 42
    );
    strokeWeight(1);
    text(
      "terrible... ",
      width / 2 + width / 50 + 100,
      height / 4 + height / 8 + 35
    );
  }

  // sound effects for hovering a button
  buttonHoverSfx();

  //drawing the buttons here
  strokeWeight(3);
  fill("white");
  rect(
    width / 4,
    height / 2 + height / 4 + height / 35,
    width / 10,
    height / 6,
    10
  );

  rect(
    width / 2 - width / 20,
    height / 2 + height / 4 + height / 35,
    width / 10,
    height / 6,
    10
  );

  rect(
    width / 1.3333 - width / 10,
    height / 2 + height / 4 + height / 35,
    width / 10,
    height / 6,
    10
  );

  image(
    restartSymbol,
    width / 4 + width / 50,
    height / 2 + 10 + height / 4 + height / 35,
    128,
    128
  );
  image(
    returnSymbol,
    width / 2 - width / 20 + width / 50 - 10,
    height / 2 + 10 + height / 4 + height / 35 - 10,
    138,
    128
  );

  image(
    leaderboardButton,
    width / 1.3333 - width / 10,
    height / 2 + height / 4 + height / 35,
    width / 10,
    height / 6
  );

  // drawing the outlines for the buttons here when the player hovers the button
  if (mouseX > width / 4 && mouseX < width / 4 + width / 10) {
    if (
      mouseY > height / 2 + height / 4 + height / 35 &&
      mouseY < height / 2 + height / 4 + height / 35 + height / 6
    ) {
      stroke("white");
      noFill();
      rect(
        width / 4,
        height / 2 + height / 4 + height / 35,
        width / 10,
        height / 6,
        10
      );
      winscreenbutton1Hovered = true;
    } else {
      winscreenbutton1Hovered = false;
    }
  } else {
    winscreenbutton1Hovered = false;
  }

  if (
    mouseX > width / 2 - width / 20 &&
    mouseX < width / 2 - width / 20 + width / 10
  ) {
    if (
      mouseY > height / 2 + height / 4 + height / 35 &&
      mouseY < height / 2 + height / 4 + height / 35 + height / 6
    ) {
      stroke("white");
      noFill();
      rect(
        width / 2 - width / 20,
        height / 2 + height / 4 + height / 35,
        width / 10,
        height / 6,
        10
      );
      winscreenbutton2Hovered = true;
    } else {
      winscreenbutton2Hovered = false;
    }
  } else {
    winscreenbutton2Hovered = false;
  }

  if (
    mouseX > width / 1.3333 - width / 10 &&
    mouseX < width / 1.3333 - width / 10 + width / 10
  ) {
    if (
      mouseY > height / 2 + height / 4 + height / 35 &&
      mouseY < height / 2 + height / 4 + height / 35 + height / 6
    ) {
      stroke("white");
      noFill();
      rect(
        width / 1.3333 - width / 10,
        height / 2 + height / 4 + height / 35,
        width / 10,
        height / 6,
        10
      );
      winscreenbutton3Hovered = true;
    } else {
      winscreenbutton3Hovered = false;
    }
  } else {
    winscreenbutton3Hovered = false;
  }
}

function tutorial() {

  // setting the background
  image(menuBg, 0, 0, 960, 980);
  image(menuBg, 960, 0, 960, 980);
  image(menuBg, 1920, 0, 960, 980);
  image(menuBg, 2880, 0, 960, 980);

  buttonHoverSfx();

  // title and instructions on how to play
  fill("white");
  stroke("black");
  rect(width / 8, 10, width / 1.3333, height - 20, 5);
  textSize(65);
  fill("black");
  stroke("white");
  text("HOW TO PLAY", width / 2 - width / 16, 80);
  strokeWeight(4);
  fill("black");
  stroke("black");
  line(width / 8 + 40, 100, width / 1.3333 + width / 8 - 40, 100);

  // Endless gamemode
  textSize(40);
  strokeWeight(2);
  text("ENDLESS: ", width / 8 + 40, 150);
  textSize(30);
  strokeWeight(1);
  text(" - Do anything you can to keep flying!", width / 8 + 40, 180);
  text(
    " - Dodge buildings and weave between enemy planes to stay alive, (careful of their bullets!)",
    width / 8 + 40,
    210
  );
  text(
    " - Collect powerups to gain abilities like dashes and health regeneration",
    width / 8 + 40,
    240
  );
  text(
    " - You can collect coins for an additional challege, they, along with any unused powerups will increase",
    width / 8 + 40,
    270
  );
  text("    your score!", width / 8 + 40, 300);

  // Level gamemode
  textSize(40);
  strokeWeight(2);
  fill("black");
  text("LEVELS: ", width / 8 + 40, 400);
  textSize(30);
  strokeWeight(1);
  text(
    " - There are 3 levels in the game, each getting progressively longer and with a different theme!",
    width / 8 + 40,
    430
  );
  text(
    " - You must progress through each level, dodging the planes and the obstacles that go past",
    width / 8 + 40,
    460
  );
  text(" - Reach the end of each level to win! ", width / 8 + 40, 490);

  // Advice for gameplay
  textSize(40);
  strokeWeight(2);
  fill("black");
  text("LEARN 2 PLAY: ", width / 8 + 40, 590);
  textSize(30);
  strokeWeight(1);
  text(
    " - To use the dash, hold either movement key down, and press D. This will propell you in",
    width / 8 + 40,
    620
  );
  text(
    "    either direction by 250 pixels, or just the distance from you to the floor / roof",
    width / 8 + 40,
    650
  );
  text(" - To heal, press H", width / 8 + 40, 680)
  text(
    " - Remember, the heal powerup heals up to 50 HP. Dont just use them to heal a tiny amount ",
    width / 8 + 40,
    710
  );
  text("    of health! ", width / 8 + 40, 740);
  text(" - Up arrow key to fly up, down arrow key to fly down", width / 8 + 40, 770);
  text(
    " - getting hit by a building only does 10 damage to you, but an enemy plane colliding with a ",
    width / 8 + 40,
    800
  );
  text(
    "    building destroys them immediately. Its better to lose a little than to lose a lot...",
    width / 8 + 40,
    830
  );

  stroke("black");
  noFill();
  strokeWeight(3);
  image(dashIcon, width / 1.14285714286 - 450, 600, 50, 50);
  rect(width / 1.14285714286 - 450, 600, 50, 50, 5);
  image (healIcon, width / 1.14285714286 - 450, 655, 50, 50);
  rect(width / 1.14285714286 - 450, 655, 50, 50, 5);

  // buttons
  fill("white");
  strokeWeight(4);
  stroke("black");
  rect(10, 10, 90, 90, 5);
  image(returnSymbol, 10, 10, 90, 90);

  if (mouseX > 10 && mouseX < 100) {
    if (mouseY > 10 && mouseY < 100) {
      noFill();
      stroke("white");
      rect(10, 10, 90, 90, 5);
      tutorialButtonHovered = true;
    } else {
      tutorialButtonHovered = false;
    }
  } else {
    tutorialButtonHovered = false;
  }
}
