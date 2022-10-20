//Knights Travails

const knight = (start) => {
  let xPos = start[0];
  let yPos = start[1];
  let predecessor = null;

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

  function setPred(pred) {
    predecessor = pred;
  }
  function getPred() {
    return predecessor;
  }

  function nextKnightLocations() {
    let newKnightLoc = possibleMoves
      .map((possibleMove) => {
        //return an array of all possible new locations
        return [xPos + possibleMove[0], yPos + possibleMove[1]];
      })
      .filter((newLocation) => {
        //filter the array for all locations that aren't on the board
        return (
          1 <= newLocation[0] &&
          newLocation[0] < 9 &&
          1 <= newLocation[1] &&
          newLocation[1] < 9
        );
      });
    return newKnightLoc;
  }

  function position() {
    return `[${xPos},${yPos}]`;
  }

  return {
    nextKnightLocations,
    setPred,
    getPred,
    position,
  };
};

function knightTravails(start, end) {
  if (
    !(1 <= start[0] && start[0] < 9 && 1 <= start[1] && start[1] < 9) ||
    !(1 <= end[0] && end[0] < 9 && 1 <= end[1] && end[1] < 9)
  ) {
    return console.log(
      "Please enter coordinates between 1 and 8 like on a chess board. E.g. [1,8] or [3,5]."
    );
  }

  console.log(`> knightTravails([${start}],[${end}])`);

  let rootKnight = knight(start);
  let endKnight = knight(end);
  let queue = [rootKnight];

  while (endKnight.position() != queue[0].position()) {
    let currentKnight = queue.shift();
    //From the current knight location, get all possible next moves and turn each into a knight piece. Then set their predecessor as the current knight location and add them to the queue.
    let nextKnights = currentKnight.nextKnightLocations().map((newPos) => {
      k = knight(newPos);
      k.setPred(currentKnight);
      return k;
    });
    queue.push(...nextKnights);
  }

  //Track back from the current knight to find the fastest route taken
  let currentKnight = queue[0];
  let path = [currentKnight.position()];

  while (path[0] != `[${start.toString()}]`) {
    currentKnight = currentKnight.getPred();
    path.unshift(currentKnight.position());
  }

  //Print out the route
  console.log(`=> You made it in ${path.length - 1} moves! Here's your path:`);
  for (let i = 0; i < path.length; i++) {
    console.log(path[i].padStart(7));
  }
}

module.exports = knightTravails;
