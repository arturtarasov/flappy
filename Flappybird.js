(function(){

    var CANVAS_WIDTH    = 800;
    var CANVAS_HEIGHT   = 500;
    var SPACE_KEY_CODE  = 32;
    var ENTER_KEY_CODE  = 13;
    var JUMP_HEIGHT     = -8;
    var bird;
    var pipes = [];
    var score;
    var currentScore;
    var highestScore;

    window.setup = function() {
        createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
        score = new Score(currentScore, highestScore);
        score.getHighestScore();
        score.score = 0;

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
        score.setHighestScore();
        if (frameCount % 100 == 0){
            pipes.push(new Pipe(width));
            score.score++;
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
        text("Record Score : " + score.highestScore, 80, 25);
        fill(255, 255, 255);
        text("Score : " + score.score, 50, height - 20);
    }

    window.keyPressed = function() {
        if (keyCode === SPACE_KEY_CODE) {
            bird.hop(JUMP_HEIGHT);
            audioFly();
        }
        if (keyCode === ENTER_KEY_CODE) {
            score.setHighestScore();
            window.location.reload();
        }
    }
    function audioFly(){
        var audioFly = document.getElementById("audio");
        audioFly.play();
    }
    function endGame() {
        noLoop();
        noStroke();
        text('You lose !', width/2, height/2);
        text('Press ENTER to restart !', width/2, height/2+30);
    }
})()
