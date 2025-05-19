import Popover from "@/components/commons/popover";
import Checkbox from "@/components/forms/checkbox";
import Label from "@/components/forms/components/label";
import { Button } from "@/components/ui/button";
import { Info, Plus } from "lucide-react";

const Subjective = () => {
  return (
    <div className="flex flex-col">
      {/* 답항 */}
      <div className="flex flex-row justify-between mb-[12px]">
        <div className="flex flex-row gap-[10px] items-center">
          <Label label="주관식 답안" />
          <div className="text-[12px] font-[400] leading-[28px] text-[rgba(0,0,0,0.50)]">
            정답으로 처리될 수 있는 답안을 쉼표로 구분하여 모두 작성해 주세요.
          </div>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <div className="w-[32px] flex justify-center items-center">
            <Checkbox
              id="terms1"
              className="data-[state=checked]:bg-[#5065E8] data-[state=checked]:text-white data-[state=checked]:border-[#5065E8] w-[20px] h-[20px]"
            />
          </div>
          <div className="text-[14px] font-[400] leading-[20px] text-[rgba(0,0,0,0.60)]">
            띄어쓰기, 대소문자 구분하기
          </div>
          <Popover icon={<Info size={20} color="rgba(0, 0, 0, 0.35)" />}>
            123
          </Popover>
        </div>
      </div>
      <div className="mb-[12px]">
        <div>textfields</div>
      </div>
      <div className="mb-[20px]">
        <Button variant="outline" className="rounded-[100px]">
          <Plus /> 답안 추가
        </Button>
      </div>

      <div className="flex flex-col gap-[12px]">
        <Label label="정답 해설" />
        <div>textfield </div>
      </div>
    </div>
  );
};

export default Subjective;
