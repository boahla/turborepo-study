import { Control, FieldPath, FieldValues } from "react-hook-form";

export type CustomFormFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = {
  name: TName;
  control: Control<TFieldValues>;
};
