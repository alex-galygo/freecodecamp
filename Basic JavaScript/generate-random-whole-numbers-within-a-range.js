// Generate Random Whole Numbers within a Range

//Solution
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}


//Test
console.log(randomRange(5, 15)) // should return a random number between 5 and 15