import {
  Select as SelectUI,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const InputSelect = ({
  value,
  onValueChange,
  options,
  className,
}: {
  value: string;
  onValueChange: (value: string) => void;
  options: { value: string; label: string }[];
  className?: string;
}) => {
  return (
    <SelectUI value={value.toString()} onValueChange={onValueChange}>
      <SelectTrigger
        className={cn(
          "w-[240px] !h-12 focus-visible:ring-0 text-[16px] font-[400] leading-[24px] text-[rgba(0,0,0,0.70)]",
          className
        )}
      >
        <SelectValue placeholder="선택안함" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectUI>
  );
};
export default InputSelect;
