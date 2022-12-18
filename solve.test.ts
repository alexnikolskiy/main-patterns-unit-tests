import solve from "./solve";

describe("solve", function () {
  it.each`
    a    | b    | c    | expected
    ${1} | ${0} | ${1} | ${[]}
  `(
    "should return $expected when a=$a, b=$b and c=$c",
    ({ a, b, c, expected }) => {
      expect(solve(a, b, c)).toEqual(expected);
    }
  );
});
