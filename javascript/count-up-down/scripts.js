"use strict" 
{
    let count = 0;

    // Count Up 
    // takes in how much we want to count up / down by
    // function countUp(increment) {
    //     count += increment;
    // }
    
    // // Count Down
    // function countDown(increment) {
    //     count -= increment
    // }
    
    // takes in how much we count by 
    // and whether we're going up or down
    function countUD(isUp) {
        // rewrite this to return a function (closure)
        // that counts either up or down
        return function(increment) {
            if (isUp) {
                count += increment;
            } else {
                count -= increment;
            }
        }
    }
    
    function countUDBy(isUp, increment) {
        // rewrite this to return a function (closure)
        // that counts either up or down
        return function() {
            if (isUp) {
                count += increment;
            } else {
                count -= increment;
            }
        }
    }
    
    const countUp = countUD(true);
    const countDown = countUD(false);
    
    countUp(1)
    countDown(3) 
    console.log(count) // -2
    
    const countUpByFive = countUDBy(true, 5)
    
    countUpByFive()
    
    // countUD(2, true)
    console.log(count) // 3
}
