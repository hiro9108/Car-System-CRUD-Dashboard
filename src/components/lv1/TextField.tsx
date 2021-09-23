import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { css, SerializedStyles } from "@emotion/react";
import { Color } from "@/theme";

type TextFieldProps = {
  id?: string;
  css?: SerializedStyles;
  className?: string;
  placeholder?: string;
  name: string;
  register: UseFormRegister<FieldValues>;
};

const rootStyle = css`
  border: 1px solid ${Color.Black0};
  border-radius: 0.2rem;
  padding: 0.2rem 1rem;
  font-size: 1.2rem;
  outline: none;
`;

export const TextField: React.FC<TextFieldProps> = ({
  id,
  css,
  className,
  placeholder,
  name,
  register,
}) => {
  return (
    <input
      id={id}
      css={[rootStyle, css]}
      type="text"
      className={className}
      placeholder={placeholder}
      {...register(name)}
    />
  );
};
