import { z } from "zod";

// 시험명 최대 길이
export const SETTINGS_TITLE_MAX_LENGTH = 50;

// 시험 만들기 유효성 검사
export const schema = z.object({
  title: z
    .string()
    .min(1, "시험명을 입력해주세요.")
    .max(
      SETTINGS_TITLE_MAX_LENGTH,
      `최대 ${SETTINGS_TITLE_MAX_LENGTH}자까지 입력 가능합니다.`
    ),
  start_time: z.string(),
  start_minute: z.string(),
  end_time: z.string(),
  end_minute: z.string(),
});

export const DEFAULT_VALUES = {
  title: "",
  start_time: "1",
  start_minute: "1",
  end_time: "1",
  end_minute: "1",
};
