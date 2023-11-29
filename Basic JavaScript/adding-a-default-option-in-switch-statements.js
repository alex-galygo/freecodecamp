//Solution:
function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case "a":
            return "apple";
            break;
        case "b":
            return "bird";
            break;
        case "c":
            return "cat";
            break;
        default:
            return "stuff";
            break;
    }
    // Only change code above this line
}

// Tests:
console.log(switchOfStuff("a"));
console.log(switchOfStuff("b"));
console.log(switchOfStuff("c"));
console.log(switchOfStuff("d"));
console.log(switchOfStuff(4));
console.log(switchOfStuff(5));