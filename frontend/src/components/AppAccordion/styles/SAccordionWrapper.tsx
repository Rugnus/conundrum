import { pxToRem } from "@conundrum/ui-kit";
import styled from "styled-components";

export const SAppAccordion = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${pxToRem(10)};
  margin: ${pxToRem(30)} auto;

  h4 {
    font-size: ${pxToRem(24)};
  }
`;

export const SAccordionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
`;
