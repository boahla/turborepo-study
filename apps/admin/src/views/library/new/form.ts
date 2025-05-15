import { z } from "zod";

// 라이브러리 시험 만들기 유효성
export const schema = z.object({
  grade: z.string(),
  subject: z.string(),
});

export const DEFAULT_VALUES = {
  grade: "",
  subject: "",
};
