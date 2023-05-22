const Score = require("../scoreboard/score.js");
const Game = require("../scoreboard/game.js");

class GameCreationService {
  static run(homeTeam, awayTeam, homeTeamScore, awayTeamScore) {
    const score = new Score(homeTeamScore, awayTeamScore);
    const game = new Game(homeTeam, awayTeam, score);

    return game;
  }
}

module.exports = GameCreationService;