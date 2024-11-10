import { Layout } from "@conundrum/ui-kit";
import { FC } from "react";
import { ReactionTrainer } from "src/features/ReactionTrainer/ReactionTrainer";

export const ReactionTrainerPage: FC = () => {
  return (
    <Layout title="Тренировка реакции">
      <ReactionTrainer />
    </Layout>
  );
};
