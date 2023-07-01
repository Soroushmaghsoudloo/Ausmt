const { Sum } = require("../index")

test("two plus two === four", () => {
    expect(Sum(2,2)).toBe(4)
})