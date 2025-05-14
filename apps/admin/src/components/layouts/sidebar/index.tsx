"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SIDEBAR_MENUS } from "./sidebar-items";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  // 초기 메뉴 열림 상태 설정
  useEffect(() => {
    const initialOpenMenus: Record<string, boolean> = {};

    SIDEBAR_MENUS.forEach((item) => {
      if (item.children) {
        const hasMatch = item.children.some((sub) =>
          pathname.startsWith(sub.href)
        );
        if (hasMatch) {
          initialOpenMenus[item.label] = true;
        }
      }
    });

    setOpenMenus(initialOpenMenus);
  }, [pathname]);

  // 메뉴 열림 상태 토글
  const toggle = (label: string) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <aside className="w-[300px] h-full p-2 border-r bg-white px-4 py-6 overflow-hidden">
      <nav>
        {SIDEBAR_MENUS.map((item) => {
          const isActive = item.href && pathname.startsWith(item.href);
          const hasChildren = !!item.children;

          return (
            <div key={item.label}>
              <div
                className={cn(
                  "flex items-center justify-between pl-[40px] py-[16px] pr-[24px] rounded cursor-pointer hover:bg-[rgba(0,0,0,0.04)]",
                  isActive && "bg-gray-100 font-semibold"
                )}
                onClick={() =>
                  hasChildren ? toggle(item.label) : router.push(item.href)
                }
              >
                <div className="flex items-center gap-2">
                  <span>{item.icon}</span>
                  <span className="text-[rgba(0,0,0,0.60)] font-[16px] font-semibold">
                    {item.label}
                  </span>
                </div>
                {hasChildren && (
                  <span className="text-sm">
                    {openMenus[item.label] ? "▲" : "▼"}
                  </span>
                )}
              </div>

              {/* 하위 메뉴 */}
              {hasChildren && (
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openMenus[item.label] ? "max-h-[500px]" : "max-h-0"
                  )}
                >
                  <div>
                    {item.children?.map((sub) => {
                      const isSubActive = pathname.startsWith(sub.href);
                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={cn(
                            "block px-[40px] py-4 leading-[22px] rounded font-[15px] font-medium hover:bg-[rgba(0,0,0,0.04)] text-[rgba(0,0,0,0.60)]",
                            isSubActive && "bg-[rgba(0,0,0,0.04)]"
                          )}
                        >
                          {sub.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
