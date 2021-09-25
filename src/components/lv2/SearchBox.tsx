import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { css } from "@emotion/react";

import { Color } from "@/theme";
import {
  selectCarStatus,
  filterNumber,
  filterMakerModelYear,
  filterReset,
} from "@/redux/carStatusReducer";
import { WrapperButton, TextField, SearchIcon } from "@/components/lv1";

const rootStyle = css`
  width: 350px;
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
  const [init, setInit] = useState();
  const { register, handleSubmit, reset } = useForm();

  const status = useSelector(selectCarStatus);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   setInit(status);
  // }, []);

  const onSubmit: SubmitHandler<{ text: string; filter: string }> = ({
    text,
    filter,
  }) => {
    // if (text === "") {
    //   dispatch(filterReset(status));
    //   return;
    // }
    if (filter === "number") {
      const filterNo = status.filter((el) => el._id === parseInt(text));
      dispatch(filterNumber(filterNo));
    }
    if (filter === "make") {
      const filterMake = status.filter((el) => el.make.includes(text));
      dispatch(filterMakerModelYear(filterMake));
    }
    if (filter === "model") {
      const filterModel = status.filter((el) => el.model.includes(text));
      dispatch(filterMakerModelYear(filterModel));
    }
    if (filter === "year") {
      const filterYear = status.filter((el) => String(el.year).includes(text));
      dispatch(filterMakerModelYear(filterYear));
    }
    console.log("text Search!!!", text);
    console.log("filter Search!!!", filter);
    console.log("filter Search!!!", status);
    reset();
  };

  return (
    <form css={rootStyle} onSubmit={handleSubmit(onSubmit)}>
      <select className="" {...register("filter")}>
        <option value="number">No</option>
        <option value="make">Make</option>
        <option value="model">Model</option>
        <option value="year">Year</option>
      </select>
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
