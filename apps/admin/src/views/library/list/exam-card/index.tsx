import { Card } from "@/components/ui/card";
import Footer from "./footer";
import Header from "./header";
import Content from "./content";

const ExamCard = () => {
  return (
    <Card className="relative shadow-[0px4px8px0pxrgba(145, 158, 171, 0.12)] border-none bg-[#FAFAFA] p-0 rounded-[8px] gap-0">
      <Header />
      <Content />
      <Footer />
    </Card>
  );
};

export default ExamCard;
