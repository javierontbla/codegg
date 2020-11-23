import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { primary_font } = fonts;

const { yellow, green, grey, white } = colors;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  border-radius: 1rem;
  font-family: ${primary_font};
  padding: ${(props) =>
    props.on_card ? "0rem 0.35rem 0rem 0.35rem" : "0rem 0.65rem 0rem 0.65rem"};
  margin: 0rem 0.5rem 0rem 0.5rem;
  font-size: ${(props) => (props.on_card ? "0.8rem" : "1rem")};
  letter-spacing: 1px;
  height: ${(props) => (props.on_card ? "1.5rem" : "2rem")};
  border: ${(props) =>
    props.on_card ? `1px solid ${yellow}` : `1px solid ${grey}`};
  color: ${(props) => (props.on_card ? `${green}` : `${green}`)};
  background: ${(props) => (props.on_card ? `${yellow}` : `transparent`)};
  transition: color 0.2s, background 0.2s, border 0.2s;

  &:hover {
    cursor: pointer;
    border: ${(props) =>
      props.on_card ? `1px solid ${yellow}` : `1px solid ${green}`};
    color: ${(props) => (props.on_card ? `${green}` : `${white}`)};
    background: ${(props) => (props.on_card ? `${yellow}` : `${green}`)};
  }
`;

export const IconContainer = styled.div`
  display: ${(props) => (props.filter ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0rem 0rem 0rem 0.35rem;

  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${green};
  font-size: 16px;
`;
