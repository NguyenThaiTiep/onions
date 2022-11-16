import React, { useState, useEffect } from "react";
import { styled } from "../../libs";
interface RippleProps {
  color?: string;
}

const RippleItem = styled("span")`
  transform: scale(0);
  border-radius: 100%;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.5);
  animation: ripple ease-in-out;
  animation-duration: 500ms;

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;

const Wrapper = styled("div")`
  position: absolute;
  overflow: hidden;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: inline-block;
`;

export const Ripple: React.FC<RippleProps> = ({
  color = "rgba(255, 255, 255, 0.5)",
}) => {
  const [ripples, setRipples] = useState<
    Array<{
      x: number;
      y: number;
      size: number;
      color?: string;
    }>
  >([]);
  useEffect(() => {
    let timer: number;
    if (ripples.length > 0) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setRipples([]);
      }, 2500);
    }

    return () => clearTimeout(timer);
  }, [ripples.length]);

  const addRipple = (event: React.MouseEvent) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const x = event.clientX - rippleContainer.x - size / 2;
    const y = event.clientY - rippleContainer.y - size / 2;
    const newRipple = {
      x,
      y,
      size,
    };
    setRipples([...ripples, newRipple]);
  };
  return (
    <Wrapper onClick={addRipple}>
      {ripples.map((ripple, index: number) => {
        return (
          <RippleItem
            key={index}
            style={{
              top: ripple.y,
              left: ripple.x,
              backgroundColor: color,
            }}
            width={ripple.size}
            height={ripple.size}
          />
        );
      })}
    </Wrapper>
  );
};
