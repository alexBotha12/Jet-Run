let setdata = true;

let dimensionWarningAccepted = false;
let dimensionWarning = false;
let warningButtonHovered = false;

let player;
let hitmovementCount = 0;

let startsfx;

let myFont;

// for the pause menu for endless vs levels
let comeFromEndless = false;
let comeFromLevels = false;

// declaring images
let img;
let img4;
let img2;
let img3;
let img5;
let skyscraperimg;
let clocktowerimg;
let warehouseimg;
let background1;
let stalagmite;
let stalagtite;
let menuBg;
let blueSky;
let windmill;
let img10;
let redX;
let returnSymbol;
let restartSymbol;
let playButton;
let dashIcon;
let healIcon;
let backgroundsmallBuildings;
let backgroundlargeBuildings;
let clouds;
let mountains;
let sunrisebgL;
let sunrisebgR;
let resetsymbol;
let leaderboardButton;
let overshadow;
let coinImg;
let coinCount = 0;
let coinCounter = 0;
let totalCoins = 0;

let grassyFgHills;
let grassyBgHills;
let grassyFrontMountains;
let grassyBgMountains;
let grassyClouds;
let grassySky;

let grassyFgHills2;
let grassyBgHills2;
let grassyFrontMountains2;
let grassyBgMountains2;
let grassyClouds2;

let nightSkyLeft;
let caveRoofLeft;
let RockyFloor1Left;
let rockyFloor2Left;
let rockyFloor3Left;
let rockyFloor4Left;
let bridgeLeft;

let nightSkyRight;
let caveRoofRight;
let RockyFloor1Right;
let rockyFloor2Right;
let rockyFloor3Right;
let rockyFloor4Right;
let bridgeRight;
//

let overshadowSet = false;
let overshadowSetPause = false;
let overshadowSetwinScreen = false;

let sunHeight = 0;

let obstacleLimit = 0;

// declaring values for dynamic obstacles
let enemy;
let enemychance = 2;
let enemies = [];
let enemiesNoSpawn = 0;
let enemiesRate = 25;
let counterForEnemies = 0;
let enemiesCooldown = 5000;
let enemiesAreSpawning = true;
let setTimerForEnemyChange = true;
let enemychanceCount = 0;
let enemymoveAmount = 6;
//

// declaring values for static obstacles
let obstacle;
let obstacles = [];
let buildingMoveAmount = 5;
//

// declaring values for bullets
let bullet;
let bullets = [];
//

// declaring values for coins
let coin;
let coins = [];
let coinYSpawn = 0;
let coinTimer = 8000;
let timeforCoinsEndless = true;
let timeforCoinsLevels = true;

// declaring sound effects
let bulletsfx;
let damagesfx;
let dashsfx;
let gameOversfx;
let menu_selectsfx;
let setSelectSfx = false;
let playSelectSfx = false;
//

// Values for button hover sfx
let menuSfxCount = 0;
let deathscreenSfxCount = 0;
let pauseMenuSfxCount = 0;
let levelSelectSfxCount = 0;
let winScreenSfxCount = 0;
let settingsSfxCount = 0;
//

// declaring variables for sound effects
let healsfx;
let scoreMilestoneSfx;
let scoreSfxPlayed = false;
let backgroundMusic1;
let loopSong = true;
let statsSound1;
let statsSound2;
let statsSound3;
let statsSound4;
let deathScreenCounter = 0;
let firstplayed = false;
let secondplayed = false;
let thirdplayed = false;
let fourthplayed = false;
let fifthplayed = false;
let sixthplayed = false;
let coinCollected;
let powerupPickup;
let mainMenuMusic;
let loopMenuMusic = true;
let click;

let level1Music;
let level2Music;
let level3Music;
//

let menuMusicIsPlaying = false;

// jokes for death screen
let jokes = [
  "I mean you tried...",
  "ur washed icl...",
  "what the frick man",
  "unlucky lol",
  "ha ha ha ha ha",
  "you're reported buddy",
];

let chooseJoke = Math.floor(Math.random() * 6);
//

let playGameOverSound = true;

// values for buildings rate of spawn
let timeForBuilding = true;
let drawCount = 0;
let countDown = 5000;
let subValue = 2;
let buildingFrame = 0;
//

let isLooping = true;

// values for powerups
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
let powerUpsUsed = 0;
let unusedPowerUps = 0;
//

// Values for the score
let score = 0;
let totalScore = 0;
let scoreCount = 0;
let score_mul = 0;
let scoreCalculated = false;
let hiddenscore;
let scoreboom;
let scoreExplosions = [];
let explosionAdded = false;
//

// Variables for the background of endless
let backgroundFrame;
let backgroundFrames = [];
let backgroundFrameCount = 0;
let backgroundSet = false;

// variables for detectin button hovers
// Main Menu
let menubutton1Hovered = false;
let menubutton2Hovered = false;
let menubutton3Hovered = false;
let menubutton4Hovered = false;
let menubutton5Hovered = false;
let noMenuButtons = true;
//

// Death Screen
let deathscreenbutton1Hovered = false;
let deathscreenbutton2Hovered = false;
let deathscreenbutton3Hovered = false;
let noDeathscreenButtons = true;
//

// Win Screen
let winscreenbutton1Hovered = false;
let winscreenbutton2Hovered = false;
let winscreenbutton3Hovered = false;
let noWinscreenButtons = true;

// Pause Menu
let pauseMenubutton1Hovered = false;
let pauseMenubutton2Hovered = false;
let pauseMenubutton3Hovered = false;
let noPauseMenuButtons = true;
//

// Level Select Window
let levelSelectButton1Hovered = false;
let levelSelectButton2Hovered = false;
let levelSelectButton3Hovered = false;
let levelSelectButton4Hovered = false;
let noLevelSelectButtons = true;
//

// Settings Window
let settingsButton1Hovered = false;
let settingsButton2Hovered = false;
let settingsButton3Hovered = false;
let settingsButton4Hovered = false;
let noSettingsButtons = true;
//

// sliders for the settings
let gameSfxSlider;
let otherSfxSlider;
let bgMusicSlider;
let masterVolSlider;
let fpsSlider;

let gameSfxSaved = 50;
let otherSfxSaved = 50;
let bgMusicSaved = 50;
let masterVolSaved = 50;
let fpsSaved = 60;

let applyAudioSettings = false;
let applyVideoSettings = false;

let levelNames = ["Low Fields", "The Caverns", "Elaris City"];

let menuID = 0;

console.log("Don't even try it buddy...");

