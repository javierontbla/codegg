import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

import { colors } from "../../../colors/colors";
import { fonts } from "../../../fonts/fonts";

const { grey, grey_2, white, black } = colors;
const { roboto, open_sans, montserrat } = fonts;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  background: ${black};
  height: fit-content;
  width: 100%;
  margin: 0rem 0rem 1rem 0rem;
  border-radius: 15px;
  line-height: 100%;
`;

export const TitleInput = styled.input`
  width: 8rem;
  padding: 0rem 0rem 0rem 0.75rem;
  margin: 0rem 0rem 0rem 0rem;
  border-radius: 20px;
  font-family: ${montserrat};
  font-size: 1.2rem;
  height: 2.5rem;
  line-height: 100%;
  color: ${black};
  border: none !important;

  &&& {
    ::placeholder {
      font-size: 1.2rem;
      font-family: ${montserrat};
    }
  }

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

export const CloseIcon = styled.img`
  width: 0.9rem;
  margin: 0.15rem 0rem 0rem 0rem;

  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0rem 0rem 0rem 0rem;
  padding: ${(props) =>
    props.active_dashboard ? "1rem 1rem 1rem 1rem" : "1rem 1rem 1rem 1rem"};
  border-bottom: ${(props) =>
    props.active_dashboard ? `0.5px solid ${grey_2}` : "none"};
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props) =>
    props.active_dashboard ? "flex-start" : "flex-end"};
  justify-content: space-between;
`;

export const MiddleContainer = styled.div`
  display: ${(props) => (props.active_dashboard ? "flex" : "none")};
  flex-direction: row;
  width: 100%;
  margin: 0rem 0rem 0rem 0rem;
  padding: 1rem 1rem 1rem 1rem;
  min-height: 8rem;
`;

export const ImageContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  border: none;
  margin: 0rem 0.75rem 0rem 0rem;
  border: 0.5px solid ${grey_2};

  &:hover {
    cursor: pointer;
  }
`;

export const ImageInput = styled.input`
  display: none !important;
`;

export const AddIcon = styled.img`
  width: ${(props) => (props.active ? "0.85rem" : "0.75rem")};
  transform: ${(props) => (props.active ? "" : "rotate(45deg)")};
  margin: 0rem 0rem 0rem 0rem;
`;

export const TextInput = styled(TextareaAutosize)`
  border: none;
  padding: 0rem 0rem 0rem 0rem;
  color: ${white};
  width: calc(100% - 3rem);
  font-family: ${roboto};
  font-size: 0.85rem;
  resize: none !important;
  background: transparent;
  overflow: hidden;
  line-height: 115%;
  letter-spacing: 0.25px;

  &&& {
    ::placeholder {
      font-family: ${roboto};
      font-size: 0.85rem;
      color: ${grey};
      letter-spacing: 0.25px;
      line-height: 115%;
      opacity: 0.65;
    }
  }

  &:focus {
    outline: none !important;
  }
`;

export const BottomContainer = styled.div`
  display: ${(props) => (props.active_dashboard ? "flex" : "none")};
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-top: 0.5px solid ${grey_2};
  padding: 0.75rem 1rem 0.75rem 1rem;
`;
