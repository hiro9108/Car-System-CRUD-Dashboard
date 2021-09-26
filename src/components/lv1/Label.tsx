import React from "react";
import { css } from "@emotion/react";
import { Typography } from "@/theme";

const rootStyle = css`
  font-family: ${Typography.Primary};
`;

export const Label: React.FC<{ label: string; htmlFor: string | undefined }> =
  ({ label, htmlFor }) => (
    <label css={rootStyle} htmlFor={htmlFor}>
      {label}
    </label>
  );
