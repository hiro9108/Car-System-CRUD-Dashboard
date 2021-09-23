import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { css } from "@emotion/react";
import { Color } from "@/theme";
import { WrapperButton, TextField, SearchIcon } from "@/components/lv1";

const rootStyle = css`
  width: 300px;
  border: 1px solid ${Color.Black0};
  border-radius: 0.2rem;
  box-shadow: 2px 1px 1px lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
`;

const textFieldStyle = css`
  border: none;
`;

export const SearchBox: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit: SubmitHandler<{ text: string }> = (data) => {
    console.log("Search!!!", data);
    reset();
  };

  return (
    <form css={rootStyle} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        css={textFieldStyle}
        placeholder="Search..."
        name="text"
        register={register}
      />
      <WrapperButton type="submit">
        <SearchIcon />
      </WrapperButton>
    </form>
  );
};
