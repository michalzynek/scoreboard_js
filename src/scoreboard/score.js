class Score {
  constructor(initialHomeScore, initialAwayScore) {
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
