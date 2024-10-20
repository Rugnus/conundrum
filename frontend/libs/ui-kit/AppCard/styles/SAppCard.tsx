import { borderRadius, pxToRem, uiColors } from "libs/ui-kit/config/config";
import styled from "styled-components";

export const SAppCard = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 25%;
  height: ${pxToRem(300)};
  border-radius: ${borderRadius.default};
  background-color: ${uiColors.backgroundColor};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);

  cursor: pointer;

  transition: all 0.1s ease-in-out;

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;

export const SCardImage = styled.img`
  width: 100%;
  opacity: 0.8;
  height: 50%;
  object-fit: cover;
  border-radius: ${borderRadius.default} ${borderRadius.default} 0 0;
`;

export const SCardTitle = styled.p`
  font-size: ${pxToRem(20)};
  font-weight: 600;
`;

export const SCardDescription = styled.p`
  font-size: ${pxToRem(18)};
  text-align: center;
  margin-bottom: ${pxToRem(20)};
`;
