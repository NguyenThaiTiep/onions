import {
  themeColors,
  mainColors,
  generateThemeColors,
  shadeMainColors,
  ThemeColor,
} from "./colors";
import { fontSizes } from "./fontSizes";
import { radii } from "./radius";
import { spaces } from "./spaces";

export const defaultTheme = {
  colors: {
    ...shadeMainColors(mainColors),
    ...generateThemeColors(themeColors),
  },
  fontSizes: { ...fontSizes },
  spaces: { ...spaces },
  breakpoints: {
    xs: "(max-width: 575px)",
    sm: "(min-width: 576px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1440px)",
    xxl: "(min-width: 1600px)",
  },
  radius: { ...radii },
};

export type OnionTheme = Partial<typeof defaultTheme>;

export type CustomTheme = {
  colors?: ThemeColor;
};
