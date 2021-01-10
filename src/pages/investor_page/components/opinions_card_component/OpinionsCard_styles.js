import styled from "styled-components";

import { colors } from "../../../../colors/colors";
import { fonts } from "../../../../fonts/fonts";

const { white, grey, black } = colors;
const { open_sans } = fonts;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  background: ${white};
  margin: 0.5rem 0rem 0rem 0rem;
  border-radius: 0.15rem;
  padding: 0.45rem 0.75rem 0.45rem 0.75rem;
  box-shadow: 0px 1.5px 1.5px -1px #ced4da;
  border: 1px solid ${grey};
`;

export const Message = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${black};
  font: ${open_sans};
  font-weight: 500;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
`;

export const Icon = styled.img`
  width: 0.85rem;
  height: 0.5rem;
  margin: 0rem 0rem 0rem 0rem;

  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`;
