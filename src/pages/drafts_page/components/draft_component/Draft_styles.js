import styled, { css } from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import AutosizeInput from "react-input-autosize";

import { colors } from "../../../../colors/colors";
import { fonts } from "../../../../fonts/fonts";

const { grey, black, grey_2, white, orange } = colors;
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

const InsertStyles = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  font-size: 1rem;
  border: none;
  height: 1.65rem;
  background: none;
  font-family: ${open_sans};
  color: ${grey};
  letter-spacing: 0.5px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const ArticleImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 22.5rem;
  width: 100%;
  border-bottom: ${(props) =>
    props.draft_image ? "none" : `0.5px solid ${grey_2}`};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background: ${black};
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.draft_image});
  background-repeat: no-repeat;
`;

export const ArticleImageInput = styled.input`
  height: 2rem;
  width: 90%;
  border: none;
  border-bottom: 0.5px solid ${grey_2};
  margin: 4rem 0rem 0rem 0rem;
  background: transparent;
  font-size: 0.8rem;
  color: ${grey};
  font-family: ${open_sans};
  letter-spacing: 0.5px;

  &&& {
    ::placeholder {
      font-size: 0.8rem;
      font-family: ${open_sans};
      color: ${grey};
      opacity: 0.9;
      letter-spacing: 0.5px;
    }
  }

  &:focus {
    outline: none !important;
  }
`;

export const TopContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: fit-content;
`;

export const TitleInput = styled(TextareaAutosize)`
  width: calc(100% - 6.75rem);
  margin: 0rem 0rem 0rem 0rem;
  padding: 0rem 0rem 0.35rem 0rem;
  font-size: 2.5rem;
  border: none;
  border-bottom: 0.5px solid ${grey_2};
  font-family: ${montserrat};
  background: transparent;
  color: ${white};
  letter-spacing: 0.25px;
  resize: none;

  &&& {
    ::placeholder {
      font-size: 2.5rem;
      font-family: ${montserrat};
      color: ${grey};
      opacity: 0.75;
    }
  }

  &:focus {
    outline: none !important;
  }
`;

export const ScoreInput = styled.input`
  text-align: center;
  color: ${white};
  font-family: ${montserrat};
  height: 5.25rem;
  width: 5.25rem;
  margin: 0rem 0rem 0rem 1.5rem;
  padding: 0rem 0.25rem 0rem 0.25rem;
  font-size: 2.25rem;
  background: none;
  border: 0.5px solid ${grey_2};
  border-radius: 50%;

  &&& {
    ::placeholder {
      font-size: 2.25rem;
      font-family: ${montserrat};
      color: ${grey};
      opacity: 0.75;
    }
  }
`;

export const InputOverlay = styled.div`
  position: relative;
  margin: 4rem 0rem 0rem 0rem;
  padding: 0rem 0rem 0rem 0rem;
`;

export const HeaderInput = styled(TextareaAutosize)`
  ${InputStyles};
  font-size: 1.75rem;
  font-family: ${montserrat};
  letter-spacing: 0.25px;

  &&& {
    ::placeholder {
      font-size: 1.75rem;
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
  letter-spacing: 0.25px;

  &&& {
    ::placeholder {
      font-size: 1rem;
      font-family: ${roboto};
      color: ${grey};
      opacity: 0.9;
    }
  }
`;

export const ImageIcon = styled.img`
  width: 6rem;
  border-radius: 0rem;
  margin: 0rem 0rem 0rem 0rem;
`;

export const ImageInput = styled.input`
  ${InputStyles};
  font-size: 0.85rem;
  font-family: ${roboto};
  letter-spacing: 0.5px;
  color: ${grey};

  &&& {
    ::placeholder {
      font-size: 0.85rem;
      font-family: ${roboto};
      color: ${grey};
      opacity: 0.9;
      letter-spacing: 0.5px;
    }
  }
`;

export const DeleteContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  position: absolute;
  height: 1.5rem;
  width: fit-content;
  right: 0;
  bottom: 100%;

  &:hover {
    cursor: pointer;
  }
`;

export const DeleteButton = styled.div`
  height: fit-content;
  width: fit-content;
  margin: 0rem 0rem 0rem 0rem;
  color: ${grey};
  font-family: ${open_sans};
  font-weight: 500;
  padding: 0rem 0rem 0rem 0rem;
  font-size: 0.85rem;

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
  padding: 1.25rem 1.25rem 1.5rem 1.25rem;
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
  padding: 0.75rem 1.25rem 1.25rem 0rem;
  border-radius: 15px;
`;

export const TagInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  height: 1.5rem;
  margin: 0.5rem 0rem 0rem 1.25rem;
  padding: 0rem 0rem 0rem 0rem;
`;

export const TagInput = styled(AutosizeInput)`
  height: 100%;
  font-family: ${open_sans};
  font-size: 0.85rem;
  margin: 0rem 0rem 0rem 0rem;
  border: none;
  background: none;

  &&& {
    ::placeholder {
      font-size: 0.85rem;
      font-family: ${open_sans};
      color: ${black};
      opacity: 0.6;
    }
  }
`;

export const InsertTagButton = styled.div`
  ${InsertStyles};
  margin: 0.5rem 0rem 0rem 1.25rem;
  padding: 0rem 0rem 0rem 0rem;
  height: 1.5rem;
  font-size: 0.85rem;

  &:hover {
    cursor: pointer;
  }
`;

export const Warning = styled.div`
  font-family: ${open_sans};
  font-size: 0.75rem;
  color: ${orange};
  padding: 1rem 1.25rem 0rem 1.25rem;
  letter-spacing: 1px;
  text-align: center;
`;

export const InsertButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: fit-content;
  margin: 2rem 0rem 0rem 0rem;
`;

export const InsertButton = styled.div`
  ${InsertStyles};
  margin: 1rem 1rem 1rem 1rem;
  padding: 0rem 0.5rem 0rem 0.5rem;

  &:hover {
    cursor: pointer;
  }
`;

export const AddIcon = styled.img`
  width: ${(props) => (props.article_image ? "3.5rem" : "0.65rem")};
  transform: ${(props) => (props.article_image ? "" : "rotate(45deg)")};
  margin: ${(props) => (props.article_image ? "0" : "0rem 0.5rem 0rem 0rem")};
`;

export const DeleteIcon = styled.img`
  width: 0.65rem;
  margin: 0rem 0.35rem 0rem 0rem;

  &:hover {
    cursor: pointer;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 2rem 0rem 0rem 0rem;
`;

export const ActionButtonContainer = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 0rem 1rem 0rem 0rem;
`;
