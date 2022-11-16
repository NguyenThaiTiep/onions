import React, { forwardRef, HTMLAttributes } from "react";
import { BaseProps, getDimension, getSpace, styled } from "../../libs";
import { Ripple } from "../Ripple/Ripple";
import {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
  sizeVariants,
  variantStyles,
} from "./variant";

export interface ButtonProps
  extends Omit<BaseProps, "color" | "width">,
    HTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
}

const BaseButton = styled("button")`
  display: inline-block;
  padding: 10px 20px;
  border: none;
  position: relative;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.r2};
`;

export const StyledButton = styled(BaseButton)<ButtonProps>(
  ({ theme, color, variant, size, block }) => {
    return `
    ${variantStyles[variant](theme, color)}
    ${getSpace("padding", sizeVariants?.[size].padding, theme.spaces)}
    ${getDimension("font-size", theme.fontSizes[sizeVariants?.[size].fontSize])}
    ${
      block
        ? `
        width: 100%;
        display: block;
        `
        : ""
    }
    `;
  }
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledButton {...props} ref={ref}>
        {children}
        <Ripple />
      </StyledButton>
    );
  }
);

Button.displayName = "Button";

Button.defaultProps = {
  variant: "container",
  color: "primary",
  size: "md",
};
