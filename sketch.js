var gameState = 0;
var thiefCount, policeCount;
var allPlayers;
var distance = 0;
var database;

var canvas, bgImage;

var form, player, game;

var policeCar, thiefCar, thiefPlane, thiefMansion;
var policeCarImage, thiefCarImage, thiefPlaneImage, thiefMansionImage, trackImage;

var coin, cone, gasStation;
var coinImage, coneImage, gasStationImage;
var goodGroup, badGroup, gasGroup;

var score = 0;
var lives = 5;
var fuel = 100;

var items;

var thief, police;

function preload(){
  trackImage = loadImage("track.jpg");
  policeCarImage = loadImage("policePng.png");
  thiefCarImage = loadImage("carImgTheif.png");
  thiefMansionImage = loadImage("mansion.png");
  thiefPlaneImage = loadImage("aeroplane.png");
  coinImage = loadImage("coin.png");
  coneImage = loadImage("cone.png");
  gasStationImage = loadImage("gasStation.png");
  goodGroup = new Group();
  badGroup = new Group();
  gasGroup = new Group();

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}


function draw(){
  if(thiefCount === 1 && policeCount === 1) {
    game.update(1);
  }
  if(gameState === 1) {
    clear();
    game.play();
    fill("black");
    textSize(15);
    text("Score" + score, 20, 15);
    text("Lives" + lives, 600, 15);
    text("Fuel" + fuel, 300, 15);
  }
  if(gameState === 2) { 
    game.end();
  }
}