import { rgbaToHex, hexToRgba, shadeColors } from "./color";

describe("color function run exactly", () => {
  test("rgbaToHex run exactly", () => {
    expect(rgbaToHex(0, 51, 255)).toBe("#0033ff");
    expect(rgbaToHex(0, 51, 255, 0.5)).toBe("#0033ff80");
  });
  test("hexToRGBA run exactly", () => {
    expect(() => hexToRgba("#0x33ff")).toThrow(
      "#0x33ff is not matched hex color"
    );
    expect(hexToRgba("#0033ff")).toEqual({
      red: 0,
      green: 51,
      blue: 255,
      alpha: 1,
    });
    expect(hexToRgba("#0033ff80")).toEqual({
      red: 0,
      green: 51,
      blue: 255,
      alpha: 0.5,
    });
    expect(hexToRgba("#fff")).toEqual({
      red: 255,
      green: 255,
      blue: 255,
      alpha: 1,
    });
  });

  test("shade colors run exactly", () => {
    expect(() => shadeColors("primary", "ff0000")).not.toBeNull();
  });
});
