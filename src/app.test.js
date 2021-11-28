const { dayOfTheWeek } = require("./app");

test("getDay returns the long-format day of the week", () => {
  const day = dayOfTheWeek(new Date("3/11/2020"));
  expect(day).toBe("Wednesday");
});

test("error test", () => {
  expect(2 + 2).toBe(1);
});
