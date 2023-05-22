class Score {
  constructor(initialHomeScore = 0, initialAwayScore = 0) {
    this.homeTeamScore = initialHomeScore;
    this.awayTeamScore = initialAwayScore;
  }

  update(homeTeamScore, awayTeamScore) {
    this.homeTeamScore = homeTeamScore;
    this.awayTeamScore = awayTeamScore;
  }

  total() {
    return this.homeTeamScore + this.awayTeamScore;
  }
}

module.exports = Score;
