(function(){
    //const in Flappybird.js
    var CANVAS_WIDTH    = 800;
    var CANVAS_HEIGHT   = 500;
    var SPACE_KEY_CODE  = 32;
    var ENTER_KEY_CODE  = 13;
    var JUMP_HEIGHT     = -8;

    //for objects
    var bird, score, winShow;
    var pipes = [];

    //start function
    window.setup = function() {
        createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
        score = new Score();
        score.getHighestScore();
        score.score = 0;

        bird = new Bird(CANVAS_WIDTH/2, CANVAS_HEIGHT/2);
        pipes.push(new Pipe(width));
        textSize(40);
        textAlign(CENTER);
    };

    //update function
    window.draw = function() {
        background(51);
        bird.update();
        bird.draw();

        score.setHighestScore();
        if (frameCount % 100 == 0){
            pipes.push(new Pipe(width));
            score.score++;
        }

        for (var i = 0; i < pipes.length; i++)
        {
            pipes[i].draw();
            pipes[i].update();
            console.log(pipes[0].x + ' ' + pipes[0].heightPipeUp);
        }
        score.viewScore();
        $("#replay").click(function() {
            window.location.reload();
        });
        if (score.score > 0)
            bird.kill(CANVAS_HEIGHT);
    };

    //keyboard capture
    window.keyPressed = function() {
        if (keyCode === SPACE_KEY_CODE) {
            bird.hop(JUMP_HEIGHT);
            audioFly();
        }
    };

    window.onmousedown = function(){
        bird.hop(JUMP_HEIGHT);
        audioFly();
    };

    //play audio function
    function audioFly(){
        var audioFly = document.getElementById("audio");
        audioFly.play();
    }

    //end game function
    function endGame() {
        noLoop();
        noStroke();
        winShow = new Windowshow(score.score, score.highestScore);
    }
})();
