import { RollbackOutlined } from "@ant-design/icons";
import { pxToRem } from "libs/ui-kit/config/config";
import { FC } from "react";
import styled from "styled-components";

const SMainBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 3rem;
  h3 {
    display: flex;
    align-items: center;
    font-size: ${pxToRem(30)};
    gap: ${pxToRem(10)};
  }
`;

export const MainBlock: FC<{
  children: React.ReactNode;
  title: string;
  hasBackButton?: boolean;
}> = ({ children, title, hasBackButton }) => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <SMainBlockContainer>
      <h3>
        {hasBackButton && (
          <RollbackOutlined
            style={{ cursor: "pointer", fontSize: "1.5rem" }}
            alt="Назад"
            onClick={handleBack}
          />
        )}{" "}
        {title}
      </h3>
      <div>{children}</div>
    </SMainBlockContainer>
  );
};
