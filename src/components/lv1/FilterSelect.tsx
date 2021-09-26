import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { css } from "@emotion/react";
import { Color } from "@/theme";

const rootStyle = css`
  color: ${Color.Primary};
`;

export const FilterSelect: React.FC<{
  register: UseFormRegister<FieldValues>;
}> = ({ register }) => {
  return (
    <select
      css={rootStyle}
      className="outline-none text-center"
      {...register("filter")}
    >
      <option value="number">No</option>
      <option value="make">Make</option>
      <option value="model">Model</option>
      <option value="year">Year</option>
    </select>
  );
};
