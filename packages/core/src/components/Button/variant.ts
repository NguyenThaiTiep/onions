import { Theme } from "@emotion/react";
import { FontSize, Space } from "../../libs";

export type ButtonColor =
  | "primary"
  | "secondary"
  | "error"
  | "success"
  | "warning";

export type ButtonVariant = "link" | "container" | "outlined";

export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

export const sizeVariants: Record<
  ButtonSize,
  {
    padding: Space[];
    fontSize: FontSize;
  }
> = {
  xs: {
    padding: ["s4", "s6"],
    fontSize: "x",
  },
  sm: {
    padding: ["s6", "s8"],
    fontSize: "s",
  },
  md: {
    padding: ["s6", "s12"],
    fontSize: "m",
  },
  lg: {
    padding: ["s10", "s16"],
    fontSize: "m",
  },
  xl: {
    padding: ["s12", "s16"],
    fontSize: "l",
  },
};
const getContainerStyles = (theme: Theme, color: ButtonColor) => `
  background-color: ${theme.colors[color + 500]};
  border-color: ${theme.colors[color + 500]};
  color: ${theme.colors.light};

  &:hover{
    background-color: ${theme.colors[color + 600]};
    border-color: ${theme.colors[color + 600]};
  };
`;

const getOutlinedStyles = (theme: Theme, color: ButtonColor) => `
  background-color: transparent;
  border: 1px solid;
  border-color: ${theme.colors[color + 500]};
  color: ${theme.colors[color + 500]};

  &:hover{
    color: ${theme.colors.light};
    background-color: ${theme.colors[color + 500]};
    border-color: ${theme.colors[color + 500]};
  };
`;

const getLinkStyles = (theme: Theme, color: ButtonColor) => `
  color: ${theme.colors[color + 500]};

  &:hover{
    color: ${theme.colors[color + 600]};
  };
`;
export const variantStyles: Record<
  ButtonVariant,
  (theme: Theme, color: ButtonColor) => string
> = {
  container: getContainerStyles,
  outlined: getOutlinedStyles,
  link: getLinkStyles,
};

/**
 *@container
 * backgroundColor: color
 * borderColor: color;
 * textColor: light
 * hover: color600, hoverColor: color600,
 *
 *@outlined
 * backgroundColor: transference
 * borderColor: color
 * textColor: color
 * hover: textColor: color600, borderColor: 600
 *
 *@link
 * backgroundColor: transference
 * textColor: color
 * active: textColor:
 */

/**
 * @size xs
 *  padding: s2, s4
 * @size sm
 *  padding: s4, s6
 * @size md
 *  padding: s6, s8
 * @size lg
 *  padding: s10, s12
 * @size xl
 *  padding: s12, s16
 */

/**
 * @block width: 100%
 */