// preload function for images and audio effects
function preload() {
  img = loadImage("images/player.png");
  img2 = loadImage("images/small enemy plane.png");
  img3 = loadImage("images/enemy medium plane.png");
  img4 = loadImage("images/big enemy plane new vers.png");
  img5 = loadImage("images/medium building.png");
  skyscraperimg = loadImage("images/skyscrapers.png");
  clocktowerimg = loadImage("images/clocktower.png");
  warehouseimg = loadImage("images/warehouse.png");
  windmill = loadImage("images/windmill.png");
  stalagmite = loadImage("images/STALAGMITE.png");
  stalagtite = loadImage("images/STALAGTITE.png");
  background1 = loadImage("images/pixil-frame-0.png");
  blueSky = loadImage("images/blue sky.png");
  img10 = loadImage("images/rah2.png");
  redX = loadImage("images/my red X.png");
  returnSymbol = loadImage("images/return button.png");
  restartSymbol = loadImage("images/restart.png");
  leaderboardButton = loadImage("images/leaderboard button.png");
  dashIcon = loadImage("images/dash icon-5.png");
  healIcon = loadImage("images/heart icon.png");
  menuBg = loadImage("images/menuBg.png");
  backgroundsmallBuildings = loadImage("images/background small buildings.png");
  backgroundlargeBuildings = loadImage("images/background Large buildings.png");
  clouds = loadImage("images/clouds.png");
  mountains = loadImage("images/mountains.png");
  sunrisebgL = loadImage("images/sunrise background left new.png");
  sunrisebgR = loadImage("images/sunrise background right new.png");
  overshadow = loadImage("images/overshadow gradient.png");
  coinImg = loadImage("images/coin.png");
  playButton = loadImage("images/play button.png");

  // first level background elements
  grassyFgHills = loadImage("images/grassy bg left side/fg hills.png");
  grassyBgHills = loadImage("images/grassy bg left side/bg hills.png");
  grassyFrontMountains = loadImage(
    "images/grassy bg left side/front mountains.png"
  );
  grassyBgMountains = loadImage(
    "images/grassy bg left side/background mountains.png"
  );
  grassyClouds = loadImage("images/grassy bg left side/clouds 2.png");
  grassySky = loadImage("images/grassy bg left side/sky2.png");

  grassyFgHills2 = loadImage("images/grassy bg right side/fg hills 2.png");
  grassyBgHills2 = loadImage("images/grassy bg right side/bg hills 2.png");
  grassyFrontMountains2 = loadImage(
    "images/grassy bg right side/front mountains 2.png"
  );
  grassyBgMountains2 = loadImage(
    "images/grassy bg right side/background mountains 2.png"
  );
  grassyClouds2 = loadImage("images/grassy bg right side/clouds 3.png");

  // second level background elements
  nightSkyLeft = loadImage("images/cavern bg/left/night sky left.png");
  caveRoofLeft = loadImage("images/cavern bg/left/cave roof left.png");
  rockyFloor1Left = loadImage("images/cavern bg/left/rocky floor 1 left.png");
  rockyFloor2Left = loadImage("images/cavern bg/left/rocky floor 2 left.png");
  rockyFloor3Left = loadImage("images/cavern bg/left/rocky floor 3 left.png");
  rockyFloor4Left = loadImage("images/cavern bg/left/rocky floor 4 left.png");
  bridgeLeft = loadImage("images/cavern bg/left/bridge left.png");

  nightSkyRight = loadImage(
    "images/cavern bg/right/correct night sky right.png"
  );
  caveRoofRight = loadImage("images/cavern bg/right/cave roof right.png");
  rockyFloor1Right = loadImage(
    "images/cavern bg/right/rocky floor 1 right.png"
  );
  rockyFloor2Right = loadImage(
    "images/cavern bg/right/rocky floor 2 right.png"
  );
  rockyFloor3Right = loadImage(
    "images/cavern bg/right/rocky floor 3 right.png"
  );
  rockyFloor4Right = loadImage(
    "images/cavern bg/right/rocky floor 4 right.png"
  );
  bridgeRight = loadImage("images/cavern bg/right/bridge right.png");

  bulletsfx = loadSound("audio/shot.mp3");
  damagesfx = loadSound("audio/damage.wav");
  dashsfx = loadSound("audio/dashsfx.wav");
  gameOversfx = loadSound("audio/buzzor.mp3");
  menu_selectsfx = loadSound("audio/select1.wav");
  healsfx = loadSound("audio/heal.wav");
  scoreMilestoneSfx = loadSound("audio/score milestone.mp3");
  backgroundMusic1 = loadSound("audio/game music 1.wav");
  statsSound1 = loadSound("audio/punch.wav");
  statsSound2 = loadSound("audio/kick.wav");
  statsSound3 = loadSound("audio/whack.wav");
  statsSound4 = loadSound("audio/fard.mp3");
  coinCollected = loadSound("audio/coins.mp3");
  powerupPickup = loadSound("audio/powerupPickup.wav");
  mainMenuMusic = loadSound("audio/main menu music.mp3");
  click = loadSound("audio/mouse clicked.wav");

  // loading the background music for the levels
  level1Music = loadSound("audio/bgmusiclvl1.wav");
  level2Music = loadSound("audio/level 2 bg music.mp3");
  level3Music = loadSound("audio/level 3 bg music.mp3");

  myFont = loadFont("pixeboy-font/Pixeboy-z8XGD.ttf");
}

// setup
function setup() {
  if (windowHeight > 940) {
    createCanvas(windowWidth - 10, 940);
  } else {
    createCanvas(windowWidth - 10, windowHeight - 100);
  }
  player = new Player(width / 8, height / 2, 35, 10);
  let storeX = player.x;
  startPos = width;
  bulletsfx.setVolume(0.3);
  damagesfx.setVolume(0.12);
  dashsfx.setVolume(0.15);
  gameOversfx.setVolume(0.4);
  healsfx.setVolume(0.2);
  backgroundMusic1.setVolume(0.2);
  scoreMilestoneSfx.setVolume(0.2);
  menu_selectsfx.setVolume(0.3);
  statsSound1.setVolume(0.4);
  statsSound2.setVolume(0.4);
  statsSound3.setVolume(0.4);
  statsSound4.setVolume(0.4);
  coinCollected.setVolume(0.2);
  powerupPickup.setVolume(0.3);
  mainMenuMusic.setVolume(0.25);
  level1Music.setVolume(0.3);
  level2Music.setVolume(0.3);
  level3Music.setVolume(0.3);
  click.setVolume(0.3);

  // creating the sliders for the settings, and positioning them off screen
  gameSfxSlider = createSlider(0, 100, 50, 1);
  otherSfxSlider = createSlider(0, 100, 50, 1);
  bgMusicSlider = createSlider(0, 100, 50, 1);
  masterVolSlider = createSlider(0, 100, 50, 1);
  fpsSlider = createSlider(30, 60, 60, 1);

  gameSfxSlider.position(-500, -500);
  otherSfxSlider.position(-500, -450);
  bgMusicSlider.position(-500, -400);
  masterVolSlider.position(-500, -350);
  fpsSlider.position(-500, -300);

  powerUpsStartPos = width / 2 + width / 3;
}

// draw function
function draw() {
  if (playSelectSfx == true) {
    menu_selectsfx.play();
    playSelectSfx = false;
  }

  //console.log(player.x);

  textFont(myFont);
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

  if (menuID == 4) {
    levelSelect();
  }

  if (menuID == 5) {
    levelMode();
  }

  if (menuID == 6) {
    winScreen();
  }

  if (menuID == 7) {
    settings();
  }

  if (menuID == 8) {
    tutorial();
  }

  if (menuID != 1) {
    backgroundMusic1.stop();
  }
  if (menuID != 5) {
    if (levelID == 1) {
      level1Music.stop();
    } else if (levelID == 2) {
      level2Music.stop();
    } else if (levelID == 3) {
      level3Music.stop();
    }
  }

  if (menuID == 0 || menuID == 4 || menuID == 7 || menuID == 8) {
    if (loopMenuMusic == true) {
      mainMenuMusic.loop();
      loopMenuMusic = false;
    }
  }

  if (menuID != 0 && menuID != 4 && menuID != 7 && menuID != 8) {
    mainMenuMusic.stop();
  }
}

//

//

//

//

