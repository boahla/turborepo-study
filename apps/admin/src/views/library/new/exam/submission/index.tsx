import { Box } from "@/components/commons/box";
import List from "./list";
import Content from "./content";

const Types = () => {
  return (
    <Box
      borderColor="subtle"
      className="flex flex-row border rounded-[8px] p-0 "
    >
      <List />
      <Content type="objective" />
    </Box>
  );
};

export default Types;
