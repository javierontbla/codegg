import styled, { css } from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import AutosizeInput from "react-input-autosize";

import { colors } from "../../../../colors/colors";
import { fonts } from "../../../../fonts/fonts";

const { grey, black, grey_2, white } = colors;
const { montserrat, roboto, open_sans } = fonts;

const InputStyles = css`
  width: 100%;
  background: none;
  border: none;
  border-bottom: 0.5px solid ${grey_2};
  padding: 0.5rem 0rem 0.2rem 0rem;
  color: ${white};
  resize: none;

  &:focus {
    outline: none !important;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0rem 0rem 0rem 0rem !important;
`;

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const LeftContainer = styled.div`
  width: calc(100% - 18.5rem);
  margin: 0rem 2rem 0rem 0rem;
  height: fit-content;
`;

export const ContentContainer = styled.div`
  padding: 2rem 2rem 2rem 2rem;
  background: ${black};
  border-radius: 15px;
`;

export const TitleInput = styled.input`
  width: 100%;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0rem 0rem 0.35rem 0rem;
  font-size: 2.35rem;
  border: none;
  border-bottom: 0.5px solid ${grey_2};
  font-family: ${montserrat};
  background: transparent;
  color: ${white};

  &&& {
    ::placeholder {
      font-size: 2.2rem;
      font-family: ${montserrat};
      color: ${grey};
      opacity: 0.9;
    }
  }

  &:focus {
    outline: none !important;
  }
`;

export const InputOverlay = styled.div`
  position: relative;
  margin: 4rem 0rem 0rem 0rem;
  padding: 0rem 0rem 0rem 0rem;
`;

export const HeaderInput = styled(TextareaAutosize)`
  ${InputStyles};
  font-size: 1.5rem;
  font-family: ${montserrat};

  &&& {
    ::placeholder {
      font-size: 1.5rem;
      font-family: ${montserrat};
      color: ${grey};
      opacity: 0.9;
    }
  }
`;

export const BodyInput = styled(TextareaAutosize)`
  ${InputStyles};
  font-size: 1rem;
  font-family: ${roboto};

  &&& {
    ::placeholder {
      font-size: 1rem;
      font-family: ${roboto};
      color: ${grey};
      opacity: 0.9;
    }
  }
`;

export const ImageInput = styled.input`
  ${InputStyles};
  font-size: 0.8rem;
  font-family: ${open_sans};
  letter-spacing: 0.5px;
  color: ${grey};

  &&& {
    ::placeholder {
      font-size: 0.8rem;
      font-family: ${open_sans};
      color: ${grey};
      opacity: 0.9;
    }
  }
`;

export const RemoveButton = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  height: fit-content;
  width: fit-content;
  right: 0;
  bottom: 100%;
  margin: 0rem 0rem 0rem 0rem;
  color: ${grey};
  font-family: ${open_sans};
  font-weight: 500;
  font-size: 0.75rem;
  padding: 0rem 0rem 0rem 0rem;
  border-bottom: 0.25px solid ${grey};

  &:hover {
    cursor: pointer;
  }
`;

export const RightContainer = styled.div`
  width: 18.5rem;
`;

export const AuthorContainer = styled.div`
  height: fit-content;
  background: ${black};
  margin: 0rem 0rem 1rem 0rem;
  padding: 1.25rem 1.25rem 1.25rem 1.25rem;
  border-radius: 15px;
`;

export const DescriptionInput = styled(TextareaAutosize)`
  ${InputStyles};
  font-size: 1rem;
  font-family: ${roboto};
  margin: 1.25rem 0rem 0rem 0rem;
  border-bottom: none;
  padding: 0rem 0rem 0rem 0rem;

  &&& {
    ::placeholder {
      font-size: 1rem;
      font-family: ${roboto};
      color: ${grey};
      opacity: 0.9;
    }
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  background: ${black};
  padding: 0rem 0rem 0rem 0rem;
  border-radius: 15px;
`;

export const TagInput = styled(AutosizeInput)`
  height: 1.65rem;
  font-family: ${open_sans};
  font-size: 0.85rem;
  margin: 1rem 0rem 0rem 1rem;
  padding: 0rem 0rem 0rem 0rem;
  border: none;
  background: none;
  color: ${white};

  &&& {
    ::placeholder {
      font-size: 0.85rem;
      font-family: ${open_sans};
      color: ${black};
      opacity: 0.6;
    }
  }
`;

export const InsertActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: fit-content;
  margin: 2rem 0rem 0rem 0rem;
`;

export const InsertAction = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  font-size: 0.8rem;
  border: none;
  margin: 1rem 1rem 1rem 1rem;
  padding: 0rem 0.55rem 0rem 0.55rem;
  height: 1.65rem;
  background: ${grey};
  border-radius: 20px;
  font-family: ${open_sans};

  &:hover {
    cursor: pointer;
  }
`;

export const AddIcon = styled.img`
  width: 0.65rem;
  transform: rotate(45deg);
  margin: 0rem 0.45rem 0rem 0rem;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 2rem 0rem 0rem 0rem;
`;

export const ActionButtonContainer = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 0rem 1rem 0rem 0rem;
`;
