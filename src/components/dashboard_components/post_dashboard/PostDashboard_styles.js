import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

import { colors } from "../../../colors/colors";
import { fonts } from "../../../fonts/fonts";

const { grey, black } = colors;
const { roboto, open_sans } = fonts;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: fit-content;
  width: 100%;
  background: ${black};
  border: none;
  padding: 1rem 1rem 1rem 1rem;
  border-radius: 15px;
`;

export const DescriptionInput = styled(TextareaAutosize)`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem 0.5rem 0.75rem;
  color: ${black};
  width: 100%;
  border-radius: 20px;
  font-family: ${roboto};
  font-size: 0.9rem;
  resize: none !important;
  letter-spacing: 0.25px;

  &&& {
    ::placeholder {
      font-size: 0.9rem;
      font-family: ${roboto};
      color: ${grey};
      opacity: 0.9;
      letter-spacing: 0.25px;
    }
  }

  &:focus {
    outline: none !important;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: fit-content;
  width: 100%;
  justify-content: space-between !important;
  margin: 1.25rem 0rem 0rem 0rem;
  padding: 0rem 0.1rem 0rem 0.1rem;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ImageInput = styled.input`
  display: none !important;
`;

export const ImageIconContainer = styled.label`
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: fit-content;
  background: none;
  padding: 0rem 0rem 0rem 0rem;
  margin: 0rem 0rem 0rem 0rem;

  &:hover {
    cursor: pointer;
  }
`;

export const ImageIcon = styled.img`
  width: 2rem;
  margin: 0rem 0rem 0rem 0rem;
  border-radius: 3.5px;
`;

export const ImageActiveContainer = styled.div`
  display: ${(props) => (props.image ? "flex" : "none")};
`;

export const ImageActiveIcon = styled.img`
  width: 0.85rem;
  margin: 0rem 0rem 0rem 0.55rem;
`;

export const RightContainer = styled.div``;

export const ActionButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  height: fit-content;
`;
