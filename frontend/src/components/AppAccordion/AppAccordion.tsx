import { Application } from "@conondrum/models";
import { AppCard } from "@conundrum/ui-kit";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { SAccordionWrapper, SAppAccordion } from "./styles/SAccordionWrapper";

export const AppAccordion: FC<{ items?: Application[] }> = ({ items }) => {
  const navigate = useNavigate();

  const onCardClick = () => {
    navigate("/blind-type");
  };

  return (
    <SAppAccordion>
      <h4>Приложения</h4>
      <SAccordionWrapper>
        {items.map((application) => (
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
