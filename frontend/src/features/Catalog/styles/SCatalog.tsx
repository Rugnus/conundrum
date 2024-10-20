import { pxToRem } from "@conundrum/ui-kit";
import styled from "styled-components";

export const SCatalog = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${pxToRem(15)};
  align-items: center;
  margin: ${pxToRem(30)} auto;
`;

export const SCatalogSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: ${pxToRem(30)};
  align-items: center;
  justify-content: center;
`;
