import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { AxiosResponse } from "axios";
import { css } from "@emotion/react";

import { api } from "@/utils/api";
import { Color } from "@/theme";
import { CAR_STATUS } from "@/types/globalTypes";
import {
  selectCarStatus,
  filterNumber,
  filterMakerModelYear,
  filterReset,
} from "@/redux/carStatusReducer";
import {
  WrapperButton,
  TextField,
  SearchIcon,
  FilterSelect,
} from "@/components/lv1";

const rootStyle = css`
  width: 350px;
  border: 1px solid ${Color.Primary};
  border-radius: 0.2rem;
  box-shadow: 2px 1px 1px ${Color.PrimaryDark};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
`;

const textFieldStyle = css`
  border: none;
`;

export const SearchBox: React.FC = () => {
  const { register, handleSubmit, reset, watch } = useForm();

  const watchField = watch(["search"]);
  const [initializeData, serInitializeData] = useState<CAR_STATUS[]>();

  const status = useSelector(selectCarStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .get("/")
      .then((res: AxiosResponse<{ cars: CAR_STATUS[] }>) => {
        serInitializeData(res.data.cars);
      })
      .catch((err) => console.log(`Error API Connection: ${err}`));
  }, []);

  useEffect(() => {
    if (watchField[0] === "" && initializeData !== undefined) {
      dispatch(filterReset(initializeData));
    }
  }, [watchField, initializeData, dispatch]);

  const onSubmit: SubmitHandler<{ search: string; filter: string }> = ({
    search,
    filter,
  }) => {
    if (!search) {
      if (initializeData === undefined) return;
      dispatch(filterReset(initializeData));
      return;
    }

    if (search && !status.length) {
      if (initializeData === undefined) return;
      dispatch(filterReset(initializeData));
      reset();
      return;
    }

    if (search)
      switch (filter) {
        case "number":
          const filterNo = status.filter((el) => el._id === parseInt(search));
          dispatch(filterNumber(filterNo));
          break;
        case "make":
          const filterMake = status.filter((el) => el.make.includes(search));
          dispatch(filterMakerModelYear(filterMake));
          break;
        case "model":
          const filterModel = status.filter((el) => el.model.includes(search));
          dispatch(filterMakerModelYear(filterModel));
          break;
        case "year":
          const filterYear = status.filter((el) =>
            String(el.year).includes(search)
          );
          dispatch(filterMakerModelYear(filterYear));
          break;
        default:
          console.log(`Please check the filter value: ${filter}`);
      }
  };

  return (
    <form css={rootStyle} onSubmit={handleSubmit(onSubmit)}>
      <FilterSelect register={register} />
      <TextField
        css={textFieldStyle}
        placeholder="Search..."
        name="search"
        search
        register={register}
      />
      <WrapperButton type="submit">
        <SearchIcon />
      </WrapperButton>
    </form>
  );
};
