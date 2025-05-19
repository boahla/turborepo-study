import MenuTitle from "@/components/commons/titles/menu-title";
import Contents from "@/views/library/new/contents";

export default function Home() {
  return (
    <div>
      <MenuTitle title="문항 수정" className="mb-7" />
      <Contents />
    </div>
  );
}
