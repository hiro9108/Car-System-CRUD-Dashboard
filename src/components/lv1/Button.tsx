import React from "react";
import { css } from "@emotion/react";
import { Color } from "@/theme";

type ButtonProps = {
  className?: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
};

const rootStyle = css`
  margin: 1rem;
  border: 1px solid ${Color.PrimaryDark};
  padding: 0.5rem 1.5rem;
  border-radius: 0.2rem;
  color: ${Color.White0};
  background-color: ${Color.Primary};
  box-shadow: 2px 1px 1px ${Color.PrimaryDark};
  transition: ease-in-out 0.3s;
  &:hover {
    color: ${Color.Primary};
    background-color: ${Color.White0};
    transform: scale(1.05) translateY(-2px);
  }
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  type,
  onClick,
}) => {
  return (
    <button css={rootStyle} className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
