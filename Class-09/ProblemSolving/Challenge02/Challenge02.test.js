"use strict";

const { reverseArray, arrInc } = require("./../code-challenges/challenges-02");

describe("Challenge 01", () => {
  test("Reverse an Array", () => {
    expect(reverseArray([1, 2, 3, 4, 5])).toStrictEqual([5, 4, 3, 2, 1]);
    expect(reverseArray(["C#", "JS", "Ruby", "Python"])).toStrictEqual([
      "Python",
      "Ruby",
      "JS",
      "C#",
    ]);
    expect(reverseArray(["88", 10, "course", 71])).toStrictEqual([
      71,
      "course",
      10,
      "88",
    ]);
  });

  test("Array Increment", () => {
    expect(arrInc([5, 15, 3, 10, 32])).toStrictEqual([15, 25, 13, 20, 42]);
    expect(arrInc([6, 0, -10, 33])).toStrictEqual([16, 10, 0, 43]);
  });
});

