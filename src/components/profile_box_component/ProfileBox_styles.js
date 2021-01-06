import styled from "styled-components";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { black, grey } = colors;
const { source_sans_pro, roboto } = fonts;

export const Container = styled.div``;

export const ProfileBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
  align-items: center;
`;

export const ProfileImage = styled.div`
  width: ${(props) => (props.article_card_preview ? "2.15rem" : "2.75rem")};
  height: ${(props) => (props.article_card_preview ? "2.15rem" : "2.75rem")};
  border-radius: 50%;
  border: none;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.profile_image});
  background-repeat: no-repeat;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin: 0rem 0rem 0rem 0.75rem;
`;

export const User = styled.div`
  font-family: ${source_sans_pro};
  font-size: ${(props) => (props.article_card_preview ? "0.925rem" : "1.2rem")};
  color: ${black};
  line-height: 100%;
  margin: 0rem 0rem 0.125rem 0rem;
  text-transform: capitalize;
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  color: ${grey};
  font-size: ${(props) => (props.article_card_preview ? "0.65rem" : "0.7rem")};
  font-family: ${roboto};
  font-weight: 500;
  letter-spacing: 0.25px;
  padding: 0;
  margin: 0rem 0rem 0rem 0rem;
  height: fit-content;
  width: 100%;
  line-height: 100%;
`;
