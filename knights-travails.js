/**
 * Pseudo Code
 * 1. Call function with start and end locations
 * 2. Initialize a knight object with start location
 *      Object includes all combinations of possible knight movement
 *      Object includes getters and setters as seen fit
 * 3. Initialize a new gameboard object with positions
 *      includes root node made with start position
 *
 */

let knight = (start, end) => {
  let xPos = start[0];
  let yPos = start[1];
  let pred;

  const possibleMoves = [
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
  ];

  function nextKnights() {
    let newKnights = possibleMoves
      .map((possibleMove) => {
        //return an array of all possible new locations
        return [xPos + possibleMove[0], yPos + possibleMove[1]];
      })
      .filter((newLocation) => {
        //filter the array for all locations that aren't on the board
        0 <= newLocation[0] &&
          newLocation[0] < 8 &&
          0 <= newLocation[1] &&
          newLocation[1] < 8;
      });
    return newKnights;
  }
};

function buildGameBoard(start, end) {}

// function newSquare
