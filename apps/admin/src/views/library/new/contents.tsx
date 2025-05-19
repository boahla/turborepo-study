"use client";
import { FormProvider, useForm } from "react-hook-form";
import Settings from "./settings";
import { zodResolver } from "@hookform/resolvers/zod";
import { DEFAULT_VALUES, schema } from "./form";
import { z } from "zod";
import Exam from "./exam";

const Contents = () => {
  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: DEFAULT_VALUES,
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log("제출됨:", data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Settings />
      </form>
      <Exam />
    </FormProvider>
  );
};

export default Contents;
