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
  border: 1px solid ${Color.Black0};
  padding: 0.5rem 1.5rem;
  border-radius: 0.2rem;
  transition: ease-in-out 0.3s;
  &:hover {
    background-color: red;
    transform: scale(1.1);
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
