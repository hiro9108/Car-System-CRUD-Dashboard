import React from "react";
import { css, SerializedStyles } from "@emotion/react";
import { Color } from "@/theme";

const rootStyle = css`
  /* appearance: none; */
  border: 1px solid ${Color.Black0};
`;

export const Checkbox: React.FC<{
  id?: string;
  css?: SerializedStyles;
  className?: string;
  name: string;
  register: any;
}> = ({ id, css, className, name, register }) => (
  <input
    id={id}
    type="checkbox"
    css={[rootStyle, css]}
    className={className}
    {...register(name)}
  />
);
