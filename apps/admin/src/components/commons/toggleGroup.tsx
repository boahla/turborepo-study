import {
  ToggleGroup as ToggleGroupComponent,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

const TOGGLE_GROUP_ITEMS = [
  {
    value: "1",
    label: "1단",
  },
  {
    value: "2",
    label: "2단",
  },
  {
    value: "3",
    label: "3단",
  },
];
const ToggleGroup = ({ className }: { className?: string }) => {
  return (
    <ToggleGroupComponent
      type="single"
      className={cn("bg-[#EAEDFF] rounded-[32px] px-[9px] py-2", className)}
      defaultValue={TOGGLE_GROUP_ITEMS[0].value}
    >
      {TOGGLE_GROUP_ITEMS.map((item) => (
        <ToggleGroupItem
          key={item.value}
          value={item.value}
          aria-label={item.label}
          className="bg-[#EAEDFF] !rounded-[30px] text-[#7D90F9] data-[state=on]:bg-[#7D90F9] data-[state=on]:text-white data-[state=on]:text-white px-[15px] hover:text-[#7D90F9] font-[500] text-[14px] leading-[24px] "
        >
          {item.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroupComponent>
  );
};

export default ToggleGroup;
