import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../../../colors/colors";
import { fonts } from "../../../../fonts/fonts";

const { black, white, grey_2 } = colors;
const { montserrat } = fonts;

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  font-family: ${montserrat};
  font-size: 2.2rem;
  width: 100%;
  color: ${white};
  line-height: 100%;
  padding: 0rem 0rem 0.75rem 0rem;
  margin: 0rem 0rem 0.75rem 0rem;
  border-bottom: 0.5px solid ${grey_2};
`;

export const DraftsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1.5rem;
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
  width: 3.5rem;
  transform: rotate(45deg);
  margin: 0rem 0rem 0rem 0rem;
`;

export const DraftCard = styled.div`
  display: flex;
  align-items: flex-end;
  height: 16rem;
  width: 100%;
  background: ${black};
  border-radius: 15px;
  padding: 0rem 1.25rem 1.25rem 1.25rem;
`;

export const DraftTitle = styled.div`
  font-family: ${montserrat};
  color: ${white};
  font-size: 1.2rem;
  letter-spacing: 0.5px;
  line-height: 115%;
  width: 100%;
  height: fit-content;
  margin: 0rem 0rem 0rem 0rem;
`;

export const HyperLink = styled(Link)`
  color: ${white};
  &:hover {
    color: ${white};
    text-decoration: none;
  }
`;
