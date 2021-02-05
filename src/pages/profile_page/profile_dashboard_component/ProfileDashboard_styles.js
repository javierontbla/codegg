import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

import { colors } from "../../../colors/colors";
import { fonts } from "../../../fonts/fonts";

const { black, grey_2, white } = colors;
const { montserrat, roboto } = fonts;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LeftContainer = styled.div`
  width: 24.5rem !important;
  padding: 0rem 2rem 0rem 0rem;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 24.5rem);
`;

export const EditContainer = styled.div`
  background: ${black};
  border-radius: 15px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 2.5rem 2rem;
  margin: 0rem 0rem 1rem 0rem;
`;

export const NameContainer = styled.div`
  width: 75%;
  margin: 0rem 0rem 1rem 0rem;
`;

export const DescriptionContainer = styled.div`
  width: 100%;
`;

export const InputContainer = styled(TextareaAutosize)`
  font-size: ${(props) => (props.name ? "1.9rem" : "1rem")};
  font-family: ${(props) => (props.name ? `${montserrat}` : ` ${roboto}`)};
  width: 100%;
  border: none;
  background: transparent;
  border: 0.5px solid ${grey_2};
  border-radius: 15px;
  resize: none !important;
  padding: 1rem 1rem 1rem 1rem;
  color: ${white};
  letter-spacing: 0.25px;

  &:focus {
    outline: none !important;
  }
`;

export const ActionButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  height: fit-content;
`;
