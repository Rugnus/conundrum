import { FC } from "react";
import {
  SAppCard,
  SCardDescription,
  SCardImage,
  SCardTitle,
} from "./styles/SAppCard";

export const AppCard: FC<{
  title: string;
  description: string;
  image: string;
}> = ({ title, description, image }) => {
  return (
    <SAppCard>
      <SCardImage src={image} />
      <SCardTitle>{title}</SCardTitle>
      <SCardDescription>{description}</SCardDescription>
    </SAppCard>
  );
};
