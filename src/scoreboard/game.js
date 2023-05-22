import { generateID } from "../utils/id.js";

class Game {
  constructor(homeTeam, awayTeam, score) {
    this.id = generateID();
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.score = score
    this.startedAt = new Date()
  }

  updateScore(homeTeamScore, awayTeamScore) {
    this.score.update(homeTeamScore, awayTeamScore);
  }

  fetchTotalScore() {
    return this.score.total();
  }
}
export default Game;
