import { getSpace, Space, styled } from "../../libs";

export interface FlexProps {
  direction?: "row" | "column";
  gap?: Space | Space[];
  align?: "center" | "flex-start" | "flex-end";
}
export const Flex = styled("div")<FlexProps>(
  ({ theme, direction, gap, align }) => {
    return `
    display:flex;
    flex-direction: ${direction};
    align-items: ${align};
    ${getSpace("gap", gap, theme.spaces)}
    flex-wrap: wrap;
  `;
  }
);
