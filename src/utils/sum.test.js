import { sum } from "./sum";

describe("Sum", () => {
  it("adds two given number", () => {
    const result = sum(2, 3);

    expect(result).toEqual(5);
  });

  it("return string if one input is string", () => {
    const result = sum(2, "3");

    expect(result).toEqual("23");
  });
});
