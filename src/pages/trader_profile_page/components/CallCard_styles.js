import styled, { css } from "styled-components";

import { colors } from "../../../colors/colors";
import { fonts } from "../../../fonts/fonts";

const { grey, white, black, green, red, yellow } = colors;
const { button_font, source_sans_pro, open_sans, roboto } = fonts;

const InformationStyles = css`
  display: flex;
  align-items: center;
  font-size: 0.55rem;
  font-family: ${open_sans};
  font-weight: 600;
  padding: 0.1rem 0.35rem 0.1rem 0.35rem;
  letter-spacing: 0.25px;
  margin: 0rem 0.25rem 0rem 0.25rem;
  height: fit-content;
  width: fit-content;
  border-radius: 0.15rem;
`;

export const CallCardContainer = styled.div`
  height: fit-content;
  width: fit-content;
  border: 1px solid blue;
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  border-radius: 0.5rem;
  background: rgb(33, 33, 32);
  background: linear-gradient(
    90deg,
    rgba(33, 33, 32, 1) 5%,
    rgba(25, 25, 24, 1) 80%
  );
  border: none;
`;

export const TopContainer = styled.div`
  width: 100%;
  height: fit-content;
  border-bottom: 0.5px solid ${grey};
  padding: 0.65rem 0.85rem 0.65rem 0.85rem;
`;

export const Title = styled.div`
  font-family: ${source_sans_pro};
  font-size: 2.25rem;
  color: white;
  z-index: 1;
  line-height: 100%;
  letter-spacing: 0.5px;
  padding: 0.2rem 0rem 0.2rem 0rem;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.1rem 0rem 0.15rem -0.25rem;
`;

export const Action = styled.div`
  ${InformationStyles};
  background: rgb(67, 170, 139);
  background: linear-gradient(
    45deg,
    rgba(67, 170, 139, 1) 0%,
    rgba(55, 139, 136, 1) 100%
  );
  color: ${white};
`;

export const Risk = styled.div`
  ${InformationStyles};
  background: rgb(254, 206, 93);
  background: linear-gradient(
    45deg,
    rgba(254, 206, 93, 1) 0%,
    rgba(235, 191, 84, 1) 90%
  );
  color: ${black};
`;

export const Date = styled.div`
  ${InformationStyles};
  background: rgb(219, 223, 227);
  background: linear-gradient(
    45deg,
    rgba(219, 223, 227, 1) 5%,
    rgba(201, 203, 205, 1) 95%
  );
  color: ${black};
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: fit-content;
  padding: 1rem 0.85rem 0.85rem 0.85rem;
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 6rem 0rem 0rem;
  margin: 0rem 0rem 0.35rem 0rem;
`;

export const Subtitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: ${roboto};
  font-size: 0.85rem;
  color: ${white};
  letter-spacing: 1px;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${grey};
  border: none;
  color: ${black};
  padding: 0.1rem 0.35rem 0.1rem 0.35rem;
  margin: 0rem 0rem 0rem 1rem;
  background: rgb(219, 223, 227);
  background: linear-gradient(
    45deg,
    rgba(219, 223, 227, 1) 5%,
    rgba(201, 203, 205, 1) 95%
  );
  border-radius: 0.15rem;
  font-weight: 600;
  font-size: 0.7rem;
  font-family: ${open_sans};
  letter-spacing: 0.5px;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  border-top: 0.5px solid ${grey};
  padding: 0.45rem 0.65rem 0.25rem 0.65rem;
`;

export const TrendsContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
`;

export const UpTrend = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
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
  margin: 0rem 0rem 0rem 0.25rem;

  &:hover {
    cursor: pointer;
  }
`;

export const TrendIcon = styled.img`
  width: 1.65rem;
  height: 1.65rem;
  margin: 0rem 0rem 0rem 0rem;
`;

export const Count = styled.div`
  color: ${(props) => (props.up ? `${green}` : `${red}`)};
  font-size: 0.5rem;
  margin: ${(props) =>
    props.up ? "0rem -0.25rem 0rem 0rem" : "0rem 0rem 0rem -0.25rem"};
  font-family: ${button_font};
  font-weight: 600;
  letter-spacing: 0.25px;
`;

export const NameLink = styled.div`
  font-family: ${open_sans};
  color: ${grey};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 0rem 0rem 0.2rem 0rem;
`;