// Endless gamemode
function endless() {
  background(150);
  // setting all the values
  if (setdata == true) {
    score = 0;
    totalScore = 0;
    score_mul = 0;
    scoreCount = 0;
    scoreCalculated = false;

    player.health = 100;
    player.x = width / 8;
    player.dy = 0;
    player.y = height / 2;

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
    firstplayed = false;
    secondplayed = false;
    thirdplayed = false;
    fourthplayed = false;
    fifthplayed = false;
    sixthplayed = false;

    menuMusicIsPlaying = false;

    overshadowSetPause = false;

    coins = [];
    timeforCoins = true;
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

    setMenuSelectSfx = true;
    setdata = false;
  }

  // to have the right buttons for the death screen / pause menu
  comeFromEndless = true;

  // pausing the menu music
  mainMenuMusic.stop();

  if (sunHeight >= -200) {
    sunHeight -= 0.025;
    // sunHeight -= 3;
  }
  image(sunrisebgL, 0, sunHeight, 960, 940);
  image(sunrisebgR, 959, sunHeight, 960, 940);
  image(sunrisebgL, 1918, sunHeight, 960, 940);

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

    backgroundSet = true;
    backgroundFrameCount += 5;
  }

  for (let i = 0; i < backgroundFrames.length; i++) {
    backgroundFrames[i].draw();
    backgroundFrames[i].move();
    if (backgroundFrames[i].x <= -960 && backgroundFrames[i].layerID == 4) {
      backgroundFrames[i].x = 2876;
    } else if (
      backgroundFrames[i].x <= -960 &&
      backgroundFrames[i].layerID == 3
    ) {
      backgroundFrames[i].x = 2876;
    } else if (
      backgroundFrames[i].x <= -960 &&
      backgroundFrames[i].layerID == 2
    ) {
      backgroundFrames[i].x = 2876;
    } else if (
      backgroundFrames[i].x <= -960 &&
      backgroundFrames[i].layerID == 1
    ) {
      backgroundFrames[i].x = 2876;
    }
  }

  // powerup counter
  powerUpCounter++;
  // shortening the cooldown between enemy bursts
  if (enemiesCooldown > 1500) {
    enemiesCooldown -= 0.5;
  }

  //

  //

  //

  //

  //

  //

  //

  // coins functions
  if (menuID == 1) {
    if (timeforCoinsEndless == true) {
      setTimeout(coinSpawn, coinTimer);
      timeforCoinsEndless = false;
    }
  }
  fill("white");
  // onscreen display for coins
  strokeWeight(1);
  textSize(35);
  text("COINS: " + totalCoins, 200, 25);

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

  if (timeForBuilding == true) {
    setTimeout(generateBuildings, countDown);
    timeForBuilding = false;
  }
  // offscreen removal for the buildings
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
        player.x = player.x - 10;
        hitmovementCount = 0;
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
  if (key == "f" && (menuID == 1 || menuID == 5)) {
    bullet = new Bullet(width, height / 2);
    bullets.push(bullet);
    bulletsfx.play();
  }

  if (key == "d" || key == "D")  {
    if (
      player.dashed == false &&
      (keyIsDown(UP_ARROW) == true || keyIsDown(DOWN_ARROW) == true)
    ) {
      player.dash();
      player.dashed = false;
    }
  }

  // if (key == "e") {
  //   powerUpSet = false;
  //   for (let i = 0; i < powerUps.length; i++) {
  //     if (powerUps[i] == 0 && powerUpSet == false) {
  //      powerUpSet = true;
  //       powerUps[i] = 1;
  //     }
  //   }
  // }

  // if (key == "g") {
  //   powerUpSet = false;
  //   for (let i = 0; i < powerUps.length; i++) {
  //     if (powerUps[i] == 0 && powerUpSet == false) {
  //       powerUpSet = true;
  //       powerUps[i] = 2;
  //     }
  //   }
  // }

  if ((key == "h" || key == "H") && (menuID == 1 || menuID == 5)) {
    if (player.healed == false) {
      player.heal();
      player.healed = false;
    }
  }

  // every instance where space bar starts or continues the game
  if (key == " ") {
    if (menuID == 0) {
      menuID = 1;
    } else if (menuID == 2) {
      setdata = true;
      menuID = 1;
    } else if (menuID == 3) {
      menuID = 1;
      overshadowSetPause = false;
      textSize(35);
    }
  }

  if (keyCode == ESCAPE && (menuID == 1 || menuID == 5)) {
    backgroundMusic1.pause();
    menuID = 3;
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
  // main menu
  if (menuID == 0) {
    if (mouseX > 10 && mouseX < width / 3) {
      if (mouseY > height / 2 - 25 && mouseY < height / 2 + 65) {
        menuID = 1;
        click.play();
      }
    }
    // if (mouseX > 10 && mouseX < width / 3) {
    // }

    // close game button
    if (
      mouseX > width - width / 12 &&
      mouseX < width - width / 12 + width / 12 - 20
    ) {
      if (
        mouseY > height / 2 - 25 + 240 &&
        mouseY < height / 2 - 25 + 240 + 90
      ) {
        click.play();
        window.close();
      }
    }

    // level select
    if (mouseX > 10 && mouseX < 10 + width / 3) {
      if (mouseY > height / 2 - 25 + 120 && mouseY < height / 2 - 25 + 190) {
        menuID = 4;
        click.play();
      }
    }

    // settings menu
    if (mouseX > 10 && mouseX < 10 + width / 7) {
      if (mouseY > height / 2 - 25 + 240 && mouseY < height / 2 + 65 + 240) {
        menuID = 7;
        click.play();
      }
    }

    // dimension warning thingy
    if (dimensionWarningAccepted == false && windowWidth < 1920) {
      if (
        mouseX > width / 2 - width / 20 &&
        mouseX < width / 2 - width / 20 + width / 10
      ) {
        if (mouseY > height / 1.3333 - 80 && mouseY < height / 1.3333 - 20) {
          click.play();
          dimensionWarningAccepted = true;
        }
      }
    }

    // tutorial window
    if (
      mouseX > width / 19 + width / 7 &&
      mouseX < width / 19 + width / 7 + width / 7
    ) {
      if (
        mouseY > height / 2 - 25 + 240 &&
        mouseY < height / 2 - 25 + 240 + 90
      ) {
        menuID = 8;
        click.play();
      }
    }
  }

  // death screen
  if (menuID == 2) {
    if (mouseX > width / 4 && mouseX < width / 4 + width / 10) {
      if (
        mouseY > height / 2 + height / 4 + height / 35 &&
        mouseY < height / 2 + height / 4 + height / 35 + height / 6
      ) {
        if (comeFromEndless == true) {
          setdata = true;
          menuID = 1;
          click.play();
        } else if (comeFromLevels == true) {
          menuID = 5;
          setdataForLevelMode = true;
          click.play();
        }
      }
    }

    // back to the main menu from death screen
    if (
      mouseX > width / 2 - width / 20 &&
      mouseX < width / 2 - width / 20 + width / 10
    ) {
      if (
        mouseY > height / 2 + height / 4 + height / 35 &&
        mouseY < height / 2 + height / 4 + height / 35 + height / 6
      ) {
        setdata = true;
        menuID = 0;
        loopMenuMusic = true;
        click.play();
      }
    }

    if (
      mouseX > width / 1.3333 - width / 10 &&
      mouseX < width / 1.3333 - width / 10 + width / 10
    ) {
      if (
        mouseY > height / 2 + height / 4 + height / 35 &&
        mouseY < height / 2 + height / 4 + height / 35 + height / 6
      ) {
        menuID = 7;
        click.play();
        loopMenuMusic = true;
      }
    }
  }

  // pause menu
  if (menuID == 3) {
    // exit button
    if (
      mouseX > width / 3 - width / 10 &&
      mouseX < width / 3 - width / 10 + width / 15
    ) {
      if (
        mouseY > height / 2 - height / 16 &&
        mouseY < height / 2 + height / 16
      ) {
        menuID = 0;
        loopMenuMusic = true;
        // loopSong = true;
        setdata = true;
        click.play();
      }
      // resume button
    } else if (
      mouseX > width / 3 + width / 10 + width / 30 &&
      mouseX < width / 3 + width / 10 + width / 30 + width / 15
    ) {
      if (
        mouseY > height / 2 - height / 16 &&
        mouseY < height / 2 + height / 16
      ) {
        if (comeFromEndless == true) {
          menuID = 1;
          backgroundMusic1.play();
          overshadowSetPause = false;
          // loopSong = true;
          click.play();
        } else if (comeFromLevels == true) {
          menuID = 5;
          overshadowSetPause = false;
          setBackGroundMusic = true;
          click.play();
        }
      }
      // restart button
    } else if (
      (mouseX > width / (5 / 3) + width / 10) &
      (mouseX < width / (5 / 3) + width / 10 + width / 15)
    ) {
      if (
        mouseY > height / 2 - height / 16 &&
        mouseY < height / 2 + height / 16
      ) {
        if (comeFromEndless == true) {
          setdata = true;
          comeFromLevels = false;
          menuID = 1;
          click.play();
          // comeFromEndless = true;
        } else if (comeFromLevels == true) {
          setdataForLevelMode = true;
          comeFromEndless = false;
          menuID = 5;
          click.play();
          // comeFromLevels = true;
        }
      }
    }
  }

  // level select
  if (menuID == 4) {
    if (mouseX > 10 && mouseX < 100) {
      if (mouseY > 10 && mouseY < 100) {
        menuID = 0;
        click.play();
      }
    }

    for (let i = 0; i < 3; i++) {
      if (mouseX > (i * width) / 3 + 260 && mouseX < (i * width) / 3 + 350) {
        if (mouseY > height / 5 && mouseY < height / 5 + 90) {
          setdataForLevelMode = true;
          menuID = 5;
          if (i == 0) {
            levelID = 1;
            click.play();
          }
          if (i == 1) {
            levelID = 2;
            click.play();
          }
          if (i == 2) {
            levelID = 3;
            click.play();
          }
        }
      }
    }
  }

  // win screen
  if (menuID == 6) {
    // restart button
    if (mouseX > width / 4 && mouseX < width / 4 + width / 10) {
      if (
        mouseY > height / 2 + height / 4 + height / 35 &&
        mouseY < height / 2 + height / 4 + height / 35 + height / 6
      ) {
        setdataForLevelMode = true;
        distanceInLevel = 0;
        menuID = 5;
        click.play();
      }
    }

    // exit button
    if (
      mouseX > width / 2 - width / 20 &&
      mouseX < width / 2 - width / 20 + width / 10
    ) {
      if (
        mouseY > height / 2 + height / 4 + height / 35 &&
        mouseY < height / 2 + height / 4 + height / 35 + height / 6
      ) {
        setdata = true;
        menuID = 0;
        loopMenuMusic = true;
        click.play();
      }
    }

    if (
      mouseX > width / 1.3333 - width / 10 &&
      mouseX < width / 1.3333 - width / 10 + width / 10
    ) {
      if (
        mouseY > height / 2 + height / 4 + height / 35 &&
        mouseY < height / 2 + height / 4 + height / 35 + height / 6
      ) {
        menuID = 7;
        click.play();
        loopMenuMusic = true;
      }
    }
  }

  // settings menu
  if (menuID == 7) {
    if (mouseX > 10 && mouseX < 100) {
      if (mouseX > 10 && mouseY < 100) {
        menuID = 0;
        // moving sliders out the way
        masterVolSlider.position(-500, -500);
        gameSfxSlider.position(-500, -450);
        otherSfxSlider.position(-500, -400);
        bgMusicSlider.position(-500, -350);
        fpsSlider.position(-500, -300);

        click.play();
      }
    }

    if (mouseX > width / 4 + 20 && mouseX < width / 4 + 80) {
      if (mouseY > height / 1.3333 - 50 && mouseY < height / 1.3333 - 10) {
        masterVolSlider.value(50);
        gameSfxSlider.value(50);
        otherSfxSlider.value(50);
        bgMusicSlider.value(50);
        click.play();
      }
    }

    if (mouseX > width / 4 + 10 && mouseX < width / 4 + 70) {
      if (mouseY > height / 1.3333 - 100 && mouseY < height / 1.3333 - 60) {
        click.play();
        applyAudioSettings = true;
      }
    }

    if (mouseX > width / 1.3333 - 70 && mouseX < width / 1.3333 - 10) {
      if (mouseY > height / 1.3333 - 50 && mouseY < height / 1.3333 - 10) {
        click.play();
        applyVideoSettings = true;
      }
    }
  }

  // tutorial page
  if (menuID == 8) {
    if (mouseX > 10 && mouseX < 100) {
      if (mouseY > 10 && mouseY < 100) {
        menuID = 0;
        click.play();
      }
    }
  }
}

