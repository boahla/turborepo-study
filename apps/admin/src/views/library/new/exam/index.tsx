import { Tabs, TabsContent } from "@/components/ui/tabs";
import { ReactNode } from "react";
import Tablist from "./tablist";
import Submission from "./submission";

const Exam = () => {
  return (
    <Tabs defaultValue="A" className="w-full gap-0">
      <Tablist />
      <CustomTabContent value="A">
        <Submission />
      </CustomTabContent>
      <CustomTabContent value="B">password2</CustomTabContent>
      <CustomTabContent value="C">password3</CustomTabContent>
      <CustomTabContent value="D">password4</CustomTabContent>
    </Tabs>
  );
};

export default Exam;

const CustomTabContent = ({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) => {
  return (
    <TabsContent
      value={value}
      className="border border-[#EAEBEB] p-[20px] bg-white"
    >
      {children}
    </TabsContent>
  );
};
