import { Layout } from "@conundrum/ui-kit";
import { FC } from "react";
import { BlindTypeTraining } from "../../features/BlindTypeTraining/BlindTypeTraining";

export const BlindTypePage: FC = () => {
  return (
    <Layout title="Тренировка слепой печати" backButton>
      <BlindTypeTraining />
    </Layout>
  );
};
