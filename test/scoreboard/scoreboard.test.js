import assert from "assert";
import ScoreBoard from "../../src/scoreboard/scoreboard.js";
import GameCreationService from "../../src/services/game_creation_service.js";
import Game from "../../src/scoreboard/game.js";

describe("ScoreBoard", () => {
  it("should create new scoreboard object", () => {
    const scoreboard = new ScoreBoard();
    const game = GameCreationService.run("Team One", "Team Two", 1, 1);
    const scoreboardWithGames = new ScoreBoard([game]);

    assert.deepEqual(scoreboard.games, []);
    assert.deepEqual(scoreboardWithGames.games, [game]);
  })

  it("should start new game", () => {
    const scoreboard = new ScoreBoard();
    scoreboard.startGame("Team One", "Team Two", 1, 0);

    assert.equal(scoreboard.games[0] instanceof Game, true);
  })

  it("should return list of games in progress in order", () => {
    const firstGame = GameCreationService.run("Team One", "Team Two", 2, 1);
    const secondGame = GameCreationService.run("Team Two", "Team Three", 2, 2);
    const games = [
      firstGame,
      secondGame
    ];
    const scoreboard = new ScoreBoard(games);
    const gameSummary = scoreboard.getSummary();

    assert.equal(gameSummary[0], secondGame);
    assert.equal(gameSummary[1], firstGame);
  })
})