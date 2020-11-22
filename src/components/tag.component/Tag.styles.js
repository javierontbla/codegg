import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { primary_font } = fonts;

const { yellow, green } = colors;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  border-radius: 2.5px;
  font-family: ${primary_font};
  padding: ${(props) =>
    props.on_card ? "0px 5px 0px 5px" : "0px 10px 0px 10px"};
  margin: 0px 7.5px 0px 7.5px;
  font-size: ${(props) => (props.on_card ? "16px" : "20px")};
  letter-spacing: 1px;
  height: ${(props) => (props.on_card ? "32px" : "45px")};
  border: ${(props) =>
    props.on_card ? `1px solid ${yellow}` : `1px solid ${yellow}`};
  color: ${(props) => (props.on_card ? `${green}` : `${green}`)};
  background: ${(props) => (props.on_card ? `${yellow}` : `${yellow}`)};
  text-transform: ${(props) => (props.on_card ? "" : "")};
  transition: opacity 0.1s;

  &:hover {
    cursor: pointer;
  }
`;

export const IconContainer = styled.div`
  display: ${(props) => (props.filter ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0px 0px 0px 10px;
  padding: 2.5px 0px 0px 0px;

  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${green};
  font-size: 16px;
`;
