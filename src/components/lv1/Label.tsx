import React from "react";
import { css } from "@emotion/react";

const rootStyle = css``;

export const Label: React.FC<{ label: string; htmlFor: string | undefined }> =
  ({ label, htmlFor }) => (
    <label css={rootStyle} htmlFor={htmlFor}>
      {label}
    </label>
  );
