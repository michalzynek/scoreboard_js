import GameCreationService from "../services/game_creation_service.js";
import GameSummaryService from "../services/game_summary_service.js";

class ScoreBoard {
  constructor(initialGames = []) {
    this.games = initialGames;
  }

  startGame(homeTeam, awayTeam, homeTeamScore, awayTeamScore) {
    const game = GameCreationService.run(homeTeam, awayTeam, homeTeamScore, awayTeamScore)
    this.games = [...this.games, game];

    return game;
  }

  finishGame(game) {
    this.games = this.games.filter(currentGame => game.id === currentGame.id);   
  }

  getSummary() {
    return GameSummaryService.fetch(this.games);
  }
}

export default ScoreBoard;
