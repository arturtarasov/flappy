(function(){
    window.Score = function(score, highestScore){
        this.score = score;
        this.highestScore = highestScore;
    }
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
})()
