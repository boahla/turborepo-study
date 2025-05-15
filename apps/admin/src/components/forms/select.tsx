"use client";
import { FieldPath, FieldValues } from "react-hook-form";
import FormItem from "./components/form-item";
import { CustomFormFieldProps } from "./type";
import InputSelect from "./components/input-select";

const Select = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  options,
  className,
  ...props
}: CustomFormFieldProps<TFieldValues, TName> & {
  options: { value: string; label: string }[];
  className?: string;
}) => {
  return (
    <FormItem
      {...props}
      render={(field) => (
        <InputSelect
          {...field}
          value={field.value}
          onValueChange={field.onChange}
          options={options}
          className={className}
        />
      )}
    />
  );
};

export default Select;
