import Game from "../../src/scoreboard/game.js";
import Score from "../../src/scoreboard/score.js";
import assert from "assert";

describe("Game", () => {
  it("should create new game object with unique ID and starting date", () => {
    const score = new Score(1, 1);
    const game = new Game("Team One", "Team Two", score);

    assert.equal(game.homeTeam, "Team One");
    assert.equal(game.awayTeam, "Team Two");
    assert.equal(score, game.score);
    assert.equal(typeof game.id, "string");
    assert.equal(game.startedAt instanceof Date, true);
  })

  it("should update the game score", () => {
    const score = new Score(2, 3);
    const game = new Game("Team One", "Team Two", score);
    game.updateScore(3,3);

    assert.equal(game.score.homeTeamScore, 3);
    assert.equal(game.score.awayTeamScore, 3);
  })

  it("should return total score", () => {
    const score = new Score(3, 3);
    const game = new Game("Team One", "Team Two", score);

    assert.equal(game.fetchTotalScore(), 6);
  })
})