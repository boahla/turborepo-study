import {
  FormField,
  FormItem as FormItemUI,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { ReactNode } from "react";
import { FieldPath, FieldValues, ControllerRenderProps } from "react-hook-form";
import { CustomFormFieldProps } from "../type";

type TextfieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = {
  render: (field: ControllerRenderProps<TFieldValues, TName>) => ReactNode;
};

const FormItem = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  render,
  ...props
}: CustomFormFieldProps<TFieldValues, TName> &
  TextfieldProps<TFieldValues, TName>) => {
  return (
    <FormField
      {...props}
      render={({ field }) => (
        <FormItemUI>
          <FormControl>{render(field)}</FormControl>
          <FormMessage />
        </FormItemUI>
      )}
    />
  );
};

export default FormItem;
