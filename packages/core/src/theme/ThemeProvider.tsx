import React, { ReactNode } from "react";
import { Theme, ThemeProvider as BaseThemeProvider } from "@emotion/react";
import { CustomTheme, defaultTheme } from "./theme";
import { generateThemeColors, themeColors } from "./colors";

export interface ThemeProviderProps {
  theme?: CustomTheme;
  children?: ReactNode;
}
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  children,
}) => {
  const colors = {
    ...defaultTheme.colors,
    ...(theme?.colors
      ? generateThemeColors({ ...themeColors, ...theme?.colors })
      : {}),
  };

  const emotionTheme: Theme = {
    ...defaultTheme,
    colors,
  };

  return <BaseThemeProvider theme={emotionTheme}>{children}</BaseThemeProvider>;
};
