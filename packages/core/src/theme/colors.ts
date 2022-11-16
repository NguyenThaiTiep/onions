import { shadeAlphaColors, shadeColors } from "../utils/color";

export const themeColors = {
  /*===============START ALLOW CUSTOM========== */
  primary: "#007bff",
  secondary: "#6c757d",

  // color status
  success: "#28a745",
  error: "#dc3545",
  warning: "#ffc107",

  textPrimary: "#343a40",
  textSecondary: "#424b55",
  background: "#000000",
  divider: "#767c81",
  border: "#6c757d",
};

export type ThemeColor = Partial<typeof themeColors>;

export const mainColors = {
  red: "#f44336",

  blue: "#0000ff",

  lightBlue: "#03a9f4",

  green: "#00ff00",

  light: "#ffffff",

  dark: "#ffffff",

  gray: "#808080",

  blueGray: "#607d8b",

  yellow: "#ffeb3b",

  orange: "#ff9800",

  teal: "#009688",

  pink: "#e91e63",

  cyan: "#00bcd4",

  grey: "#9e9e9e",

  blueGrey: "#607d8b",

  brown: "#795548",
};

export const generateThemeColors = (colors: ThemeColor) => {
  const primaryColors = shadeColors("primary", colors.primary);
  const secondaryColors = shadeColors("secondary", colors.secondary);
  const successColors = shadeColors("success", colors.success);
  const errorColors = shadeColors("error", colors.error);
  const warningColors = shadeColors("warning", colors.warning);

  const primaryAlphaColors = shadeAlphaColors("primary", colors.primary);
  const secondaryAlphaColors = shadeAlphaColors("secondary", colors.secondary);
  const successAlphaColors = shadeAlphaColors("success", colors.success);
  const errorAlphaColors = shadeAlphaColors("error", colors.error);
  const warningAlphaColors = shadeAlphaColors("warning", colors.warning);

  return {
    ...colors,
    ...warningColors,
    ...errorColors,
    ...successColors,
    ...secondaryColors,
    ...primaryColors,

    ...primaryAlphaColors,
    ...secondaryAlphaColors,
    ...successAlphaColors,
    ...errorAlphaColors,
    ...warningAlphaColors,
  };
};

export const shadeMainColors = (colors: typeof mainColors) => {
  return {
    ...colors,
    ...shadeColors("yellow", colors.yellow),
    ...shadeColors("red", colors.red),
    ...shadeColors("teal", colors.teal),
    ...shadeColors("pink", colors.pink),
    ...shadeColors("cyan", colors.cyan),
    ...shadeColors("grey", colors.grey),
    ...shadeColors("blueGrey", colors.blueGrey),
    ...shadeColors("brown", colors.brown),
    ...shadeColors("orange", colors.orange),
    ...shadeColors("lightBlue", colors.lightBlue),
    ...shadeColors("light", colors.light),
    ...shadeColors("green", colors.green),
    ...shadeColors("gray", colors.gray),
    ...shadeColors("dark", colors.dark),
    ...shadeColors("blueGray", colors.blueGray),
    ...shadeColors("blue", colors.blue),

    ...shadeAlphaColors("yellow", colors.yellow),
    ...shadeAlphaColors("red", colors.red),
    ...shadeAlphaColors("teal", colors.teal),
    ...shadeAlphaColors("pink", colors.pink),
    ...shadeAlphaColors("cyan", colors.cyan),
    ...shadeAlphaColors("grey", colors.grey),
    ...shadeAlphaColors("blueGrey", colors.blueGrey),
    ...shadeAlphaColors("brown", colors.brown),
    ...shadeAlphaColors("orange", colors.orange),
    ...shadeAlphaColors("lightBlue", colors.lightBlue),
    ...shadeAlphaColors("light", colors.light),
    ...shadeAlphaColors("green", colors.green),
    ...shadeAlphaColors("gray", colors.gray),
    ...shadeAlphaColors("dark", colors.dark),
    ...shadeAlphaColors("blueGray", colors.blueGray),
    ...shadeAlphaColors("blue", colors.blue),
  };
};
