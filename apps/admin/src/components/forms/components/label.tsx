import Popover from "@/components/commons/popover";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import { ReactNode } from "react";
const Label = ({
  label,
  required,
  popover,
  className,
}: {
  label: string;
  required?: boolean;
  popover?: ReactNode;
  className?: string;
}) => {
  return (
    <div className="flex items-center flex-row gap-1">
      <div className="flex items-center flex-row gap-[2px]">
        <div
          className={cn(
            "text-[16px] font-[600] leading-[24px] text-[rgba(0,0,0,0.70)]",
            className
          )}
        >
          {label}
        </div>
        {required && <div className="text-[#00C53B]">*</div>}
      </div>
      {popover && (
        <Popover icon={<Info size={20} color="rgba(0, 0, 0, 0.35)" />}>
          {popover}
        </Popover>
      )}
    </div>
  );
};
export default Label;
