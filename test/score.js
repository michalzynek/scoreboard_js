const assert = require('assert').strict;
const Score = require('../src/scoreboard/score');

describe("Score", () => {
  it("should create new score object", () => {
    const score = new Score(2, 0);

    assert.equal(score.homeTeamScore, 2);
    assert.equal(score.awayTeamScore, 0);
  })

  it("should update the score", () => {
    const score = new Score(2, 1);
    score.update(4, 4);

    assert.equal(score.homeTeamScore, 4);
    assert.equal(score.awayTeamScore, 4);
  })

  it("should return overall score", () => {
    const score = new Score(7, 5);

    assert.equal(score.total(), 12);
  })
})