import { FC } from "react";
import { Header } from "./Header/Header";
import { MainBlock } from "./MainBlock/MainBlock";

interface ILayout {
  title?: string;
  backButton?: boolean;
  children: React.ReactNode;
}

export const Layout: FC<ILayout> = ({ children, title, backButton }) => {
  return (
    <>
      <Header />
      <MainBlock hasBackButton={backButton} title={title}>
        {children}
      </MainBlock>
    </>
  );
};
