import { FC } from "react";
import styled from "styled-components";
import { borderRadius, pxToRem, uiColors } from "../config/config";

const STimer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: ${pxToRem(5)} ${pxToRem(10)};
  margin: ${pxToRem(10)} 0;

  font-size: 1.5rem;
  border: 1px solid ${uiColors.borderColor};
  border-radius: ${borderRadius.small};
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  color: ${uiColors.primaryColor};

  cursor: not-allowed;
`;

export const Timer: FC<{ timeRange: string }> = ({ timeRange }) => {
  return <STimer>{timeRange}</STimer>;
};
