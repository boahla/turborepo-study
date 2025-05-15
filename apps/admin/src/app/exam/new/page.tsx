import MenuTitle from "@/components/commons/titles/menu-title";
import Contents from "@/views/exam/new/contents";

export default function Home() {
  return (
    <div>
      <MenuTitle title="시험 등록하기" className="mb-7" />
      <Contents />
    </div>
  );
}
