import Score from "../scoreboard/score.js";
import Game from "../scoreboard/game.js";

class GameCreationService {
  static run(homeTeam, awayTeam, homeTeamScore, awayTeamScore) {
    const score = new Score(homeTeamScore, awayTeamScore);
    const game = new Game(homeTeam, awayTeam, score);

    return game;
  }
}

export default GameCreationService;