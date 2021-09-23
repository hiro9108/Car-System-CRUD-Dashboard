import React from "react";
import { SerializedStyles } from "@emotion/react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { TextField, Label } from "@/components/lv1";

type LabelTextFieldProps = {
  id?: string;
  css?: SerializedStyles;
  className?: string;
  placeholder?: string;
  value?: string;
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
};

export const LabelTextField: React.FC<LabelTextFieldProps> = ({
  id,
  css,
  className,
  placeholder,
  value,
  label,
  name,
  register,
}) => {
  return (
    <div className="flex flex-col">
      <Label htmlFor={id} label={label} />
      <TextField
        id={id}
        css={css}
        className={className}
        placeholder={placeholder}
        value={value}
        name={name}
        register={register}
      />
    </div>
  );
};
