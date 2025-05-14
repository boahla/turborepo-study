import { ROUTES } from "@/lib/routes";

export const SIDEBAR_MENUS = [
  {
    label: "시험",
    icon: "🎓",
    children: [
      { label: "시험 관리", href: ROUTES.EXAM.LIST },
      { label: "새 시험 등록하기", href: ROUTES.EXAM.NEW },
    ],
  },
  {
    label: "라이브러리",
    icon: "📁",
    href: "/library",
  },
  {
    label: "설문",
    icon: "📋",
    href: "/survey",
  },
];