//

//

//

//

//

// main menu
function mainMenu() {
  // background("#34a1eb");
  // background("#4287f5");
  image(menuBg, 0, 0, 960, 980);
  image(menuBg, 960, 0, 960, 980);
  image(menuBg, 1920, 0, 960, 980);
  image(menuBg, 2880, 0, 960, 980);

  //if (menuMusicIsPlaying == false) {
  //  mainMenuMusic.play();
  //  menuMusicIsPlaying = true;
  //}

  if (playSelectSfx == true) {
    menu_selectsfx.play();
    playSelectSfx = false;
  }

  buttonHoverSfx();

  // drawing the buttons
  fill("white");
  stroke("black");
  strokeWeight(3);

  rect(10, height / 8, width / 3, 120, 5);
  textSize(85);
  fill("black");
  stroke("white");
  text("JET RUN", width / 12 + 20, height / 8 + height / 12);
  fill("white");
  stroke("black");

  rect(10, height / 2 - 25, width / 3, 90, 5);

  rect(10, height / 2 - 25 + 120, width / 3, 90, 5);

  rect(10, height / 2 - 25 + 240, width / 7, 90, 5);

  rect(width / 19 + width / 7, height / 2 - 25 + 240, width / 7, 90, 5);

  rect(width - width / 12 + 20, height / 2 - 20 + 240, 85, 85, 5);

  // adding text
  fill("black");
  strokeWeight(1);
  textSize(((height / 15) * width) / 2000);
  text("Play Endless", 50, height / 2 + 35);
  text("Level Select", 50, height / 2 + 35 + 120);
  textSize(height / 35);
  strokeWeight(0.5);
  text("Settings", 27, height / 2 + 22 + 244);
  text("Tutorial", width / 19 + width / 7 + 25, height / 2 - 25 + 290);
  image(redX, width - width / 12 + 20, height / 2 - 20 + 240, 85, 85);

  // lighting up edges if the mouse is on the button

  // play endless
  if (mouseX > 10 && mouseX < width / 3) {
    if (mouseY > height / 2 - 25 && mouseY < height / 2 + 65) {
      stroke("white");
      strokeWeight(4);
      noFill();
      rect(10, height / 2 - 25, width / 3, 90, 5);

      menubutton1Hovered = true;
    } else {
      menubutton1Hovered = false;
    }
  } else {
    menubutton1Hovered = false;
  }

  // level select
  if (mouseX > 10 && mouseX < width / 3) {
    if (mouseY > height / 2 - 25 + 120 && mouseY < height / 2 + 65 + 120) {
      stroke("white");
      strokeWeight(4);
      noFill();
      rect(10, height / 2 - 25 + 120, width / 3, 90, 5);

      menubutton2Hovered = true;
    } else {
      menubutton2Hovered = false;
    }
  } else {
    menubutton2Hovered = false;
  }

  // settings
  if (mouseX > 10 && mouseX < 10 + width / 7) {
    if (mouseY > height / 2 - 25 + 240 && mouseY < height / 2 + 65 + 240) {
      stroke("white");
      strokeWeight(4);
      noFill();
      rect(10, height / 2 - 25 + 240, width / 7, 90, 5);

      menubutton3Hovered = true;
    } else {
      menubutton3Hovered = false;
    }
  } else {
    menubutton3Hovered = false;
  }

  // exit button
  if (mouseX > width - width / 12 + 20 && mouseX < width - width / 12 + 105) {
    if (mouseY > height / 2 - 25 + 240 && mouseY < height / 2 - 25 + 240 + 90) {
      stroke("white");
      strokeWeight(4);
      noFill();
      rect(width - width / 12 + 20, height / 2 - 20 + 240, 85, 85, 5);
      menubutton4Hovered = true;
    } else {
      menubutton1Hovered = false;
    }
  } else {
    menubutton4Hovered = false;
  }

  // tutorial
  if (
    mouseX > width / 19 + width / 7 &&
    mouseX < width / 19 + width / 7 + width / 7
  ) {
    if (mouseY > height / 2 - 25 + 240 && mouseY < height / 2 - 25 + 240 + 90) {
      noFill();
      stroke("white");
      strokeWeight(4);
      rect(width / 19 + width / 7, height / 2 - 25 + 240, width / 7, 90, 5);
      menubutton5Hovered = true;
    } else {
      menubutton5Hovered = false;
    }
  } else {
    menubutton5Hovered = false;
  }

  // resolution warning to player
  if (width < 1920 && dimensionWarningAccepted == false) {
    dimensionWarning = true;

    // casting shadow over menu in the background
    image(overshadow, 0, 0, 960, 980);
    image(overshadow, 959, 0, 960, 980);
    image(overshadow, 1918, 0, 960, 980);

    fill("white");
    stroke("black");
    textSize(65);
    strokeWeight(4);
    rect(width / 4, height / 4, width / 2, height / 2, 5);
    fill("red");
    text("WARNING", width / 2 - width / 14, height / 4 + 40);
    textSize(25);
    fill("black");
    strokeWeight(1);
    text(
      "the width of your game window is less than 1920 pixels. This",
      width / 4 + width / 12,
      height / 4 + 95
    );
    text(
      " May cause many aspects of the game such as text, Backgrounds,",
      width / 4 + width / 12,
      height / 4 + 125
    );
    text(
      "and several others, to be drawn out of place. It is highly",
      width / 4 + width / 12,
      height / 4 + 155
    );
    text(
      "recommended to zoom out a bit, and then reload the page.",
      width / 4 + width / 12,
      height / 4 + 185
    );
    fill("white");
    strokeWeight(4);
    rect(width / 2 - width / 20, height / 1.3333 - 80, width / 10, 60, 5);
    text("okay pal...", width / 2 - width / 20 + 30, height / 1.3333 - 40);
    if (
      mouseX > width / 2 - width / 20 &&
      mouseX < width / 2 - width / 20 + width / 10
    ) {
      if (mouseY > height / 1.3333 - 80 && mouseY < height / 1.3333 - 20) {
        noFill();
        stroke("white");
        strokeWeight(4);
        rect(width / 2 - width / 20, height / 1.3333 - 80, width / 10, 60, 5);
        warningButtonHovered = true;
      } else {
        warningButtonHovered = false;
      }
    } else {
      warningButtonHovered = false;
    }
  } else {
    dimensionWarning = false;
  }
}

