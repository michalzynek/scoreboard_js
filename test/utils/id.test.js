const assert = require("assert");
const generateID = require("../../src/utils/id.js");

describe("generateID", () => {
  it("generates unique string of characters each time", () => {
    const firstID = generateID();
    const secondID = generateID();

    assert.equal(typeof firstID, "string");
    assert.equal(typeof secondID, "string");
    assert.notEqual(firstID, secondID);
  })
})