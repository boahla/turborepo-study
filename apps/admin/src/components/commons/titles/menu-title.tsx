import { cn } from "@/lib/utils";

const MenuTitle = ({
  title,
  description,
  className,
}: {
  title: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div className={cn("flex gap-2 flex-col", className)}>
      <div className="text-[28px] leading-[32px] font-[700] text-[rgba(0,0,0,0.80)]">
        {title}
      </div>
      {description && (
        <div className="text-[16px] font-[500] leading-[24px] text-[rgba(0,0,0,0.5)]">
          {description}
        </div>
      )}
    </div>
  );
};
export default MenuTitle;
