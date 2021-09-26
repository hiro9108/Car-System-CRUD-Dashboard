import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

export const FilterSelect: React.FC<{
  register: UseFormRegister<FieldValues>;
}> = ({ register }) => {
  return (
    <select className="outline-none text-center" {...register("filter")}>
      <option value="number">No</option>
      <option value="make">Make</option>
      <option value="model">Model</option>
      <option value="year">Year</option>
    </select>
  );
};
