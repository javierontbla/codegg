import styled from "styled-components";

import { colors } from "../../../colors/colors";
import { fonts } from "../../../fonts/fonts";

const { white, grey, black } = colors;
const { roboto } = fonts;

export const PostDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  background: ${white};
  border: 1px solid ${grey};
  padding: 0.55rem 0.55rem 0.55rem 0.55rem;
  border-radius: 0.35rem;
  box-shadow: 1.35px 1.35px 1.35px -1px #ced4da;
`;

export const TextInputContainer = styled.textarea`
  display: flex;
  align-items: center;
  padding: 0.45rem 0.5rem 0.45rem 0.5rem;
  color: ${black};
  width: 100%;
  border: 0.5px solid ${grey};
  border-radius: 0.15rem;
  font-family: ${roboto};
  font-size: 0.9rem;
  resize: none !important;

  &:focus {
    outline: none !important;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between !important;
  margin: 0rem 0.1rem 0.15rem 0.1rem;
  padding: 1rem 0rem 0rem 0rem;
`;

export const UploadImageIconContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UploadImageIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 1.75rem;
  padding: 0.25rem 0.35rem 0.25rem 0.35rem;
  border-radius: 0.15rem;
  background: rgb(33, 33, 32);
  background: linear-gradient(
    90deg,
    rgba(33, 33, 32, 1) 5%,
    rgba(25, 25, 24, 1) 80%
  );

  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`;

export const Icon = styled.img`
  width: 1.55rem;
  margin: 0rem 0rem 0rem 0rem;
`;
