import { pxToRem } from "@conundrum/ui-kit";
import styled from "styled-components";

export const ReactionGameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${pxToRem(15)};

  width: 100%;
  height: ${pxToRem(600)};
  margin: ${pxToRem(30)} auto;

  background-color: #604cc3;

  font-size: ${pxToRem(24)};
  color: #fff;

  cursor: pointer;
  user-select: none;
`;
