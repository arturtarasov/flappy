var bird, temp;
var gravity = 0.3;
var pipes = [];
var speed = 1;
var imgBird, imgUp, imgDown;

function setup() {
  createCanvas(800, 500);
  //bird = new Bird(400, height/2, 10, imgBird);
    temp = new Pipe(300, imgUp, imgDown);
  textSize(40);
  textAlign(CENTER);
}

function draw() {
  background(51);
  //bird.update();
  //bird.draw();
//    temp = new Pipe(100, imgUp, imgDown);
    temp.draw();
    temp.update();
  noStroke();
  textSize(20);
  fill(255, 255, 255);
  fill(255, 255, 255);
}

function keyPressed() {
  if (keyCode === 32) {
    bird.hop(-8);
	audioFly();
  }
}
 function audioFly(){
	var audioFly = document.getElementById("audio");
    audioFly.play(); 
 }
