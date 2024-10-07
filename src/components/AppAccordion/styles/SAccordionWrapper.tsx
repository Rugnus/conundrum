import { pxToRem } from "@conundrum/ui-kit";
import styled from "styled-components";

export const SAccordionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 90%;
  margin: ${pxToRem(30)} auto;
`;
