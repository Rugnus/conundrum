import { FC } from "react";
import {
  SAppCard,
  SCardDescription,
  SCardImage,
  SCardTitle,
} from "./styles/SAppCard";

interface IAppCard {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

export const AppCard: FC<IAppCard> = ({
  title,
  description,
  image,
  onClick,
}) => {
  return (
    <SAppCard onClick={onClick}>
      <SCardImage src={image} />
      <SCardTitle>{title}</SCardTitle>
      <SCardDescription>{description}</SCardDescription>
    </SAppCard>
  );
};
