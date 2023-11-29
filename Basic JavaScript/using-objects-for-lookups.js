// Solution

// Setup
function phoneticLookup(val) {

    // Only change code below this line
    let lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }
    // Only change code above this line
    return lookup[val];
}

phoneticLookup("charlie");

// Tests
console.log(phoneticLookup("charlie")) // should equal the string Chicago