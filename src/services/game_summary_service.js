class GameSummaryService {
  static fetch(games) {
    return games.sort((gameOne, gameTwo) => {
      const totalScoreDifference =  gameTwo.fetchTotalScore() - gameOne.fetchTotalScore();
  
      if (totalScoreDifference !== 0) return totalScoreDifference;
  
      return gameTwo.startedAt - gameOne.startedAt;
    })
  }
}

module.exports = GameSummaryService;