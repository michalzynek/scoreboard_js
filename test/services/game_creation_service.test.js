import assert from "assert";
import GameCreationService from "../../src/services/game_creation_service.js";

describe("GameCreationService", () => {
  it("should create game based on the input data", () => {
    const game = GameCreationService.run("Team One", "Team Two", 2, 1);

    assert.equal(game.homeTeam, "Team One");
    assert.equal(game.awayTeam, "Team Two");
    assert.equal(game.score.homeTeamScore, 2);
    assert.equal(game.score.awayTeamScore, 1);
  })
})