import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../../../colors/colors";

const { black } = colors;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 1.5rem;
  width: 100%;
  height: fit-content;
`;

export const CreateButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16rem;
  width: 100%;
  background: ${black};
  border-radius: 15px;

  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`;

export const Icon = styled.img`
  width: 3rem;
  transform: rotate(45deg);
`;

export const DraftCard = styled.div`
  height: 16rem;
  width: 100%;
  background: ${black};
  border-radius: 15px;
`;

export const HyperLink = styled(Link)``;
