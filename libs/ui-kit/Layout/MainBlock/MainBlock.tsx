import { FC } from "react";
import styled from "styled-components";

const SMainBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 3rem;
  h3 {
    font-size: 2.5rem;
  }
`;

export const MainBlock: FC<{ children: React.ReactNode; title: string }> = ({
  children,
  title,
}) => {
  return (
    <SMainBlockContainer>
      <h3>{title}</h3>
      <div>{children}</div>
    </SMainBlockContainer>
  );
};
