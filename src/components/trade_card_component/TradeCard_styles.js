import styled, { css } from "styled-components";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { grey, grey_2, white, black } = colors;
const { source_sans_pro, open_sans, roboto } = fonts;

const InformationStyles = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-family: ${roboto};
  font-weight: 500;
  padding: 0.25rem 0.35rem 0.25rem 0.35rem;
  letter-spacing: 0.75px;
  margin: 0rem 0.25rem 0rem 0.25rem;
  height: fit-content;
  width: fit-content;
  border-radius: 0.15rem;
  line-height: 100%;
  background: ${grey_2};
  color: ${black};

  &:hover {
    cursor: auto;
  }
`;

export const TradeCardContainer = styled.div`
  width: ${(props) => (props.home_page ? "100%" : "18rem")};
  margin: ${(props) =>
    props.home_page ? "0rem 0rem 0.75rem 0rem" : "0rem 0.75rem 0rem 0rem"};
  background: ${black};
  border: none;
  border-radius: 0.75rem;
  transition: box-shadow 0.2s;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 4.8rem;
  border-bottom: 0.5px solid ${grey};
  padding: 0rem 0.75rem 0rem 0.75rem;
`;

export const Title = styled.div`
  font-family: ${source_sans_pro};
  font-size: 1.5rem;
  color: ${white};
  line-height: 100%;
  letter-spacing: 0.5px;
  padding: 0rem 0rem 0rem 0rem;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  flex-wrap: nowrap;
  margin: 0.5rem 0rem 0rem -0.25rem;
  padding: 0rem 0rem 0rem 0rem;
`;

export const Action = styled.div`
  ${InformationStyles};
  text-transform: uppercase;
  border: none;
`;

export const Premium = styled.div`
  ${InformationStyles};
`;

export const Date = styled.div`
  ${InformationStyles};
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: fit-content;
  padding: 0.75rem 0.75rem 0.8rem 0.75rem;
  line-height: 100%;
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-start;
  padding: 0rem 0rem 0rem 0rem;
  margin: ${(props) =>
    props.last_child ? "0rem 0rem 0rem 0rem" : "0rem 0rem 0.6rem 0rem"};
`;

export const LeftText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: ${roboto};
  font-size: 0.825rem;
  font-weight: 700;
  color: ${white};
  letter-spacing: 0.25px;
`;

export const RightText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  color: ${white};
  padding: 0rem 0rem 0rem 0.4rem;
  margin: 0rem 0rem 0rem 0rem;
  font-weight: 500;
  font-size: 0.825rem;
  font-family: ${roboto};
  letter-spacing: 0.25px;
  color: ${white};
  text-transform: capitalize;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 2rem;
  border-top: 0.5px solid ${grey};
  padding: 0.1rem 0.5rem 0.1rem 0.5rem;
`;

export const TrendsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

export const UpTrend = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: fit-content;
  width: fit-content;
  z-index: 1;
  margin: 0rem 0rem 0rem 0rem;

  &:hover {
    cursor: pointer;
  }
`;

export const DownTrend = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  height: fit-content;
  width: fit-content;
  z-index: 1;
  margin: 0rem 0rem 0rem 0rem;

  &:hover {
    cursor: pointer;
  }
`;

export const TrendIcon = styled.img`
  width: 1.85rem;
  height: 1.85rem;
  margin: 0rem 0rem 0rem 0rem;

  &:hover {
    opacity: 0.9;
  }
`;

export const Count = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: fit-content;
  color: ${white};
  font-size: 0.65rem;
  margin: 0rem 0.25rem 0rem 0.4rem;
  font-family: ${open_sans};
  font-weight: 500;
  letter-spacing: 0.25px;
  opacity: 0.85;
`;

export const NameLink = styled.div`
  font-family: ${open_sans};
  color: ${grey};
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 0rem 0rem 0rem 0rem;

  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`;
