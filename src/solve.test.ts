import solve from "./solve";

describe("solve", function () {
  it.each`
    a    | b           | c     | expected
    ${1} | ${0}        | ${1}  | ${[]}
    ${1} | ${0}        | ${-1} | ${[1, -1]}
    ${1} | ${2}        | ${1}  | ${[-1]}
  `(
    "should return $expected when a=$a, b=$b and c=$c",
    ({ a, b, c, expected }) => {
      expect(solve(a, b, c)).toEqual(expected);
    }
  );

  it("should throw exception when a=0", function () {
    expect(() => solve(1e-7, 1, 1)).toThrow("a не равно 0");
  });

  it('should return one root when D in nonzero but less than epsilon', function () {
    expect(solve(1, 2.000001, 1)).toHaveLength(1)
  })
});
