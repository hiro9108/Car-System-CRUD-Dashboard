import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { css, SerializedStyles } from "@emotion/react";
import { Color, Typography } from "@/theme";

type TextFieldProps = {
  id?: string;
  css?: SerializedStyles;
  className?: string;
  placeholder?: string;
  value?: string;
  name: string;
  search?: boolean;
  register: UseFormRegister<FieldValues>;
  validation?: { required: string };
};

const searchRootStyle = css`
  border: 1px solid ${Color.Primary};
  border-radius: 0.2rem;
  padding: 0.2rem 1rem;
  font-size: 1.2rem;
  outline: none;
  &::placeholder {
    color: ${Color.Primary};
    font-family: ${Typography.Primary};
  }
`;

const rootStyle = css`
  ${searchRootStyle}
  box-shadow: 2px 1px 1px ${Color.PrimaryDark};
  font-size: 1.4rem;
  font-family: ${Typography.Primary};
`;

export const TextField: React.FC<TextFieldProps> = ({
  id,
  css,
  className,
  placeholder,
  value,
  name,
  search,
  register,
  validation,
}) => {
  return (
    <input
      id={id}
      css={search ? [searchRootStyle, css] : [rootStyle, css]}
      type="text"
      className={className}
      placeholder={placeholder}
      defaultValue={value}
      {...register(name, validation)}
    />
  );
};
