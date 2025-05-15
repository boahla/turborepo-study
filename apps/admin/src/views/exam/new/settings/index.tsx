"use client";
import { Box } from "@/components/commons/box";
import ContentsTitle from "@/components/commons/titles/contents-title";
import FormLabelLayout from "@/components/forms/form-label-layout";
import { useFormContext } from "react-hook-form";
import Textfield from "@/components/forms/textfield";
import { Button } from "@/components/ui/button";
import Select from "@/components/forms/select";
import { SETTINGS_TITLE_MAX_LENGTH } from "../form";

const TIME_OPTIONS = [
  { value: "1", label: "1시" },
  { value: "2", label: "2시" },
  { value: "3", label: "3시" },
  { value: "4", label: "4시" },
];

const Settings = () => {
  const form = useFormContext();

  return (
    <Box borderColor="subtle" className="mb-6 p-8">
      <ContentsTitle title="새 시험을 등록해 볼까요? ✍️" />

      <div className="flex flex-col gap-8 mt-5">
        {/* 시험명 */}
        <FormLabelLayout label="시험명" required>
          <Textfield
            name="title"
            control={form.control}
            maxLength={SETTINGS_TITLE_MAX_LENGTH}
          />
        </FormLabelLayout>
        {/* 응시 대상 */}
        <FormLabelLayout label="응시 대상" required>
          <TargetCustomButton onClick={() => {}} />
        </FormLabelLayout>
        {/* 응시일 */}
        <FormLabelLayout label="응시일" required>
          <></>
        </FormLabelLayout>
        {/* 응시 시간 */}
        <FormLabelLayout
          label="응시 시간"
          required
          popover="팝오버"
          className="gap-[10px]"
        >
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-row gap-[14px] items-center">
              <div className="text-[16px] font-[400] leading-[24px] text-[rgba(0,0,0,0.60)]">
                시작시간
              </div>
              <Select
                name="start_time"
                control={form.control}
                options={TIME_OPTIONS}
              />
              <Select
                name="start_time"
                control={form.control}
                options={TIME_OPTIONS}
              />
            </div>
            <div className="flex flex-row gap-[14px] items-center">
              <div className="text-[16px] font-[400] leading-[24px] text-[rgba(0,0,0,0.60)]">
                종료시간
              </div>
              <Select
                name="start_time"
                control={form.control}
                options={TIME_OPTIONS}
              />
              <Select
                name="start_time"
                control={form.control}
                options={TIME_OPTIONS}
              />
            </div>
          </div>
        </FormLabelLayout>
        {/* 정답 해설 공개 */}
        <FormLabelLayout label="정답 해설 공개" required>
          <></>
        </FormLabelLayout>
      </div>
    </Box>
  );
};

export default Settings;

const TargetCustomButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button
      onClick={onClick}
      className="w-[156px] h-[40px] bg-white text-[14px] font-[600] leading-[16px] text-[rgba(0,0,0,0.50)] border border-[#E0E0E0] rounded-[100px] hover:bg-[#F5F5F5] "
    >
      응시 대상 설정
    </Button>
  );
};
