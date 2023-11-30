// Description:
//
// Use the conditional ternary operator in the checkEqual function to check if two numbers are equal or not. The function should return either "Equal" or "Not Equal".

// Solution

function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);

// Tests

console.log(checkEqual(1, 2)); // checkEqual(1, 2) should return "Not Equal"