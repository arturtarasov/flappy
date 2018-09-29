(function(){
    window.Windowshow = function(score, highestScore) {
        $("#scoreboard").css({'opacity': '1', 'display': 'block'});
        $("#currentscore").text(score);
        $("#highscore").text(highestScore);
    };
})();