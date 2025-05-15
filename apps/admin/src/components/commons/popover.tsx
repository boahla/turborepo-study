import { ReactNode } from "react";
import {
  Popover as UIPopover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import { PopoverPortal } from "@radix-ui/react-popover";

const Popover = ({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) => {
  return (
    <UIPopover>
      <PopoverTrigger className="cursor-pointer">{icon}</PopoverTrigger>
      <PopoverPortal>
        <PopoverContent>{children}</PopoverContent>
      </PopoverPortal>
    </UIPopover>
  );
};
export default Popover;
