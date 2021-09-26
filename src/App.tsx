import React from "react";
import { css } from "@emotion/react";
import { Inventory } from "@/components/lv3";
import { MainContent } from "@/components/lv5";

const rootStyle = css`
  min-width: 600px;
  display: flex;
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
