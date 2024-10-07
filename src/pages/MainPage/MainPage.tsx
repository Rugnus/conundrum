import { Layout } from "@conundrum/ui-kit";
import { FC } from "react";
import { AppAccordion } from "src/components/AppAccordion/AppAccordion";

export const MainPage: FC = () => {
  return (
    <Layout title="Главная">
      <AppAccordion />
    </Layout>
  );
};
