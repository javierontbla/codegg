import styled, { css } from "styled-components";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { grey, black } = colors;
const { source_sans_pro, roboto } = fonts;

const InputStyles = css`
  width: 100%;
  background: none;
  border: none;
  border-bottom: 1px solid ${grey};
  padding: 0.1rem 0.25rem 0.1rem 0.25rem;
  color: ${black};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0rem 0rem 0rem 0rem !important;
`;

export const LeftContainer = styled.div`
  width: calc(100% - 18.5rem);
  margin: 0rem 1.5rem 0rem 0rem;
`;

export const RightContainer = styled.div`
  width: 18.5rem;
  border: 1px solid orange;
`;

export const TitleInput = styled.input`
  width: 100%;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0.35rem 0.75rem 0.35rem 0.75rem;
  font-size: 2.2rem;
  border: 1px solid ${grey};
  border-radius: 0.15rem;
  font-family: ${source_sans_pro};

  &:focus {
    outline: none !important;
  }
`;

export const HeaderInput = styled.input`
  ${InputStyles};
  font-size: 1.5rem;

  font-family: ${roboto};

  &:focus {
    outline: none !important;
  }
`;

export const BodyInput = styled.input`
  ${InputStyles};
  font-size: 1rem;
  font-family: ${roboto};

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
  margin: 1.25rem 0rem 0rem 0rem;
`;

export const ActionButtonContainer = styled.div`
  width: fit-content;
  height: fit-content;
`;

export const InsertAction = styled.div`
  width: fit-content;
  font-size: 1rem;
  border: none;
  margin: 0rem 1rem 0rem 1rem;
  background: ${grey};
  border-radius: 0.15rem;

  &:hover {
    cursor: pointer;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  margin: 1.75rem 0rem 0rem 0rem;
  padding: 0rem 0.1rem 0rem 0.1rem;
`;

export const CloseIcon = styled.img`
  position: absolute;
  width: 1rem;
  height: 1rem;
  right: 0;
  bottom: 100%;
  margin: 0rem 0.15rem 0rem 0rem;

  &:hover {
    cursor: pointer;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 1rem 0rem 0rem 0rem;
`;
