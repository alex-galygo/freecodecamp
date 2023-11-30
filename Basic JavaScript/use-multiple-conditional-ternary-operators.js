// Description:

// Use Multiple Conditional (Ternary) Operators


// Solution

function checkSign(num) {
    return (num > 0) ? "positive"
        : (num < 0) ? "negative"
            : "zero";
}

checkSign(10);

// Tests
console.log(checkSign(10))


