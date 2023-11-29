function checkObj(obj, checkProp) {
    return obj.hasOwnProperty(checkProp) ? obj[checkProp] : "Not Found";
}

// Tests

console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")) // should return the string pony.