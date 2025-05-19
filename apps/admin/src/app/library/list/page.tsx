"use client";
import MenuTitle from "@/components/commons/titles/menu-title";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/routes";
import Content from "@/views/library/list/content";
import { Upload } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-between items-center">
        <MenuTitle
          title="문항 관리"
          description="학년, 과목별 문항을 관리하고 새로운 시험 문항을 제작해 보세요."
          className="mb-7"
        />
        <Button
          className="rounded-[4px] !px-[24px] !py-[12px] text-[16px] font-[600] h-[48px]"
          onClick={() => router.push(ROUTES.LIBRARY.NEW)}
        >
          <Upload color="#fff" />새 문항 만들기
        </Button>
      </div>

      <Content />
    </div>
  );
}
