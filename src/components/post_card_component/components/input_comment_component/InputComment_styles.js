import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

import { colors } from "../../../../colors/colors";
import { fonts } from "../../../../fonts/fonts";

const { blue, black, white } = colors;
const { roboto, open_sans } = fonts;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  padding: 1rem 1rem 1rem 1rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 0rem 0rem 0rem;
  width: 100%;
`;

export const ProfileImage = styled.div`
  width: 1.65rem;
  height: 1.65rem;
  border-radius: 50%;
  border: none;
  margin: 0rem 0.75rem 0rem 0rem;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.profile_image_url});
  background-repeat: no-repeat;
`;

export const TextInput = styled(TextareaAutosize)`
  width: 100%;
  resize: none !important;
  border-radius: 20px;
  font-family: ${roboto};
  font-size: 0.8rem;
  color: ${black};
  padding: 0.35rem 0.75rem 0.35rem 0.75rem;
  border: none;

  &&& {
    ::placeholder {
      font-size: 0.8rem;
    }
  }

  &:focus {
    outline: none !important;
  }
`;

export const CommentButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: fit-content;
  margin: 0.75rem 0rem 0rem 0rem;
`;

export const CommentButton = styled.div`
  display: flex;
  align-items: center;
  line-height: 100%;
  height: 1.55rem;
  width: fit-content;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0rem 0.5rem 0rem 0.5rem;
  border-radius: 20px;
  font-family: ${open_sans};
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${white};
  background: ${blue};

  &:hover {
    cursor: pointer;
  }
`;
