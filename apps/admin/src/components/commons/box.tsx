import { cn } from "@/lib/utils";

type BoxProps = {
  children: React.ReactNode;
  className?: string;
  borderColor?: "subtle" | "medium" | "light";
};

// figma의 box border 색상 매핑
const borderColorMap = {
  subtle: "border-[#EAEBEB]",
  medium: "border-[#E0E0E0]",
  light: "border-[#F1F1F5]",
};

export function Box({ children, className, borderColor = "subtle" }: BoxProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-[8px] border p-4",
        borderColorMap[borderColor],
        className
      )}
    >
      {children}
    </div>
  );
}
