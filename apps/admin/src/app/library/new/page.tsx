import MenuTitle from "@/components/commons/titles/menu-title";
import Contents from "@/views/library/new/contents";

export default function Home() {
  return (
    <div>
      <MenuTitle title="시험 만들기" className="mb-7" />
      <Contents />
    </div>
  );
}
