import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/lv1";
import { LabelTextField, LabelCheckbox } from "@/components/lv2";

export const FormField: React.FC<{ onSubmit: any }> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-96">
      <LabelTextField
        id="make"
        className="mt-1 mb-8"
        placeholder="make"
        label="MAKE"
        name="make"
        register={register}
      />
      <LabelTextField
        id="model"
        className="mt-1 mb-8"
        placeholder="model"
        label="MODEL"
        name="model"
        register={register}
      />
      <LabelTextField
        id="year"
        className="mt-1 mb-8"
        placeholder="year"
        label="YEAR"
        name="year"
        register={register}
      />
      <LabelTextField
        id="price"
        className="mt-1 mb-8"
        placeholder="price"
        label="PRICE"
        name="price"
        register={register}
      />
      <LabelCheckbox
        id="status"
        className="block my-8 mx-16"
        label="Sold this vehicle?"
        name="status"
        register={register}
      />
      <div className="flex justify-around items-center">
        <Button type="submit">Sold</Button>
        <Button type="submit">Update</Button>
      </div>
    </form>
  );
};