//

//

//

// score calculation
function calculateScore() {
  if (comeFromLevels == true) {
    score = distanceInLevel;
  }
  for (let i = 0; i < powerUps.length; i++) {
    if (powerUps[i] != 0) {
      unusedPowerUps++;
    }
  }
  score_mul = 1;
  score_mul += unusedPowerUps * 0.2;

  totalScore = Math.floor(score * score_mul);
  totalScore = totalScore + totalCoins * 5;

  return totalScore;
}

//

//

//

//

//

// death screen function
function deathScreen() {


  deathScreenCounter++;
  backgroundMusic1.stop();
  if (playGameOverSound == true) {
    gameOversfx.play();
    playGameOverSound = false;
  }

  // button hover sound effect played here
  if (playSelectSfx == true) {
    menu_selectsfx.play();
    playSelectSfx = false;
  }

  buttonHoverSfx();

  // calculate score here
  if (scoreCalculated == false) {
    calculateScore();
    scoreCalculated = true;
  }

  if (overshadowSet == false) {
    image(overshadow, 0, 0, 960, windowHeight);
    image(overshadow, 959, 0, 960, windowHeight);
    image(overshadow, 1918, 0, 960, windowHeight);
    overshadowSet = true;
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
  text("you died!", width / 3 + width / 15, height / 10);

  // text for the stats
  fill("black");
  textSize((width / height) * 20);
  strokeWeight(width / height - 0.8);
  text("attempt stats", width / 4 + width / 20, height / 4 + height / 20);
  textSize((width / height) * 15);
  if (deathScreenCounter > 20) {
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
  if (deathScreenCounter > 40) {
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

  if (deathScreenCounter > 60) {
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

  if (deathScreenCounter > 80) {
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

  if (deathScreenCounter == 95) {
    if (fifthplayed == false) {
      statsSound3.play();
      fifthplayed = true;
    }
  }
  if (deathScreenCounter > 100) {
    text(
      "total score: " + totalScore,
      width / 4 + width / 20,
      height / 4 + height / 20 + height / 10 + (4 * height) / 30
    );
  }

  if (sixthplayed == false && deathScreenCounter == 96) {
    statsSound4.play();
    sixthplayed = true;
  }

  if (deathScreenCounter > 140) {
    textSize(45);
    text(jokes[chooseJoke], width / 2 + width / 50, height / 4 + height / 8);

    if (chooseJoke == 0) {
      text("i guess", width / 2 + width / 50, height / 4 + height / 8 + 35);
    }
    if (chooseJoke == 2) {
      text(
        "this game is rigged!",
        width / 2 + width / 50,
        height / 4 + height / 8 + 35
      );
    }
    if (chooseJoke == 5) {
      text(
        "my dad owns fortnite",
        width / 2 + width / 50 - 5,
        height / 4 + height / 8 + 35
      );
    }
    if (chooseJoke == 4) {
      text("ha ha ha ha", width / 2 + width / 50, height / 4 + height / 8 + 35);
    }
  }

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
      deathscreenbutton1Hovered = true;
    } else {
      deathscreenbutton1Hovered = false;
    }
  } else {
    deathscreenbutton1Hovered = false;
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
      deathscreenbutton2Hovered = true;
    } else {
      deathscreenbutton2Hovered = false;
    }
  } else {
    deathscreenbutton2Hovered = false;
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
      deathscreenbutton3Hovered = true;
    } else {
      deathscreenbutton3Hovered = false;
    }
  } else {
    deathscreenbutton3Hovered = false;
  }
}

//

//

//

//

//

//

function pauseMenu() {


  if (overshadowSetPause == false) {
    image(overshadow, 0, 0, 960, windowHeight);
    image(overshadow, 959, 0, 960, windowHeight);
    image(overshadow, 1918, 0, 960, windowHeight);
    overshadowSetPause = true;
  }
  strokeWeight(3);
  textSize(100);
  stroke("black");
  fill("white");
  text("GAME PAUSED", width / 3 + width / 20, height / 10);
  fill("white");
  stroke("white");
  strokeWeight("3");
  line(400, 150, width - 400, 150);
  line(600, 200, width - 800, 200);
  line(width - 750, 200, width - 600, 200);
  stroke("black");

  buttonHoverSfx();

  // button hover sound effect played here
  if (playSelectSfx == true) {
    menu_selectsfx.play();
    playSelectSfx = false;
  }

  // buttons for the pause menu drawn here
  rect(
    width / 3 - width / 10,
    height / 2 - height / 16,
    width / 15,
    height / 8,
    5
  );
  rect(
    width / 3 + width / 10 + width / 30,
    height / 2 - height / 16,
    width / 15,
    height / 8,
    5
  );
  rect(
    width / (5 / 3) + width / 10,
    height / 2 - height / 16,
    width / 15,
    height / 8,
    5
  );

  image(
    returnSymbol,
    width / 3 - width / 10,
    height / 2 - height / 12,
    width / 15,
    height / 6
  );
  image(
    playButton,
    width / 3 + width / 10 + width / 30,
    height / 2 - height / 14,
    width / 15,
    height / 7
  );
  image(
    restartSymbol,
    width / (5 / 3) + width / 10,
    height / 2 - height / 16,
    width / 15,
    height / 8
  );

  // button outlines upon hover
  if (
    mouseX > width / 3 - width / 10 &&
    mouseX < width / 3 - width / 10 + width / 15
  ) {
    if (
      mouseY > height / 2 - height / 16 &&
      mouseY < height / 2 + height / 16
    ) {
      noFill();
      stroke("white");
      rect(
        width / 3 - width / 10,
        height / 2 - height / 16,
        width / 15,
        height / 8,
        5
      );
      pauseMenubutton1Hovered = true;
    } else {
      pauseMenubutton1Hovered = false;
    }
  } else {
    pauseMenubutton1Hovered = false;
  }

  if (
    mouseX > width / 3 + width / 10 + width / 30 &&
    mouseX < width / 3 + width / 10 + width / 30 + width / 15
  ) {
    if (
      mouseY > height / 2 - height / 16 &&
      mouseY < height / 2 + height / 16
    ) {
      noFill();
      stroke("white");
      rect(
        width / 3 + width / 10 + width / 30,
        height / 2 - height / 16,
        width / 15,
        height / 8,
        5
      );
      pauseMenubutton2Hovered = true;
    } else {
      pauseMenubutton2Hovered = false;
    }
  } else {
    pauseMenubutton2Hovered = false;
  }

  if (
    (mouseX > width / (5 / 3) + width / 10) &
    (mouseX < width / (5 / 3) + width / 10 + width / 15)
  ) {
    if (
      mouseY > height / 2 - height / 16 &&
      mouseY < height / 2 + height / 16
    ) {
      noFill();
      stroke("white");
      rect(
        width / (5 / 3) + width / 10,
        height / 2 - height / 16,
        width / 15,
        height / 8,
        5
      );
      pauseMenubutton3Hovered = true;
    } else {
      pauseMenubutton3Hovered = false;
    }
  } else {
    pauseMenubutton3Hovered = false;
  }
}

//

//

//

//

//

//
// spawning the coins
function coinSpawn() {
  coinYSpawn = Math.floor(Math.random() * (height - height / 4)) + height / 8;
  for (let i = 0; i <= Math.floor(Math.random() * 4) + 6; i++) {
    coin = new Coin(width + i * 80, coinYSpawn, 48, 48);
    coins.push(coin);
  }

  if (menuID == 1) {
    timeforCoinsEndless = true;
  } else if (menuID == 5) {
    timeforCoinsLevels = true;
  }
}

//

//

//

//

//

// handling the sound effect for hovering on buttons
function buttonHoverSfx() {
  // main menu
  if (menuID == 0) {
    if (dimensionWarning == false) {
      if (
        menubutton1Hovered == false &&
        menubutton2Hovered == false &&
        menubutton3Hovered == false &&
        menubutton4Hovered == false &&
        menubutton5Hovered == false
      ) {
        noMenuButtons = true;
        menuSfxCount = 0;
      } else {
        noMenuButtons = false;
      }

      if (noMenuButtons == false) {
        if (menuSfxCount == 0) {
          playSelectSfx = true;
          menuSfxCount = 1;
        }
      }
    }

    if (dimensionWarning == true) {
      if (
        menubutton1Hovered == false &&
        menubutton2Hovered == false &&
        menubutton3Hovered == false &&
        menubutton4Hovered == false &&
        menubutton5Hovered == false &&
        warningButtonHovered == false
      ) {
        noMenuButtons = true;
        menuSfxCount = 0;
      } else {
        noMenuButtons = false;
      }

      if (noMenuButtons == false) {
        if (menuSfxCount == 0) {
          playSelectSfx = true;
          menuSfxCount = 1;
        }
      }
    }
  }

  // death screen
  if (menuID == 2) {
    if (
      deathscreenbutton1Hovered == false &&
      deathscreenbutton2Hovered == false &&
      deathscreenbutton3Hovered == false
    ) {
      noDeathscreenButtons = true;
      deathscreenSfxCount = 0;
    } else {
      noDeathscreenButtons = false;
    }

    if (noDeathscreenButtons == false) {
      if (deathscreenSfxCount == 0) {
        playSelectSfx = true;
        deathscreenSfxCount = 1;
      }
    }
  }

  // pause menu
  if (menuID == 3) {
    if (
      pauseMenubutton1Hovered == false &&
      pauseMenubutton2Hovered == false &&
      pauseMenubutton3Hovered == false
    ) {
      noPauseMenuButtons = true;
      pauseMenuSfxCount = 0;
    } else {
      noPauseMenuButtons = false;
    }

    if (noPauseMenuButtons == false) {
      if (pauseMenuSfxCount == 0) {
        playSelectSfx = true;
        pauseMenuSfxCount = 1;
      }
    }
  }

  // level select
  if (menuID == 4) {
    if (
      levelSelectButton1Hovered == false &&
      levelSelectButton2Hovered == false &&
      levelSelectButton3Hovered == false &&
      levelSelectButton4Hovered == false
    ) {
      noLevelSelectButtons = true;
      levelSelectSfxCount = 0;
    } else {
      noLevelSelectButtons = false;
    }

    if (noLevelSelectButtons == false) {
      if (levelSelectSfxCount == 0) {
        playSelectSfx = true;
        levelSelectSfxCount = 1;
      }
    }
  }

  // Win Screen
  if (menuID == 6) {
    if (
      winscreenbutton1Hovered == false &&
      winscreenbutton2Hovered == false &&
      winscreenbutton3Hovered == false
    ) {
      noWinscreenButtons = true;
      winScreenSfxCount = 0;
    } else {
      noWinscreenButtons = false;
    }

    if (noWinscreenButtons == false) {
      if (winScreenSfxCount == 0) {
        playSelectSfx = true;
        winScreenSfxCount = 1;
      }
    }
  }

  // settings menu
  if (menuID == 7) {
    if (
      settingsButton1Hovered == false &&
      settingsButton2Hovered == false &&
      settingsButton3Hovered == false &&
      settingsButton4Hovered == false
    ) {
      noSettingsButtons = true;
      settingsSfxCount = 0;
    } else {
      noSettingsButtons = false;
    }

    if (noSettingsButtons == false) {
      if (settingsSfxCount == 0) {
        playSelectSfx = true;
        settingsSfxCount = 1;
      }
    }
  }

  if (menuID == 8) {
    if (tutorialButtonHovered == false) {
      noTutorialButtons = true;
      tutorialSfxCount = 0;
    } else {
      noTutorialButtons = false;
    }

    if (noTutorialButtons == false) {
      if (tutorialSfxCount == 0) {
        playSelectSfx = true;
        tutorialSfxCount = 1;
      }
    }
  }
}

//

//

//

//

//

//

// level select function here
function levelSelect() {

  // setting the background
  image(menuBg, 0, 0, 960, 980);
  image(menuBg, 960, 0, 960, 980);
  image(menuBg, 1920, 0, 960, 980);
  image(menuBg, 2880, 0, 960, 980);

  buttonHoverSfx();

  fill("white");
  stroke("black");
  // title blocks and buttons drawn here
  for (let i = 0; i < 3; i++) {
    rect(10 + (i * width) / 3, height / 5, 240, 90, 5);
    rect((i * width) / 3 + 260, height / 5, 90, 90, 5);
    text(levelNames[i], 20 + (i * width) / 3, height / 5 + 20);
    stroke("white");
    strokeWeight(4);
    line((i * width) / 3 + 470, height / 5, (i * width) / 3 + 470, height - 20);
    line(
      10 + (i * width) / 3,
      height / 5 + 100,
      (i * width) / 3 + 450,
      height / 5 + 100
    );
    stroke("black");
    image(playButton, (i * width) / 3 + 260, height / 5, 90, 90);
  }

  // exit button
  rect(10, 10, 90, 90, 5);
  image(returnSymbol, 10, 10, 90, 90);

  for (let i = 0; i < 3; i++) {
    if (mouseX > (i * width) / 3 + 260 && mouseX < (i * width) / 3 + 350) {
      if (mouseY > height / 5 && mouseY < height / 5 + 90) {
        noFill();
        stroke("white");
        rect((i * width) / 3 + 260, height / 5, 90, 90, 5);
        if (i == 0) {
          levelSelectButton1Hovered = true;
        }
        if (i == 1) {
          levelSelectButton2Hovered = true;
        }
        if (i == 2) {
          levelSelectButton3Hovered = true;
        }
      } else {
        if (i == 0) {
          levelSelectButton1Hovered = false;
        }
        if (i == 1) {
          levelSelectButton2Hovered = false;
        }
        if (i == 2) {
          levelSelectButton3Hovered = false;
        }
      }
    } else {
      if (i == 0) {
        levelSelectButton1Hovered = false;
      }
      if (i == 1) {
        levelSelectButton2Hovered = false;
      }
      if (i == 2) {
        levelSelectButton3Hovered = false;
      }
    }

    if (mouseX > 10 && mouseX < 100) {
      if (mouseY > 10 && mouseY < 100) {
        noFill();
        stroke("white");
        rect(10, 10, 90, 90, 5);
        levelSelectButton4Hovered = true;
      } else {
        levelSelectButton4Hovered = false;
      }
    } else {
      levelSelectButton4Hovered = false;
    }
  }

  // if (mouseX > 10 && mouseX < 250) {
  //   if (mouseY > height / 5 && mouseY < height / 5 + 90) {
  //     levelSelectButton1Hovered = true;
  //   } else {
  //     levelSelectButton1Hovered = false;
  //   }
  // } else {
  //   levelSelectButton1Hovered = false;
  // }

  // if (mouseX > 10 + width / 3 && mouseX < 10 + width / 3 + 240) {
  //   if (mouseY > height / 5 && mouseY < height / 5 + 90) {
  //     levelSelectButton2Hovered = true;
  //   } else {
  //     levelSelectButton2Hovered = false;
  //   }
  // } else {
  //   levelSelectButton2Hovered = false;
  // }

  // if (mouseX > )
}

function settings() {

  // setting the background
  image(menuBg, 0, 0, 960, 980);
  image(menuBg, 960, 0, 960, 980);
  image(menuBg, 1920, 0, 960, 980);
  image(menuBg, 2880, 0, 960, 980);

  fill("white");
  stroke("black");
  strokeWeight(4);
  rect(width / 4, height / 4, width / 2, height / 2, 5);
  stroke("black");
  line(width / 2, height / 4, width / 2, height / 1.33333);

  // audio settings
  // title
  textSize(50);
  fill("black");
  strokeWeight(2);
  text("AUDIO SETTINGS", width / 4 + 130, height / 4 + 50);
  strokeWeight(4);
  line(width / 4 + 90, height / 4 + 70, width / 2 - 90, height / 4 + 70);
  line( width / 2 + 40 , height / 4 + 70, width / 1.3333 - 50, height / 4 + 70);

  // sliders
  strokeWeight(4);
  fill("white");
  textSize(35);
  text("MASTER VOLUME", width / 4 + width / 15 - 10, height / 4 + 110);
  text("GAME SFX VOLUME", width / 4 + width / 15 - 10, height / 4 + 190);
  text("OTHER SFX VOLUME", width / 4 + width / 15 - 30, height / 4 + 270);
  text("BG MUSIC VOLUME", width / 4 + width / 15 - 25, height / 4 + 350);
  strokeWeight(4);
  fill("white");
  textSize(30);
  masterVolSlider.size(280);
  masterVolSlider.position(width / 4 + 90, height / 4 + 130);
  text(masterVolSlider.value() + "%", width / 2 - 95, height / 4 + 136);

  gameSfxSlider.size(280);
  gameSfxSlider.position(width / 4 + 90, height / 4 + 210);
  text(gameSfxSlider.value() + "%", width / 2 - 95, height / 4 + 216);

  otherSfxSlider.size(280);
  otherSfxSlider.position(width / 4 + 90, height / 4 + 290);
  text(otherSfxSlider.value() + "%", width / 2 - 95, height / 4 + 296);

  bgMusicSlider.size(280);
  bgMusicSlider.position(width / 4 + 90, height / 4 + 370);
  text(bgMusicSlider.value() + "%", width / 2 - 95, height / 4 + 376);

  // buttons
  buttonHoverSfx();

  // exit button
  rect(10, 10, 90, 90, 5);
  image(returnSymbol, 10, 10, 90, 90);

  // reset button
  rect(width / 4 + 10, height / 1.3333 - 50, 60, 40, 5);
  image(restartSymbol, width / 4 + 20, height / 1.3333 - 50, 40, 40);

  // Apply button
  // rect(width / 2 - 70, height / 1.3333 - 50, 60, 40, 5);
  // textSize(20);
  // text("Apply", width / 2 - 65, height / 1.3333 - 25);
  textSize(20);
  rect(width / 4 + 10, height / 1.3333 - 100, 60, 40, 5);
  text("Apply", width / 4 + 15, height / 1.3333 - 75);

  rect(width / 1.3333 - 70, height / 1.3333 - 50, 60, 40, 5);
  text("Apply", width / 1.3333 - 65, height / 1.3333 - 25);

  if (mouseX > 10 && mouseX < 100) {
    if (mouseX > 10 && mouseY < 100) {
      noFill();
      strokeWeight(4);
      stroke("white");
      rect(10, 10, 90, 90, 5);
      fill("white");
      stroke("black");
      settingsButton1Hovered = true;
    } else {
      settingsButton1Hovered = false;
    }
  } else {
    settingsButton1Hovered = false;
  }

  if (mouseX > width / 4 + 20 && mouseX < width / 4 + 80) {
    if (mouseY > height / 1.3333 - 50 && mouseY < height / 1.3333 - 10) {
      noFill();
      strokeWeight(4);
      stroke("white");
      rect(width / 4 + 10, height / 1.3333 - 50, 60, 40, 5);
      fill("white");
      stroke("black");
      settingsButton2Hovered = true;
    } else {
      settingsButton2Hovered = false;
    }
  } else {
    settingsButton2Hovered = false;
  }

  if (mouseX > width / 4 + 10 && mouseX < width / 4 + 70) {
    if (mouseY > height / 1.3333 - 100 && mouseY < height / 1.3333 - 60) {
      noFill();
      strokeWeight(4);
      stroke("white");
      rect(width / 4 + 10, height / 1.3333 - 100, 60, 40, 5);
      fill("white");
      stroke("black");
      settingsButton3Hovered = true;
    } else {
      settingsButton3Hovered = false;
    }
  } else {
    settingsButton3Hovered = false;
  }

  // displaying changed settings text

  if (
    gameSfxSlider.value() != gameSfxSaved ||
    otherSfxSlider.value() != otherSfxSaved ||
    bgMusicSlider.value() != bgMusicSaved ||
    masterVolSlider.value() != masterVolSaved ||
    fpsSlider.value() != fpsSaved
  ) {
    textSize(40);
    text("You have unsaved changes!", width / 2 - 200, height - height / 15);
    textSize(20);
  }

  // applying the audio settings

  if (applyAudioSettings == true) {
    // game SFX
    bulletsfx.setVolume(
      ((0.3 * gameSfxSlider.value()) / 50) * (masterVolSlider.value() / 50)
    );
    damagesfx.setVolume(
      ((0.12 * gameSfxSlider.value()) / 50) * (masterVolSlider.value() / 50)
    );
    dashsfx.setVolume(
      ((0.15 * gameSfxSlider.value()) / 50) * (masterVolSlider.value() / 50)
    );
    coinCollected.setVolume(
      ((0.2 * gameSfxSlider.value()) / 50) * (masterVolSlider.value() / 50)
    );
    powerupPickup.setVolume(
      ((0.3 * gameSfxSlider.value()) / 50) * (masterVolSlider.value() / 50)
    );
    healsfx.setVolume(
      ((0.2 * gameSfxSlider.value()) / 50) * (masterVolSlider.value() / 50)
    );

    // other SFX
    gameOversfx.setVolume(
      ((0.4 * otherSfxSlider.value()) / 50) * (masterVolSlider.value() / 50)
    );
    scoreMilestoneSfx.setVolume(
      ((0.2 * otherSfxSlider.value()) / 50) * (masterVolSlider.value() / 50)
    );
    menu_selectsfx.setVolume(
      ((0.3 * otherSfxSlider.value()) / 50) * (masterVolSlider.value() / 50)
    );
    statsSound1.setVolume(
      ((0.4 * otherSfxSlider.value()) / 50) * (masterVolSlider.value() / 50)
    );
    statsSound2.setVolume(
      ((0.4 * otherSfxSlider.value()) / 50) * (masterVolSlider.value() / 50)
    );
    statsSound3.setVolume(
      ((0.4 * otherSfxSlider.value()) / 50) * (masterVolSlider.value() / 50)
    );
    statsSound4.setVolume(
      ((0.4 * otherSfxSlider.value()) / 50) * (masterVolSlider.value() / 50)
    );
    click.setVolume(
      ((0.3 * otherSfxSlider.value()) / 50) * (masterVolSlider.value() / 50)
    );

    // background music
    backgroundMusic1.setVolume(
      ((0.2 * bgMusicSlider.value()) / 50) * (masterVolSlider.value() / 50)
    );
    mainMenuMusic.setVolume(
      ((0.25 * bgMusicSlider.value()) / 50) * (masterVolSlider.value() / 50)
    );
    level1Music.setVolume(
      ((0.3 * bgMusicSlider.value()) / 50) * (masterVolSlider.value() / 50)
    );
    level2Music.setVolume(
      ((0.3 * bgMusicSlider.value()) / 50) * (masterVolSlider.value() / 50)
    );
    level3Music.setVolume(
      ((0.3 * bgMusicSlider.value()) / 50) * (masterVolSlider.value() / 50)
    );

    // setting new saved values
    gameSfxSaved = gameSfxSlider.value();
    otherSfxSaved = otherSfxSlider.value();
    bgMusicSaved = bgMusicSlider.value();
    masterVolSaved = masterVolSlider.value();

    applyAudioSettings = false;
  }

  // graphics information
  textSize(50);
  fill("black");
  strokeWeight(2);
  text("GRAPHICS INFORMATION", width / 2 + 60, height / 4 + 50);
  textSize(30);
  fill("white");
  text(
    "game window resolution: " + width + "x" + height,
    width / 2 + 50,
    height / 4 + 100
  );
  text(
    "global resolution: " + windowWidth + "x" + windowHeight,
    width / 2 + 50,
    height / 4 + 150
  );
  text("Set game FPS limit:", width / 2 + 140, height / 4 + 220);
  fpsSlider.size(280);
  fpsSlider.position(width / 2 + 100, height / 4 + 250);
  text(fpsSlider.value() + " fps", width / 1.3333 - 120, height / 4 + 255);

  // fps warning
  if (fpsSlider.value() != 60) {
    fill("red");
    text(
      "WARNING! CHANGING THE FRAME LIMIT OF",
      width / 2 + 20,
      height / 4 + 280
    );
    text("THE GAME WILL DIRECTLY IMPACT THE", width / 2 + 20, height / 4 + 300);
    text("SPEED OF THE GAME.", width / 2 + 20, height / 4 + 320);
    fill("white");
    stroke("black");
  }

  // applying fps changes;
  if (applyVideoSettings == true) {
    frameRate(fpsSlider.value());
    fpsSaved = fpsSlider.value();
    applyVideoSettings = false;
  }

  if (mouseX > width / 1.3333 - 70 && mouseX < width / 1.3333 - 10) {
    if (mouseY > height / 1.3333 - 50 && mouseY < height / 1.3333 - 10) {
      noFill();
      stroke("white");
      strokeWeight(4);
      rect(width / 1.3333 - 70, height / 1.3333 - 50, 60, 40, 5);
      strokeWeight(2);
      settingsButton4Hovered = true;
    } else {
      settingsButton4Hovered = false;
    }
  } else {
    settingsButton4Hovered = false;
  }
}
