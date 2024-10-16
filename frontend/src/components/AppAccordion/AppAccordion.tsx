import { AppCard } from "@conundrum/ui-kit";
import { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "src/store/store";
import { SAccordionWrapper, SAppAccordion } from "./styles/SAccordionWrapper";

export const AppAccordion: FC = () => {
  const navigate = useNavigate();

  const applications = useSelector(
    (state: RootState) => state.applicationReducer
  );

  const onCardClick = () => {
    navigate("/blind-type");
  };

  return (
    <SAppAccordion>
      <h4>Приложения</h4>
      <SAccordionWrapper>
        {applications.list.map((application) => (
          <AppCard
            key={application.id}
            title={application.name}
            image={application.image}
            description={application.description}
            onClick={onCardClick}
          />
        ))}
      </SAccordionWrapper>
    </SAppAccordion>
  );
};
