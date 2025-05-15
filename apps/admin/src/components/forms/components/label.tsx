import Popover from "@/components/commons/popover";
import { Info } from "lucide-react";
import { ReactNode } from "react";
const Label = ({
  label,
  required,
  popover,
}: {
  label: string;
  required?: boolean;
  popover?: ReactNode;
}) => {
  return (
    <div className="flex items-center flex-row gap-1">
      <div className="flex items-center flex-row gap-[2px]">
        <div>{label}</div>
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
