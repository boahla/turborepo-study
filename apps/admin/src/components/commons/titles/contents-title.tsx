import { cn } from "@/lib/utils";

const ContentsTitle = ({
  title,
  description,
  className,
}: {
  title: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div className={cn("flex gap-1 flex-col", className)}>
      <div className="text-[24px] leading-[34px] font-[700] text-[rgba(0,0,0,0.70)] tracking-[-0.5px]">
        {title}
      </div>
      {description && (
        <div className="text-[16px] font-[400] leading-[24px] text-[rgba(0,0,0,0.6)]">
          {description}
        </div>
      )}
    </div>
  );
};
export default ContentsTitle;
