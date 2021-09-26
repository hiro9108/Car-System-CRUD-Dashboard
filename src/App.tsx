import React from "react";
import { css } from "@emotion/react";
import { Color, Typography } from "@/theme";
import { Inventory } from "@/components/lv3";
import { MainContent } from "@/components/lv5";

const rootStyle = css`
  min-width: 600px;
  min-height: 100vh;
  display: flex;
  color: ${Color.PrimaryText};
  font-size: 1.2rem;
  font-family: ${Typography.Primary};
`;

const App: React.FC = () => {
  return (
    <div css={rootStyle}>
      <Inventory />
      <MainContent />
    </div>
  );
};

export default App;
