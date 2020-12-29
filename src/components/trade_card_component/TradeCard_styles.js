import styled, { css } from "styled-components";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { grey, white, black, red } = colors;
const { source_sans_pro, open_sans, roboto } = fonts;

const InformationStyles = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.565rem;
  font-family: ${roboto};
  font-weight: 500;
  padding: 0.25rem 0.35rem 0.25rem 0.35rem;
  letter-spacing: 0.5px;
  margin: 0rem 0.25rem 0rem 0.25rem;
  height: fit-content;
  width: fit-content;
  border-radius: 0.15rem;
  line-height: 100%;
  background: transparent;
  color: ${black};
  border: 0.25px solid ${black};

  &:hover {
    cursor: auto;
  }
`;

export const TradeCardContainer = styled.div`
  width: ${(props) => (props.home_page ? "100%" : "18rem")};
  border: 1px solid blue;
  margin: ${(props) =>
    props.home_page ? "0.5rem 0rem 0.5rem 0rem" : "0rem 0.5rem 0rem 0.5rem"};
  border-radius: 0.35rem;
  background: ${white};
  border: 1px solid ${grey};
  box-shadow: 1.5px 1.5px 1.5px -1px #ced4da;
  transition: box-shadow 0.2s;

  &:first-child {
    margin: ${(props) => (props.home_page ? "0rem 0rem 0.5rem 0rem" : "")};
  }
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 5.15rem;
  border-bottom: 0.5px solid ${grey};
  padding: 0rem 0.75rem 0rem 0.75rem;
`;

export const Title = styled.div`
  font-family: ${source_sans_pro};
  font-size: 2rem;
  color: ${black};
  z-index: 1;
  line-height: 100%;
  letter-spacing: 0.25px;
  padding: 0rem 0rem 0rem 0rem;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  margin: 0.4rem 0rem 0rem -0.25rem;
  padding: 0rem 0rem 0rem 0rem;
`;

export const Action = styled.button`
  ${InformationStyles};
  color: ${white};
  background: ${(props) =>
    props.action === "venta" ? "rgb(67, 170, 139)" : "rgb(249, 104, 106)"};
  background: ${(props) =>
    props.action === "venta"
      ? "linear-gradient(45deg,rgba(249, 104, 106, 1) 5%,rgba(185, 32, 34, 1) 95%)"
      : "linear-gradient(45deg, rgba(67, 170, 139, 1) 0%, rgba(55, 139, 136, 1) 100%)"};
  text-transform: capitalize;
  border: none;
`;

export const Premium = styled.button`
  ${InformationStyles};
`;

export const Date = styled.button`
  ${InformationStyles};
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 7.25rem;
  padding: 0rem 0.75rem 0rem 0.75rem;
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0rem 0rem 0rem 0rem;
  margin: ${(props) =>
    props.last_child ? "0rem 0rem 0rem 0rem" : "0rem 0rem 0.25rem 0rem"};
`;

export const LeftText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: ${roboto};
  font-size: 0.85rem;
  color: ${black};
  letter-spacing: 0.25px;
`;

export const RightText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  color: ${white};
  padding: 0.125rem 0.35rem 0.125rem 0.35rem;
  margin: 0rem 0rem 0rem 0rem;
  border-radius: 0.15rem;
  font-weight: 500;
  font-size: 0.7rem;
  font-family: ${roboto};
  letter-spacing: 0.5px;
  color: ${black};
  text-decoration: underline;
  text-transform: capitalize;
`;

export const CommentContainer = styled.div`
  color: ${black};
  font-family: ${roboto};
  font-size: 0.8rem;
  font-weight: 600;
  font-style: italic;
  padding: 0.2rem 0rem 0rem 0rem;
  margin: 0rem 0rem 0rem 0rem;

  &::first-letter {
    text-transform: capitalize;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 2rem;
  border-top: 0.5px solid ${grey};
  padding: 0rem 0.5rem 0rem 0.5rem;
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
  color: ${black};
  font-size: 0.6rem;
  margin: 0rem 0.25rem 0rem 0.35rem;
  font-family: ${open_sans};
  font-weight: 700;
  letter-spacing: 0.25px;
  opacity: 0.85;
`;

export const NameLink = styled.div`
  font-family: ${open_sans};
  color: ${grey};
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 0rem 0rem 0rem 0rem;

  &:hover {
    cursor: pointer;
    opacity: 0.875;
  }
`;
