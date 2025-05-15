"use client";
import { FieldPath, FieldValues } from "react-hook-form";
import FormItem from "./components/form-item";
import InputTextfield from "./components/input-textfield";
import { CustomFormFieldProps } from "./type";

const Textfield = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  maxLength,
  ...props
}: CustomFormFieldProps<TFieldValues, TName> & {
  maxLength?: number;
}) => {
  return (
    <FormItem
      {...props}
      render={(field) => (
        <InputTextfield
          {...field}
          placeholder="시험 제목을 입력하세요"
          className="pr-16"
          maxLength={maxLength}
        />
      )}
    />
  );
};

export default Textfield;
