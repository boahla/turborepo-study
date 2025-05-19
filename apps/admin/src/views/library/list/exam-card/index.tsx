"use client";
import { Card } from "@/components/ui/card";
import Footer from "./footer";
import Header from "./header";
import Content from "./content";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/routes";

const ExamCard = () => {
  const router = useRouter();

  const handleMove = () => {
    router.push(ROUTES.LIBRARY.EDIT(2));
  };

  return (
    <Card
      onClick={handleMove}
      className="relative shadow-[0px4px8px0pxrgba(145, 158, 171, 0.12)] border-none bg-[#FAFAFA] p-0 rounded-[8px] gap-0 cursor-pointer"
    >
      <Header />
      <Content />
      <Footer />
    </Card>
  );
};

export default ExamCard;
