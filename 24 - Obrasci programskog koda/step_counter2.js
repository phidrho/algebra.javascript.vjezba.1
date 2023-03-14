var StepCounter2 = (function(){
    var koraci = 0;
    function stepUp() { //privatna metoda
        koraci++;
    }

    return {
        walk: function() {
            stepUp();
        },
        getTotalSteps: function() {
            return koraci;
        }
    }
}()); // moraju biti otvorena i zatvorena zagrada za izvršavanje

module.exports = StepCounter2;
