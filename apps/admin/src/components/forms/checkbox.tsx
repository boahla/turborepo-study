import { cn } from "@/lib/utils";
import { Checkbox as CheckboxUI } from "../ui/checkbox";

const Checkbox = ({
  id,
  className,
  ...props
}: {
  id: string;
  className?: string;
}) => {
  return (
    <CheckboxUI
      id={id}
      className={cn(
        "data-[state=checked]:bg-[#5065E8] data-[state=checked]:text-white data-[state=checked]:border-[#5065E8] w-[20px] h-[20px]",
        className
      )}
      {...props}
    />
  );
};

export default Checkbox;
