import { Box } from "@/components/commons/box";
import MenuTitle from "@/components/commons/titles/menu-title";

export default function Home() {
  return (
    <div>
      <MenuTitle
        title="시험 관리"
        description="시험 일정 및 응시 대상을 관리하고, 응시생의 현황을 확인할 수 있어요."
      />
      <Box borderColor="subtle">contents</Box>
    </div>
  );
}
