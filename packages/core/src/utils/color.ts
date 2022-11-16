/* =============COLOR ============== */

const colorShades = {
  50: 0.8,
  100: 0.65,
  200: 0.5,
  300: 0.35,
  400: 0.2,
  500: 1,
  600: 0.9,
  700: 0.8,
  800: 0.7,
  900: 0.6,
};

export const alphaShades = {
  A100: 0.2,
  A200: 0.4,
  A300: 0.6,
  A400: 0.8,
  A500: 0.9,
};

type ColorShade = typeof colorShades;
type AlphaColor = typeof alphaShades;

type addPrefixToObject<
  TObject extends ColorShade | AlphaColor,
  TPrefix extends string
> = `${TPrefix}${TObject extends ColorShade
  ? keyof ColorShade
  : keyof AlphaColor}`;

type KeyColorVariant<T extends string> = addPrefixToObject<ColorShade, T> | T;
type KeyAlphaColor<T extends string> = addPrefixToObject<AlphaColor, T> | T;
type ColorVariant<T extends string> = {
  [key in KeyColorVariant<T>]?: string;
};
type AlphaVariant<T extends string> = {
  [key in KeyAlphaColor<T>]?: string;
};

export interface RGBAColor {
  green: number;
  red: number;
  blue: number;
  alpha?: number;
}

export const shadeAlphaColors = <T extends string>(
  key: T,
  value: string
): AlphaVariant<T> => {
  const colors = {
    [key]: value,
  };
  try {
    const rgbaColor = hexToRgba(value);

    for (const [variant, vAlpha] of Object.entries(alphaShades)) {
      const { blue, green, alpha, red } = {
        ...rgbaColor,
        alpha: vAlpha,
      };
      colors[key + variant] = rgbaToHex(red, green, blue, alpha);
    }

    return colors as AlphaVariant<T>;
  } catch {
    return colors as AlphaVariant<T>;
  }
};

export const shadeColors = <T extends string>(
  key: T,
  value: string
): ColorVariant<T> => {
  const colors = {
    [key]: value,
  };
  try {
    const rgbaColor = hexToRgba(value);
    for (const [variant, value] of Object.entries(colorShades)) {
      const { blue, green, alpha, red } = shade(
        rgbaColor,
        value,
        parseInt(variant)
      );
      colors[key + variant] = rgbaToHex(red, green, blue, alpha);
    }

    return colors as ColorVariant<T>;
  } catch {
    return colors as ColorVariant<T>;
  }
};

const shade = (
  color: RGBAColor,
  multiple: number,
  shadeValue: number,
  alphaMultiple = 1
) => {
  const { green, red, blue, alpha = 1 } = color;

  if (shadeValue >= 500) {
    return {
      alpha: alpha * alphaMultiple,
      green: green * multiple,
      red: red * multiple,
      blue: blue * multiple,
    } as RGBAColor;
  } else {
    return {
      alpha: alpha * alphaMultiple,
      green: green + (255 - green) * multiple,
      red: red + (255 - red) * multiple,
      blue: blue + (255 - blue) * multiple,
    } as RGBAColor;
  }
};

export const generateAlphaColors = (
  key: string,
  value: string,
  alpha: number
) => {};

const componentToHex = (val: number) => {
  const hex = Math.round(val).toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};

export const rgbaToHex = (
  red: number,
  green: number,
  blue: number,
  alpha = 1
) => {
  const alphaHex = componentToHex(Math.round(alpha * 255));
  const valueAlpha = alphaHex == "ff" ? "" : alphaHex;
  return (
    "#" +
    componentToHex(red) +
    componentToHex(green) +
    componentToHex(blue) +
    valueAlpha
  );
};

export const hexToRgba = (val: string) => {
  // transform
  let newVal =
    val.length < 6 ? val.replace(/([^#])/g, (_, text) => text + text) : val;

  if (/^#([a-fA-F-0-9]+)$/.test(val)) {
    const hex = newVal.replace("#", "");
    const red = parseInt(hex.substring(0, 2) || "00", 16);
    const green = parseInt(hex.substring(2, 4) || "00", 16);
    const blue = parseInt(hex.substring(4, 6) || "00", 16);
    const alpha =
      Math.round((parseInt(hex.substring(6, 8) || "ff", 16) / 255) * 100) / 100;
    return {
      red,
      green,
      blue,
      alpha,
    } as RGBAColor;
  } else {
    throw `${val} is not matched hex color`;
  }
};

/* ^^^^^^^^^^^^^^^^ COLOR ^^^^^^^^^^^^^^^*/
