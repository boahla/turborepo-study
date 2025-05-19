import { FormProvider, useForm } from "react-hook-form";
import Prompt from "./prompt";
import Line from "./types/line";
import Objective from "./types/objective";
import Subjective from "./types/subjective";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DEFAULT_VALUES, schema } from "./form";

type FormValues = z.infer<typeof fullSchema>;

const getDefaultValues = (type: FormValues["type"]): FormValues => {
  const common = DEFAULT_VALUES.common;

  switch (type) {
    case "objective":
      return {
        ...common,
        type: "objective",
        ...DEFAULT_VALUES.objective,
      };
    case "subjective":
      return {
        ...common,
        type: "subjective",
        ...DEFAULT_VALUES.subjective,
      };
    case "line":
      return {
        ...common,
        type: "line",
        ...DEFAULT_VALUES.line,
      };
  }
};

const fullSchema = z.discriminatedUnion("type", [
  schema.common
    .merge(schema.objective)
    .extend({ type: z.literal("objective") }),
  schema.common
    .merge(schema.subjective)
    .extend({ type: z.literal("subjective") }),
  schema.common.merge(schema.line).extend({ type: z.literal("line") }),
]);

const Contents = ({ type }: { type: "objective" | "subjective" | "line" }) => {
  const methods = useForm<FormValues>({
    resolver: zodResolver(fullSchema),
    defaultValues: getDefaultValues(type),
  });

  const onSubmit = (data: z.infer<typeof fullSchema>) => {
    console.log("제출됨:", data);
  };

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col py-8 px-6 w-full">
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Prompt />
          {/* 객관식 */}
          {type === "objective" && <Objective />}
          {/* 주관식 */}
          {type === "subjective" && <Subjective />}
          {/* 선 긋기 */}
          {type === "line" && <Line />}
        </form>
      </div>
    </FormProvider>
  );
};

export default Contents;
