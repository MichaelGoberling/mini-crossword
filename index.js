/**
 * Example 
 * 
 * Grid: 
 * ---------------
 * |     1 2 3 4 |
 * | 5   D O V E |
 * | 6   I W I N |
 * | 7 O X I D E |
 * | 8 W I N E   |
 * | 9 L E G O   |
 * ---------------
 * 
 * Clues: 
 * 1 Big name in paper cups 
 * 2 Needing to pay 
 * 3 YouTube Upload
 * 4 Opposite of WSW 
 * 5 Victorious shout 
 * 6 Nitrous ___ (laughing gas)
 * 7 Rose or Chardonnay 
 * 8 Maker of billions of bricks each year 
 * 
 */

const grid = [
    [undefined, "D", "O", "V", "E"],
    [undefined, "I", "W", "I", "N"],
    ["O", "X", "I", "D", "E"],
    ["W", "I", "N", "E", undefined],
    ["L", "E", "G", "O", undefined]
]
// Position in Row, Row  
let pointer = [0, 0]

const outputGrid = () => {
    for (const row of grid) {

        // TODO: Column / Row numbers 
        //       How to get the index of an array member in a "for" statement?

        let rowStr = ""
        for (const letter of row) {
            if (letter === undefined) {
                rowStr += "  "
            } else {
                rowStr += `${letter} `
            }
        }
        console.log(rowStr)
    }
}

;(() => {
    console.log("Welcome to mini-crossword.js!")
    outputGrid()

    // TODO: Figure out how to do input, keyUp, keyDown, keyOver, etc. 
    //       Just work on traversing the grid and showing the right clues

    while(1);
})();