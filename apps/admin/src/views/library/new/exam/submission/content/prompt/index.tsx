"use client";
import { Box } from "@/components/commons/box";
import Popover from "@/components/commons/popover";
import Checkbox from "@/components/forms/checkbox";
import Label from "@/components/forms/components/label";
import Textfield from "@/components/forms/textfield";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, CirclePlus, FileQuestion, Info, Trash } from "lucide-react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

const Prompt = () => {
  const form = useFormContext();
  const [isViewOpen, setIsViewOpen] = useState(false);
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-[12px] items-center">
          <div className="p-[10px] bg-[rgba(0,0,0,0.08)] rounded-[8px]">
            <FileQuestion />
          </div>
          <div className="text-[20px] font-[600] leading-[24px] text-[rgba(0,0,0,0.70)]">
            문항1
          </div>
        </div>
        <div className="flex flex-row gap-[12px] items-center">
          <div className="flex flex-row gap-[8px] items-center">
            <Checkbox id="terms1" />
            <div className="text-[16px] font-[500] leading-[24px] text-[rgba(0,0,0,0.60)]">
              공통 문항
            </div>
            <Popover
              icon={
                <Info className="w-[16px] h-[16px]" color="rgba(0,0,0,0.35)" />
              }
            >
              공통 문항 설명
            </Popover>
          </div>
          <Button variant="outline">
            <Trash /> 문항 삭제하기
          </Button>
          <Button
            type="submit"
            className="bg-[#7D90F9] text-white hover:bg-[#7D90F9]"
          >
            <Check />
            문항 저장하기
          </Button>
        </div>
      </div>
      {/* divider */}
      <div className="border-b border-[#EAEBEB]" />
      {/* 질문 */}
      <div className="flex flex-col gap-3">
        <Label label="질문" required />
        <Textfield name="question" control={form.control} />
        <div>editor</div>
      </div>
      {/* 지문 */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-between items-center">
          <Label label="지문" />
          <div className="flex flex-row gap-3 items-center">
            <div className="text-[12px] font-[400] leading-[28px] text-[rgba(0,0,0,0.50)]">
              영상, 음성 파일을 업로드할 수 있어요. (000MB 이하 / 최대 5개 /
              mp3, mp4)
            </div>
            <Input
              id="picture"
              type="file"
              className="w-[128px] bg-[rgba(0,0,0,0.08)] rounded-[4px] text-[rgba(0,0,0,0.5)] px-4"
            />
          </div>
        </div>
        <div>editor</div>
      </div>
      {/* 재생 횟수 제한 */}
      <div className="flex flex-row gap-2 items-center">
        <Label label="재생 횟수 제한" />
        {/* <Select /> */}
        <div className="text-[12px] font-[400] leading-[18px] text-[rgba(0,0,0,0.50)]">
          질문 혹은 지문에 재생 가능 횟수를 기재해 응시생에게 안내해 주세요.
        </div>
      </div>
      {/* 오디오 첨부파일 */}
      <Box borderColor="medium" className="py-5 px-5 border-dashed">
        files
      </Box>
      {/* 보기 */}
      <div>
        {isViewOpen ? (
          <div className="flex flex-col gap-3 items-start">
            <Label label="보기" />
            <div>editor</div>
          </div>
        ) : (
          <Button
            variant="outline"
            onClick={() => setIsViewOpen(true)}
            className="rounded-[100px]"
          >
            <CirclePlus /> 보기 추가
          </Button>
        )}
      </div>
      {/* divider */}
      <div className="border-b border-[##EAEBEB]" />
      {/* 문항 유형 */}
      <div className="flex flex-col gap-3 mb-[20px]">
        <Label label="문항 유형" />
        <div>select</div>
      </div>
    </div>
  );
};

export default Prompt;
