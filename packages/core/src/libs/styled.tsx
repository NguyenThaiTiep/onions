import React, { ComponentProps } from "react";
import { default as baseStyled, CreateStyledComponent } from "@emotion/styled";

import { OnionTheme } from "../theme";

export { type Theme, useTheme } from "@emotion/react";
import { BaseProps, CommonStyles } from "./commonStyles";

declare module "@emotion/react" {
  interface Theme extends OnionTheme {}
}

export type Tags = JSX.IntrinsicElements;
export type Tag = keyof Tags;
export type OnionStyledTags = {
  [Tag in keyof JSX.IntrinsicElements]: CreateStyledComponent<
    BaseProps,
    JSX.IntrinsicElements[Tag]
  >;
};

export type OCProps<T extends Tag & {}> = T extends Tag
  ? OnionStyledTags[T]
  : CreateStyledComponent<BaseProps & T>;

const CommonComponent = baseStyled.base<BaseProps>`
  ${CommonStyles}
`;

export interface CreateStyled {
  <T extends Tag>(component: T): OnionStyledTags[T];
  <T extends React.ComponentClass<React.ComponentProps<T>>>(
    component: T
  ): CreateStyledComponent<BaseProps & ComponentProps<T>>;
  <T extends React.ComponentType<React.ComponentProps<T>>>(
    component: T
  ): CreateStyledComponent<BaseProps & ComponentProps<T>>;
}
const createStyled: CreateStyled = (component) =>
  baseStyled((props) => <CommonComponent as={component} {...props} />);

export const styled = createStyled;
