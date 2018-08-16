(function(){
    var CANVAS_WIDTH = 800;
    var CANVAS_HEIGHT = 500;
    var SPACE_KEY_CODE = 32;
    var JUMP_HEIGHT = -8;
    var bird;
    var pipes = [];

    window.setup = function() {
        createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
        bird = new Bird(CANVAS_WIDTH/2, CANVAS_HEIGHT/2);
        pipes.push(new Pipe(width));
        textSize(40);
        textAlign(CENTER);
    }

    window.draw = function() {
        background(51);
        bird.update();
        bird.draw();
        bird.touchWall();
        if (frameCount % 100 == 0){
            pipes.push(new Pipe(width));
        }

        for (var i = 0; i < pipes.length; i++)
        {
            pipes[i].draw();
            pipes[i].update();
            bird.touchPipe(pipes[i]);
        }
        noStroke();
        textSize(20);
        fill(255, 255, 255);
        fill(255, 255, 255);
    }

    window.keyPressed = function() {
        if (keyCode === SPACE_KEY_CODE) {
            bird.hop(JUMP_HEIGHT);
            audioFly();
        }
    }
    function audioFly(){
        var audioFly = document.getElementById("audio");
        audioFly.play();
    }

})()
