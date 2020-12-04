
var ball;
var database;
var position;
var playerCount;
 var gameState=0;
 var canavs ;
var game ,form ,player;

function setup(){
    canvas = createCanvas(500,500);
    database = firebase.database();
    game=new Game();
    game.getState();
    game.start();
    
}

function draw(){

}



