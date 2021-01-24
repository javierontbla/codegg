import styled from "styled-components";

import { colors } from "../../../../colors/colors";
import { fonts } from "../../../../fonts/fonts";

const { white, black, grey_2, grey } = colors;
const { source_sans_pro, open_sans } = fonts;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 100%;
  background: ${black};
  border-radius: 15px;
  margin: 0rem 0rem 1.25rem 0rem;
`;

export const ImageContainer = styled.div`
  height: 8.75rem;
  width: 100%;
  border: none;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
  background-position: center;
  background-image: url("https://images.unsplash.com/photo-1610047803562-7260ebe516cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
  background-repeat: no-repeat;
  padding: 0rem 0rem 0rem 0rem !important;
  overflow: hidden;
`;

export const TitleContainer = styled.div`
  line-height: 115%;
  color: ${white};
  font-family: ${source_sans_pro};
  font-size: 1.1rem;
  padding: 1rem 1rem 1.25rem 1rem;

  &::first-letter {
    text-transform: capitalize;
  }
`;

export const TrendsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  border-top: 0.5px solid ${grey_2};
  padding: 0.2rem 1rem 0.2rem 1rem;
`;

export const Trends = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

export const TrendIcon = styled.img`
  width: 1.85rem;
  height: 1.85rem;
  margin: 0rem 0rem 0rem 0rem;

  &:hover {
    opacity: 0.9;
  }
`;

export const Votes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: fit-content;
  color: ${grey};
  font-size: 0.65rem;
  margin: 0rem 0.4rem 0rem 0.5rem;
  font-family: ${open_sans};
  font-weight: 500;
  letter-spacing: 0.25px;
  opacity: 0.85;
`;
