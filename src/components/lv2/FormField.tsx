import React, { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { css } from "@emotion/react";
import { Color } from "@/theme";
import { Button } from "@/components/lv1";
import { LabelTextField } from "@/components/lv2";

const ErrorMsgStyle = css`
  color: ${Color.Error};
`;

export const FormField: React.FC<{
  onSubmit?: any;
  value?: any;
  setIsClickUpdateBtn?: Dispatch<SetStateAction<boolean>>;
}> = ({ onSubmit, value, setIsClickUpdateBtn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-96">
      <span css={ErrorMsgStyle}>{errors.make && errors.make.message}</span>
      <LabelTextField
        id="make"
        className="mt-1 mb-8"
        placeholder="Please enter Make value"
        label="MAKE"
        name="make"
        value={value?.make}
        register={register}
        validation={{
          required: "Required field",
        }}
      />

      <span css={ErrorMsgStyle}>{errors.model && errors.model.message}</span>
      <LabelTextField
        id="model"
        className="mt-1 mb-8"
        placeholder="Please enter Model value"
        label="MODEL"
        name="model"
        value={value?.model}
        register={register}
        validation={{
          required: "Required field",
        }}
      />

      <span css={ErrorMsgStyle}>{errors.year && errors.year.message}</span>
      <LabelTextField
        id="year"
        className="mt-1 mb-8"
        placeholder="Please enter Year value"
        label="YEAR"
        name="year"
        value={value?.year}
        register={register}
        validation={{
          required: "Required field",
        }}
      />

      <span css={ErrorMsgStyle}>{errors.price && errors.price.message}</span>
      <LabelTextField
        id="price"
        className="mt-1 mb-8"
        placeholder="Please enter Price value"
        label="PRICE"
        name="price"
        value={value?.price}
        register={register}
        validation={{
          required: "Required field",
        }}
      />
      <div className="flex justify-around items-center">
        {value ? (
          <>
            {value.status ? (
              <Button
                type="submit"
                onClick={() => setIsClickUpdateBtn?.(false)}
              >
                Mark As Sold
              </Button>
            ) : (
              <Button
                type="submit"
                onClick={() => setIsClickUpdateBtn?.(false)}
              >
                Mark As Live
              </Button>
            )}
            <Button type="submit" onClick={() => setIsClickUpdateBtn?.(true)}>
              Update
            </Button>
          </>
        ) : (
          <>
            <Button type="submit">Add</Button>
          </>
        )}
      </div>
    </form>
  );
};
