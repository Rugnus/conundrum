import { AppCard } from "@conundrum/ui-kit";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store/store";
import { SAccordionWrapper } from "./styles/SAccordionWrapper";

export const AppAccordion: FC = () => {
  const applications = useSelector(
    (state: RootState) => state.applicationReducer
  );

  return (
    <SAccordionWrapper>
      {applications.list.map((application) => (
        <AppCard
          key={application.id}
          title={application.name}
          image={application.image}
          description={application.description}
        />
      ))}
    </SAccordionWrapper>
  );
};
