import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReactNode } from "react";

const TAB_OPTIONS = [
  { value: "A", label: "A유형" },
  { value: "B", label: "B유형" },
  { value: "C", label: "C유형" },
  { value: "D", label: "D유형" },
];

const Exam = () => {
  return (
    <Tabs defaultValue="A" className="w-full gap-0">
      <TabsList className="grid w-full grid-cols-6 bg-inherit h-[52px] p-0">
        {TAB_OPTIONS.map((option) => (
          <TabsTrigger
            key={option.value}
            value={option.value}
            className="text-[18px] font-[600] leading-[28px] py-3 rounded-[0px] text-[rgba(0,0,0,0.35)] data-[state=active]:bg-white data-[state=active]:text-[rgba(0,0,0,0.70)] data-[state=active]:shadow-none data-[state=active]:border data-[state=active]:border-[#EAEBEB] data-[state=active]:border-b-0"
          >
            {option.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <CustomTabContent value="A">account1</CustomTabContent>
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
