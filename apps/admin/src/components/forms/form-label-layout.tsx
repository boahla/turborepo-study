import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Label from "./components/label";

const FormLabelLayout = ({
  label,
  required,
  popover,
  children,
  className,
  labelClassName,
}: {
  label: string;
  required?: boolean;
  popover?: string;
  children?: ReactNode;
  className?: string;
  labelClassName?: string;
}) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label
        label={label}
        required={required}
        popover={popover}
        className={labelClassName}
      />
      {children && <div>{children}</div>}
    </div>
  );
};
export default FormLabelLayout;
