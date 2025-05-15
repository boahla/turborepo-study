import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Label from "./components/label";

const FormLabelLayout = ({
  label,
  required,
  popover,
  children,
  className,
}: {
  label: string;
  required?: boolean;
  popover?: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label label={label} required={required} popover={popover} />
      <div>{children}</div>
    </div>
  );
};
export default FormLabelLayout;
