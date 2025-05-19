import { CardFooter } from "@/components/ui/card";

const Footer = () => {
  return (
    <CardFooter className="bg-white rounded-b-[8px] px-[20px] py-[18px]">
      <div className="flex flex-col justify-between gap-[6px]">
        <div className="text-[16px] font-[600] leading-[22px] text-[rgba(0,0,0,0.7)]">
          초등 5학년_수학_b향
        </div>
        <div className="text-[14px] font-[400] leading-[20px] text-[rgba(0,0,0,0.35)]">
          35문항 • 미사용 • 최종 편집일 24.09.25
        </div>
      </div>
    </CardFooter>
  );
};

export default Footer;
