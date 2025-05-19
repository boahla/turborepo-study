import { ROUTES } from "@/lib/routes";
import { ClipboardList, GraduationCap, Pencil } from "lucide-react";

export const SIDEBAR_MENUS = [
  {
    label: "시험 관리",
    icon: (
      <GraduationCap className="w-[22px] h-[22px] text-[rgba(0,0,0,0.50)]" />
    ),
    href: ROUTES.EXAM.LIST,
  },
  {
    label: "문항 출제/관리",
    icon: <Pencil className="w-[22px] h-[22px] text-[rgba(0,0,0,0.50)]" />,
    href: "/library",
  },
  {
    label: "설문",
    icon: (
      <ClipboardList className="w-[22px] h-[22px] text-[rgba(0,0,0,0.50)]" />
    ),
    href: "/survey",
  },
];
