import { FC } from "react";
import styled from "styled-components";
import { borderRadius, pxToRem, uiColors } from "../config/config";

const SButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${pxToRem(300)};
  height: ${pxToRem(70)};
  font-size: ${pxToRem(24)};
  background-color: ${uiColors.primaryColor};
  color: ${uiColors.backgroundColor};
  border-radius: ${borderRadius.default};

  cursor: pointer;
`;

export const Button: FC<{ title: string }> = ({ title }) => {
  return <SButton>{title}</SButton>;
};
