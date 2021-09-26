import React from "react";
import { css } from "@emotion/react";
import { Color } from "@/theme";
import { H1 } from "@/components/lv1";

const rootStyle = css`
  flex: 1;
  padding: 1.1rem 0.2rem 0 0.2rem;
  border-right: 1px solid ${Color.PrimaryLight};
  text-align: center;
`;

export const Inventory: React.FC = () => {
  return (
    <div css={rootStyle}>
      <H1
        css={css`
          color: ${Color.White0};
          background-color: ${Color.Secondary};
        `}
      >
        Inventory
      </H1>
    </div>
  );
};
