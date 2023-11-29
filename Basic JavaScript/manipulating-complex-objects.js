// Description:
// Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.

// Solution:

const myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    // Add record here
    {
        "artist": "The Beatles",
        "title": "Abbey Road",
        "release_year": 1969,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
    }
];

// Tests

console.log(myMusic[1].artist) // should return "The Beatles"