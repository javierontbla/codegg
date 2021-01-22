import styled, { css } from "styled-components";

import { colors } from "../../../../colors/colors";
import { fonts } from "../../../../fonts/fonts";

const { grey, black, grey_2, white } = colors;
const { source_sans_pro, roboto, open_sans } = fonts;

const InputStyles = css`
  width: 100%;
  background: none;
  border: none;
  border-bottom: 0.5px solid ${grey_2};
  padding: 0.2rem 0rem 0.2rem 0rem;
  color: ${white};
  resize: none;
`;

export const HeaderInput = styled.input`
  ${InputStyles};
  font-size: 1.5rem;
  font-family: ${source_sans_pro};

  &&& {
    ::placeholder {
      font-size: 1.5rem;
      font-family: ${source_sans_pro};
    }
  }

  &:focus {
    outline: none !important;
  }
`;

export const BodyInput = styled.textarea`
  ${InputStyles};
  font-size: 1rem;
  font-family: ${roboto};

  &&& {
    ::placeholder {
      font-size: 1rem;
      font-family: ${roboto};
    }
  }

  &:focus {
    outline: none !important;
  }
`;

export const ImageInput = styled.input`
  ${InputStyles};
  font-size: 1rem;
  font-family: ${roboto};

  &&& {
    ::placeholder {
      font-size: 1rem;
      font-family: ${roboto};
    }
  }

  &:focus {
    outline: none !important;
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
  margin: 0rem 1rem 0rem 1rem;
  padding: 0rem 0.55rem 0rem 0.55rem;
  height: 1.65rem;
  background: ${grey};
  border-radius: 20px;
  font-family: ${open_sans};

  &:hover {
    cursor: pointer;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  margin: 3rem 0rem 0rem 0rem;
  padding: 0rem 0.25rem 0rem 0.25rem;
`;

export const RemoveButton = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  height: fit-content;
  width: fit-content;
  right: 0;
  bottom: 100%;
  margin: 0rem 0.25rem 0rem 0rem;
  color: ${black};
  background: ${grey};
  font-family: ${roboto};
  font-weight: 500;
  font-size: 0.65rem;
  padding: 0.15rem 0.35rem 0.15rem 0.35rem;
  border-radius: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const AddIcon = styled.img`
  width: 0.65rem;
  transform: rotate(45deg);
  margin: 0rem 0.45rem 0rem 0rem;
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
  margin: 0rem 1.5rem 0rem 0rem;
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
  background: ${black};
  border-radius: 15px;
`;

export const RightContainer = styled.div`
  width: 18.5rem;
`;

export const TitleInput = styled.input`
  width: 100%;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0.35rem 0.85rem 0.35rem 0.85rem;
  font-size: 2.2rem;
  border: none;
  border-bottom: 0.5px solid ${grey_2};
  font-family: ${source_sans_pro};
  background: transparent;
  color: ${white};

  &&& {
    ::placeholder {
      font-size: 2.2rem;
      font-family: ${source_sans_pro};
    }
  }

  &:focus {
    outline: none !important;
  }
`;

export const ActionButtonContainer = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 0rem 0.5rem 0rem 0rem;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 2rem 0rem 0rem 0rem;
`;

export const AuthorContainer = styled.div`
  height: fit-content;
  background: ${black};
  margin: 0rem 0rem 0.75rem 0rem;
  padding: 1rem 1rem 1.25rem 1rem;
  border-radius: 15px;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  background: ${black};
  padding: 1rem 0rem 1rem 0rem;
  border-radius: 15px;
`;

export const TagInput = styled.input`
  max-width: 5em;
  height: 1.65rem;
  background: ${grey};
  border-radius: 0.15rem;
  font-family: ${open_sans};
  font-size: 0.85rem;
  border: none;
  margin: 0rem 0rem 1rem 1rem;
  padding: 0rem 0.55rem 0rem 0.55rem;

  &&& {
    ::placeholder {
      font-size: 0.85rem;
      font-family: ${open_sans};
      color: ${black};
      opacity: 0.6;
    }
  }

  &:focus {
    outline: none !important;
  }
`;

export const DescriptionInput = styled.textarea`
  width: 100%;
  font-size: 1rem;
  font-family: ${roboto};
  border: none;
  resize: none;
  margin: 1rem 0rem 0rem 0rem;
  background: transparent;

  &&& {
    ::placeholder {
      font-size: 1rem;
      font-family: ${roboto};
    }
  }

  &:focus {
    outline: none !important;
  }
`;
