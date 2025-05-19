import ToggleGroup from "@/components/commons/toggleGroup";
import Checkbox from "@/components/forms/checkbox";
import Label from "@/components/forms/components/label";

const Objective = () => {
  return (
    <div className="flex flex-col">
      {/* 답항 */}
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-[10px] items-center">
          <Label label="답항" />
          <div className="text-[12px] font-[400] leading-[28px] text-[rgba(0,0,0,0.50)]">
            체크한 항목이 정답으로 처리되며, 1단인 경우 복수 정답 체크도
            가능해요.
          </div>
        </div>
        <ToggleGroup className="mb-[12px]" />
      </div>
      {/* 정답 */}
      <div className="mt-4 flex flex-row justify-between mb-[12px]">
        <div className="flex flex-row gap-3 items-center">
          <Label label="정답" className="text-[#7D90F9]" />
          <div className="border-r border-[#EAEBEB] h-[14px] w-[1px]" />
          <div className="bg-[#EAEDFF] text-[#7D90F9] rounded-[12px] px-[12px] py-[2px]">
            1번
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-[20px]">
        <div className="flex flex-row items-center">
          {/* <Textfield /> */}
          <Checkbox id="terms1" />
          <div>1</div>
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <Label label="정답 해설" />
        <div>textfield</div>
      </div>
    </div>
  );
};

export default Objective;
