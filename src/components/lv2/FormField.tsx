import React, { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/lv1";
import { LabelTextField, LabelCheckbox } from "@/components/lv2";

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
      <span>{errors.make && errors.make.message}</span>
      <LabelTextField
        id="make"
        className="mt-1 mb-8"
        placeholder="make"
        label="MAKE"
        name="make"
        value={value?.make}
        register={register}
        validation={{
          required: "Not allowed empty",
        }}
      />
      <LabelTextField
        id="model"
        className="mt-1 mb-8"
        placeholder="model"
        label="MODEL"
        name="model"
        value={value?.model}
        register={register}
      />
      <LabelTextField
        id="year"
        className="mt-1 mb-8"
        placeholder="year"
        label="YEAR"
        name="year"
        value={value?.year}
        register={register}
      />
      <LabelTextField
        id="price"
        className="mt-1 mb-8"
        placeholder="price"
        label="PRICE"
        name="price"
        value={value?.price}
        register={register}
      />
      {/* <LabelCheckbox
        id="status"
        className="block my-8 mx-16"
        label="Sold this vehicle?"
        name="status"
        value={value?.status}
        register={register}
      /> */}
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
            {/* <Button type="submit" onClick={() => setIsClickUpdateBtn?.(false)}>
              {value.status ? "Mark As Sold" : "Mark As Live"}
            </Button> */}
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
