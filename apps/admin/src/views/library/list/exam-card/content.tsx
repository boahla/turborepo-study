import { CardContent } from "@/components/ui/card";
import Image from "next/image";

const Content = () => {
  return (
    <CardContent className="py-[34px]">
      <div className="flex items-center justify-center">
        <div className="align-center bg-[#E3F3FC] rounded-[100px] p-[24px]">
          <Image
            aria-hidden
            src="/blue-exam.png"
            alt="exam-icon"
            width={40}
            height={40}
          />
        </div>
      </div>
    </CardContent>
  );
};

export default Content;
