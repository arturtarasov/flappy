(function(){
    //const in Pipe.js
    var WIDTH_PIPE          = 45;
    var HEIGHT_PIPE_UP_1    = 80;
    var HEIGHT_PIPE_UP_2    = 320;
    var SPEED_PIPE          = 1.5;
    var BIRD_WAY            = 150;

    window.Pipe = function(x) {
        this.x = x;
        this.heightPipeUp = random(HEIGHT_PIPE_UP_1, HEIGHT_PIPE_UP_2);
        this.imgUp = loadImage("img/pipeUp.png");
        this.imgDown = loadImage("img/pipeDown.png");
    };

    Pipe.prototype.update = function () {
        this.x -= SPEED_PIPE;
    };

    Pipe.prototype.draw = function () {
        image(this.imgUp, this.x, 0, WIDTH_PIPE, this.heightPipeUp);
        image(this.imgDown, this.x, this.heightPipeUp + BIRD_WAY, WIDTH_PIPE, height-(this.heightPipeUp + BIRD_WAY));
    };
})();
