import { Layout } from "@conundrum/ui-kit";
import { FC } from "react";
import { useSelector } from "react-redux";
import { AppAccordion } from "src/components/AppAccordion/AppAccordion";
import { RootState } from "src/store/store";

export const MainPage: FC = () => {
  const applications = useSelector(
    (state: RootState) => state.applicationReducer.list
  );

  return (
    <Layout title="Главная">
      <AppAccordion items={applications} />
    </Layout>
  );
};
