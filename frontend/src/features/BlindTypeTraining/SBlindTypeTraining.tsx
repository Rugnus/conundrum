import { pxToRem } from "@conundrum/ui-kit";
import styled from "styled-components";

export const SBlindTypeTraining = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${pxToRem(15)};
  align-items: center;
  margin: ${pxToRem(30)} auto;
`;

export const SInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  input {
    text-align: center;
    font-size: ${pxToRem(24)};
    width: 100%;
    height: ${pxToRem(70)};
    letter-spacing: ${pxToRem(2)};
  }
`;
