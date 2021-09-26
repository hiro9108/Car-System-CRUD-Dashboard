import React from "react";
import { css } from "@emotion/react";

export const Inventory: React.FC = () => {
  return (
    <div
      css={css`
        flex: 1;
        border: 1px solid black;
        text-align: center;
        padding: 0.5rem;
      `}
    >
      <h1 className="bg-gray-400">inventory</h1>
    </div>
  );
};
