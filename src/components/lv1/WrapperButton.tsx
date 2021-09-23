import React from "react";
import { css } from "@emotion/react";

const rootStyle = css`
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  appearance: none;
  cursor: pointer;
  background-color: transparent;
`;

export const WrapperButton: React.FC<{ type: "button" | "submit" | "reset" }> =
  ({ children, type }) => {
    return (
      <button css={rootStyle} type={type}>
        {children}
      </button>
    );
  };
