# scoreboard.js
scoreboard.js is a simple JavaScript library that allows you to keep track of football scores.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/scoreboard.git
```

2. Navigate into the project folder:

```bash
cd scoreboard
```

3. Install dependencies

```bash
npm install
```

4. Link the package for local usage:

```
npm link
```

## Usage

1. In your project folder, link the scoreboard package:

```bash
npm link scoreboard_js
```

2. In your JavaScript file:

```
const { ScoreBoard, Game } = require('scoreboard_js');

// Create a new scoreboard
const scoreboard = new ScoreBoard();

// Start a new game
const game = scoreboard.startGame('Team A', 'Team B', 0, 0);

// Update the score
scoreboard.updateScore('Team A', 'Team B', 1, 0);

// Get a summary of games
console.log(scoreboard.getSummary());

// Finish a game
scoreboard.finishGame(game.id);
```

## Unlinking the package

If you want to unlink the package, you can do so by running the following commands:

1. In your project folder:

```bash
In your project folder:
```

2. In the scoreboard folder:

```
npm unlink
```

## Contributions

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
