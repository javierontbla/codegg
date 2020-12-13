import styled from "styled-components";

import { colors } from "../../../colors/colors";
import { fonts } from "../../../fonts/fonts";

const { white, grey, black } = colors;
const { open_sans } = fonts;

export const OpinionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${white};
  margin: 1rem 0rem 0rem 0rem;
  border-radius: 0.25rem;
  padding: 0rem 1rem 0rem 1rem;
  box-shadow: 2px 2px 2px -1px #ced4da;
  border: 1px solid ${grey};
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${black};
  font: ${open_sans};
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
`;

export const AllRatings = styled.div`
  color: ${grey};
  font: ${open_sans};
  font-weight: 600;
  font-size: 0.6rem;
  letter-spacing: 0.5px;
  margin: 0rem 0rem 0rem 0.25rem;
`;

export const Price = styled.div`
  font: ${open_sans};
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  color: ${black};
`;
