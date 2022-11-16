import { Theme } from "@emotion/react";
import { ThemeColor } from "../theme/colors";
import { Spaces } from "../theme/spaces";

export type Color = keyof Theme["colors"];
export type Radii = keyof Theme["radius"];
export type Space = keyof Theme["spaces"];
export type FontSize = keyof Theme["fontSizes"];

export interface BaseProps {
  //color
  backgroundColor?: Color;
  color?: Color;
  borderColor?: Color;
  // size
  width?: number | string;
  height?: number | string;
  maxWidth?: number | string;
  maxHeight?: number | string;
  borderWidth?: number | string;

  // space
  padding?: Space | Space[];
  paddingLeft?: Space;
  paddingRight?: Space;
  paddingTop?: Space;
  paddingBottom?: Space;
  margin?: Space | [Space, Space];
  marginLeft?: Space;
  marginRight?: Space;
  marginTop?: Space;
  marginBottom?: Space;
  borderRadius?: Radii;
}

export const CommonStyles = (props: BaseProps & { theme: Theme }) => {
  const { theme } = props;
  return `
    ${getDimension("width", props.width)}
    ${getDimension("height", props.height)}
    ${getDimension("max-width", props.maxWidth)}
    ${getDimension("max-height", props.maxHeight)}
    ${getSpace("margin", props.margin, theme.spaces)}
    ${getSpace("margin-left", props.marginLeft, theme.spaces)}
    ${getSpace("margin-left", props.marginRight, theme.spaces)}
    ${getSpace("margin-top", props.marginTop, theme.spaces)}
    ${getSpace("margin-bottom", props.marginBottom, theme.spaces)}
    ${getSpace("padding", props.padding, theme.spaces)}
    ${getSpace("padding-left", props.paddingLeft, theme.spaces)}
    ${getSpace("padding-left", props.paddingRight, theme.spaces)}
    ${getSpace("padding-top", props.paddingTop, theme.spaces)}
    ${getSpace("padding-bottom", props.paddingBottom, theme.spaces)}
    ${getColor("color", props.color, theme.colors)}
    ${getColor("border-color", props.borderColor, theme.colors)}
    ${getColor("background-color", props.backgroundColor, theme.colors)}
    ${getRadii("border-radius", props.borderRadius, theme.radius)}
  `;
};

export const getDimension = (key, value?: number | string) => {
  if (!value) return "";
  if (typeof value === "number") return `${key}: ${value}px;`;
  else return `${key}: ${value};`;
};

export const getSpace = (
  key: string,
  value?: Space | Space[],
  spaces?: Spaces
) => {
  if (!value) return "";
  if (typeof value === "number") return `${key}: ${value}px;`;
  if (typeof value === "object") {
    return `${key}: ${value.reduce((a, b) => `${a} ${spaces?.[b] || b}`, "")};`;
  } else return `${key}:  ${spaces?.[value] || value};`;
};

export const getColor = (key, value?: Color | string, colors?: ThemeColor) => {
  if (!value) return "";
  else return `${key}:  ${colors?.[value] || value};`;
};
export const getRadii = (
  key,
  value?: Radii | string | number,
  radius?: Theme["radius"]
) => {
  if (!value) return "";
  if (typeof value === "number") return `${key}: ${value}px;`;
  else return `${key}:  ${radius?.[value] || value};`;
};
