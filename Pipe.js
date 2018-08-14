function Pipe(x, imgUp, imgDown) {
    this.x = x;
    this.imgUp = loadImage("img/pipeUp.png");
    this.imgDown = loadImage("img/pipeDown.png");
}

Pipe.prototype.update = function () {
    this.x -= speed;
}

Pipe.prototype.draw = function () {

    image(this.imgUp, this.x, 0, 45, 100);
    image(this.imgDown, this.x, height-100, 45, 100);
}