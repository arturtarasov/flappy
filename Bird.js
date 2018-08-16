(function(){
    //const in Bird.js
    var JUMP_BIRD   = 0;
    var GRAVITY     = 0.3;

    window.Bird = function(x, y){
        this.x = x;
        this.y = y;
        this.imgBird = loadImage("img/bird.png");
        this.yV = JUMP_BIRD;
    };

    Bird.prototype.update = function () {
        this.yV += GRAVITY;
        this.y  += this.yV;
    };

    Bird.prototype.hop = function (force) {
        this.yV = JUMP_BIRD;
        this.yV += force;
    };

    Bird.prototype.draw = function () {
        image(this.imgBird,this.x, this.y);
    };

    Bird.prototype.touchWall = function () {
        if (this.y > height || this.y < 0)
            console.log("wall");
    };

    Bird.prototype.touchPipe = function (pipe) {
        if (pipe.x - this.x < 5)
            console.log("pipe");
    };
})();
