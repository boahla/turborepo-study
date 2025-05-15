import { Box } from "@/components/commons/box";
import ContentsTitle from "@/components/commons/titles/contents-title";
import FormLabelLayout from "@/components/forms/form-label-layout";
import Select from "@/components/forms/select";
import { useFormContext } from "react-hook-form";

const Settings = () => {
  const form = useFormContext();

  return (
    <Box borderColor="subtle" className="mb-8 p-8">
      <ContentsTitle
        title="라이브러리에 저장할 시험을 만들 수 있어요."
        description="학년과 과목 선택 후, 유혈별 문항을 만들어 보세요."
      />
      <div className="flex flex-row gap-6 mt-6">
        <FormLabelLayout label="학년" required>
          <Select
            name="grade"
            control={form.control}
            options={[]}
            className="w-[140px]"
          />
        </FormLabelLayout>
        <FormLabelLayout label="과목" required>
          <Select
            name="subject"
            control={form.control}
            options={[]}
            className="w-[140px]"
          />
        </FormLabelLayout>
      </div>
    </Box>
  );
};

export default Settings;
