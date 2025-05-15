"use client";
import { FormProvider, useForm } from "react-hook-form";
import Lists from "./list";
import Settings from "./settings";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DEFAULT_VALUES, schema } from "./form";

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
        <Lists />
      </form>
    </FormProvider>
  );
};
export default Contents;
