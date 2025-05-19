import { Button } from "@/components/ui/button";
import { CardHeader } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";

const DRROPDOWN_MENUS = [
  {
    label: "수정",
  },
  {
    label: "복사",
  },
  {
    label: "삭제",
  },
];
const Header = () => {
  return (
    <CardHeader className="px-[20px] pt-[20px] absolute top-0 left-0 w-[100%]">
      <div className="flex items-center justify-between items-center">
        <div className="text-[12px] font-[400] leading-[18px] rounded-[4px] bg-[#EAEBEB] px-[12px] py-[4px]">
          시험
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className="!border-none bg-transparent !p-0"
          >
            <Button
              variant="ghost"
              className="bg-transparent focus-visible:ring-0"
            >
              <MoreVertical
                color="rgba(0,0,0,0.18)"
                className="!w-[22px] !h-[22px]"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border-none shadow-[0px2px1px-1pxrgba(145, 158, 171, 0.20),0px1px1px0pxrgba(145, 157, 171, 0.14),0px1px3px0pxrgba(145, 158, 171, 0.12)]">
            <DropdownMenuGroup>
              {DRROPDOWN_MENUS.map((menu) => (
                <DropdownMenuItem
                  key={menu.label}
                  className="px-4 py-3 !hover:bg-[rgba(0,0,0,0.04)]"
                >
                  <div className="text-[16px] font-[400] leading-[24px] text-[rgba(0,0,0,0.50)]">
                    {menu.label}
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </CardHeader>
  );
};

export default Header;
