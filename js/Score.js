(function(){

    window.Score = function(){
        this.score = 0;
    };

    Score.prototype.getHighestScore = function(){
        let storedScore = localStorage.getItem("score");
        this.highestScore = storedScore === null ? 0 : parseInt(storedScore, 10);
    };

    Score.prototype.setHighestScore = function(){
        if(this.score > this.highestScore) {
            localStorage.setItem("score", this.score.toString());
        } else {
            localStorage.setItem("score", this.highestScore);
        }
    };

    Score.prototype.viewScore = function(){
        textSize(20);
        fill(255, 255, 0);
        text("Record Score : " + this.highestScore, 90, 25);
        fill(255, 255, 0);
        text("Score : " + this.score, 50, height - 20);
    }
})();