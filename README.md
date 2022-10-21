# Knights Travails Project

For this project from [The Odin Project](https://www.theodinproject.com/) curriculum, the user inputs a start and end location on a chess board, and the code determines the least amount of moves it would take for a knight (chess piece) to get there. 

### New Skills / Knowledge
- Data structure: graphs
- Map objects

### Test Cases
```
knightTravails([3, 6], [1, 1]);

/** OUTPUT
 *
 * > knightTravails([3,6],[1,1])
 * => You made it in 3 moves! Here's your path:
 *  [3,6]
 *  [4,4]
 *  [3,2]
 *  [1,1]
 */

knightTravails([2, 2], [4, 4]);

/** OUTPUT
 *
 * > knightTravails([2,2],[4,4])
 * => You made it in 4 moves! Here's your path:
 *   [2,2]
 *   [3,4]
 *   [4,6]
 *   [6,5]
 *   [4,4]
 */

knightTravails([7, 1], [1, 8]);

/** OUTPUT
 *
 * > knightTravails([7,1],[1,8])
 * => You made it in 5 moves! Here's your path:
 *   [7,1]
 *   [8,3]
 *   [6,4]
 *   [4,5]
 *   [2,6]
 *   [1,8]
 */
 ```
