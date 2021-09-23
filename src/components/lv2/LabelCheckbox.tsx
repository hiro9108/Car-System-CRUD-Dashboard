import React from "react";
import { SerializedStyles } from "@emotion/react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { Checkbox, Label } from "@/components/lv1";

type LLabelCheckboxProps = {
  id?: string;
  css?: SerializedStyles;
  className?: string;
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
};

export const LabelCheckbox: React.FC<LLabelCheckboxProps> = ({
  id,
  css,
  className,
  label,
  name,
  register,
}) => {
  return (
    <div className="flex justify-center items-center">
      <Label htmlFor={id} label={label} />
      <Checkbox
        id={id}
        css={css}
        className={className}
        name={name}
        register={register}
      />
    </div>
  );
};
