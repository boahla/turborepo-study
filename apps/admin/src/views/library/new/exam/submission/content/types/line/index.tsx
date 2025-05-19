import { Box } from "@/components/commons/box";
import Label from "@/components/forms/components/label";

const Line = () => {
  return (
    <div className="flex flex-col">
      {/* 답항 */}
      <div className="flex flex-row gap-[10px] items-center  mb-[12px]">
        <Label label="답항" />
        <div className="text-[12px] font-[400] leading-[28px] text-[rgba(0,0,0,0.50)]">
          올바른 짝을 이어 주세요.
        </div>
      </div>
      <div className="mb-6">
        <Box borderColor="subtle" className="py-4 px-3">
          배열 형태 선택
        </Box>
      </div>
      {/* 정답 */}
      <div className="mt-4 flex flex-row justify-between mb-[12px]">
        <div className="flex flex-row gap-3 items-center">
          <Label label="정답" className="text-[#7D90F9]" />
          <div className="border-r border-[#EAEBEB] h-[14px] w-[1px]" />
          <div className="bg-[#EAEDFF] text-[#7D90F9] rounded-[12px] px-[12px] py-[2px]">
            -
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-[20px]">lines</div>
      <div className="flex flex-col gap-[12px]">
        <Label label="정답 해설" />
        <div>textfield</div>
      </div>
    </div>
  );
};

export default Line;
