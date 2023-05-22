const assert = require("assert");
const GameSummaryService = require("../../src/services/game_summary_service.js");
const GameCreationService = require("../../src/services/game_creation_service.js");

describe("GameSummaryService", () => {
  it("should sort games by score and starting date", () => {
    const highestScoreGame = GameCreationService.run("Team One", "Team Two", 2, 5);
    const olderGame = GameCreationService.run("Team Two", "Team Three", 3, 0);
    const newerGame = GameCreationService.run("Team Three", "Team One", 3, 0);
    newerGame.startedAt.setSeconds(newerGame.startedAt.getSeconds() + 1);
    const games = [
      olderGame,
      highestScoreGame,
      newerGame
    ];
    const sortedGames = GameSummaryService.fetch(games);

    assert.equal(sortedGames[0], highestScoreGame);
    assert.equal(sortedGames[1], newerGame);
    assert.equal(sortedGames[2], olderGame);
  })
})