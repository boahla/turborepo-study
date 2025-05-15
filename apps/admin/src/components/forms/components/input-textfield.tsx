import { Input as InputUI } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ComponentProps, useMemo } from "react";

const InputTextfield = ({
  maxLength,
  ...props
}: ComponentProps<"input"> & { maxLength?: number }) => {
  const currentLength = useMemo(
    () => props.value?.toString().length || 0,
    [props.value]
  );
  return (
    <div className="relative">
      <InputUI
        {...props}
        className={cn(
          props.className,
          "focus-visible:ring-0 h-[48px] font-[16px] font-[400] leading-[24px]"
        )}
      />

      {/* 카운트 표시 */}
      {maxLength && (
        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
          {currentLength}/{maxLength}
        </div>
      )}
    </div>
  );
};
export default InputTextfield;
