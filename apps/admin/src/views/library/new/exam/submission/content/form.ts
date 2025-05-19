import { z } from "zod";

// 객관식 문제의 답항 객체
const choiceItemSchema = z.object({
  file: z.union([z.string(), z.number()]),
  title: z.string(),
  content: z.string(),
});

const lineAnswerItemSchema = z.object({
  file: z.union([z.string(), z.number()]),
  value: z.string(),
  content: z.string(),
});

export const schema = {
  common: z.object({
    // 공통 문항 여부
    common: z.boolean(),
    // 질문
    question: z.string(),
    // 지문
    passage: z.string(),
    // 업로드 파일
    files: z.array(z.string()),
    // 보기
    options: z.string(),
    // 유형
    type: z.enum(["objective", "subjective", "line"]),
    // 정답 해설
    solution: z.string(),
  }),
  objective: z.object({
    // 몇 단?
    step: z.number(),
    // 답항
    choices: z.array(z.array(choiceItemSchema)),
    // 정답
    answer: z.array(z.number()),
  }),
  subjective: z.object({
    // 띄어쓰기, 대소문자 구분 여부
    stricts: z.boolean(),
    // 정답
    answer: z.array(choiceItemSchema),
  }),
  line: z.object({
    // 방향
    direction: z.enum(["horizontal", "vertical"]),
    // 선택지1
    choice1: z.array(lineAnswerItemSchema),
    // 선택지2
    choice2: z.array(lineAnswerItemSchema),
    // 정답
    answer: z.array(z.tuple([z.string(), z.string()])),
  }),
};

// 문제 생성 유효성
export const baseSchema = z.object({
  common: z.boolean(),
  question: z.string(),
  passage: z.string(),
  files: z.array(z.string()),
  options: z.string(),
  type: z.enum(["objective", "subjective", "line"]),
  solution: z.string(),
});

export const fullSchema = z.discriminatedUnion("type", [
  baseSchema.extend({
    type: z.literal("objective"),
    step: z.number(),
    choices: z.array(z.array(choiceItemSchema)),
    answer: z.array(z.number()),
  }),
  baseSchema.extend({
    type: z.literal("subjective"),
    stricts: z.boolean(),
    answer: z.array(choiceItemSchema),
  }),
  baseSchema.extend({
    type: z.literal("line"),
    direction: z.enum(["horizontal", "vertical"]),
    choice1: z.array(lineAnswerItemSchema),
    choice2: z.array(lineAnswerItemSchema),
    answer: z.array(z.tuple([z.string(), z.string()])),
  }),
]);

type lineDirection = "horizontal" | "vertical";

export const DEFAULT_VALUES = {
  common: {
    common: false,
    question: "",
    passage: "",
    files: [],
    options: "",
    type: "objective",
    solution: "",
  },
  objective: {
    step: 1,
    choices: [],
    answer: [],
  },
  subjective: {
    stricts: false,
    answer: [],
  },
  line: {
    direction: "horizontal" as lineDirection,
    choice1: [],
    choice2: [],
    answer: [],
  },
};
