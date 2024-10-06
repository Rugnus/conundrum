import { FC } from "react";
import { Header } from "./Header/Header";
import { MainBlock } from "./MainBlock/MainBlock";

interface ILayout {
  title?: string;
  children: React.ReactNode;
}

export const Layout: FC<ILayout> = ({ children, title }) => {
  return (
    <>
      <Header />
      <MainBlock title={title}>{children}</MainBlock>
    </>
  );
};
