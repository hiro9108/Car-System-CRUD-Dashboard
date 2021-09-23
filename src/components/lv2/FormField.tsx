import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/lv1";
import { LabelTextField, LabelCheckbox } from "@/components/lv2";

export const FormField: React.FC<{ onSubmit?: any; value?: any }> = ({
  onSubmit,
  value,
}) => {
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-96">
      <LabelTextField
        id="make"
        className="mt-1 mb-8"
        placeholder="make"
        label="MAKE"
        name="make"
        value={value.make}
        register={register}
      />
      <LabelTextField
        id="model"
        className="mt-1 mb-8"
        placeholder="model"
        label="MODEL"
        name="model"
        value={value.make}
        register={register}
      />
      <LabelTextField
        id="year"
        className="mt-1 mb-8"
        placeholder="year"
        label="YEAR"
        name="year"
        value={value.year}
        register={register}
      />
      <LabelTextField
        id="price"
        className="mt-1 mb-8"
        placeholder="price"
        label="PRICE"
        name="price"
        value={value.price}
        register={register}
      />
      <LabelCheckbox
        id="status"
        className="block my-8 mx-16"
        label="Sold this vehicle?"
        name="status"
        value={value.status}
        register={register}
      />
      <div className="flex justify-around items-center">
        <Button type="submit">Sold</Button>
        <Button type="submit">Update</Button>
      </div>
    </form>
  );
};
