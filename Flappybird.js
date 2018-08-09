var bird;
var gravity = 0.3;
var pipes = [];
var speed = 1;


function setup() {
  createCanvas(800, 500);
  bird = new Bird(400, height/2, 10);
  score = 0;
  textSize(40);
  textAlign(CENTER);
}

function draw() {
  background(51);
  bird.update();
  bird.draw();

  noStroke();
  textSize(20);
  fill(255, 255, 255);
  fill(255, 255, 255);
}

function keyPressed() {
  if (keyCode === 32) {
    bird.hop(-8);
	audio();
  }
}
 function audio(){
	var audio = document.getElementById("audio");
    audio.play(); 
 }
