import styled from "styled-components";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { black } = colors;
const { badge_font } = fonts;

export const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${black};
  font-family: ${badge_font};
  font-size: 0.55rem;
  height: fit-content;
  width: fit-content;
  border: none;
  border-radius: 0.15rem;
  background: ${(props) =>
    props.rank ? "rgb(254, 206, 93)" : "rgb(219,223,227)"};
  background: ${(props) =>
    props.rank
      ? "linear-gradient(45deg,rgba(254, 206, 93, 1) 0%,rgba(235, 191, 84, 1) 90%)"
      : "linear-gradient(45deg, rgba(219,223,227,1) 5%, rgba(201,203,205,1) 95%)"};
  padding: 0.1rem 0.35rem 0.1rem 0.35rem;
  letter-spacing: 0.25px;
  margin: 0rem 0.25rem 0rem 0.25rem;
  font-weight: 600;
`;
