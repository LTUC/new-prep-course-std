"use strict";

const {
  objLit,
  customerAndAge,
} = require("./../code-challenges/challenges-03");


describe("Challenge 03", () => {
  test("Object Literals", () => {
    const first_Person = {
      firstName: "John",
      lastName: "Doe",
      age: 42,
      hobby: "Reading",
    };

    const second_Person = {
      firstName: "Jane",
      lastName: "Doe",
      age: 33,
      hobby: "Campaign",
    };

    const third_Person = {
      firstName: "mark",
      lastName: "Kimberly",
      age: 25,
      hobby: "hiking",
    };
    expect(objLit(first_Person)).toStrictEqual(
      "my name is John Doe I am 42 YO, and I love Reading."
    );
    expect(objLit(second_Person)).toStrictEqual(
      "my name is Jane Doe I am 33 YO, and I love Campaign."
    );
    expect(objLit(third_Person)).toStrictEqual(
      "my name is Mark Kimberly I am 25 YO, and I love hiking."
    );
  });

  test("Customer and Average", () => {
    const names = {
      "Romio Joliat": 35,
      "Mario Ristrova": 39,
      "Sofia firnando": 50,
    };
    expect(customerAndAge(names)[0]).toStrictEqual(
      "Customer Name :Romio Joliat , Age :35"
    );
  });
});

