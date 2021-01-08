import styled from "styled-components";

import { colors } from "../../../colors/colors";
import { fonts } from "../../../fonts/fonts";

const { white, grey, black } = colors;
const { roboto, open_sans } = fonts;

export const PostDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  background: ${white};
  border: 1px solid ${grey};
  padding: 0.6rem 0.55rem 0.6rem 0.55rem;
  border-radius: 0.15rem;
  box-shadow: 0px 1.5px 1.5px -1px #ced4da;
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
  height: fit-content;
  width: 100%;
  justify-content: space-between !important;
  margin: 1rem 0rem 0rem 0rem;
  padding: 0rem 0.05rem 0rem 0.05rem;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ImageContainer = styled.label`
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: fit-content;
  background: none;
  padding: 0rem 0rem 0rem 0rem;
  margin: 0rem 0rem 0rem 0rem;

  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`;

export const ImageInput = styled.input`
  display: none;
`;

export const ImageIcon = styled.img`
  width: 2rem;
  border-radius: 0.15rem;
  margin: 0rem 0rem 0rem 0rem;
`;

export const ImageActiveContainer = styled.div`
  display: ${(props) => (props.image ? "flex" : "none")};
`;

export const ImageActiveIcon = styled.img`
  width: 0.85rem;
  margin: 0rem 0rem 0rem 0.55rem;
`;

export const RightContainer = styled.div``;

export const PublishButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  line-height: 100%;
  height: 1.55rem;
  width: 5.35rem;
  background: rgb(33, 33, 32);
  background: linear-gradient(
    90deg,
    rgba(33, 33, 32, 1) 5%,
    rgba(25, 25, 24, 1) 80%
  );
  padding: 0rem 0.5rem 0rem 0.5rem;
  border-radius: 0.15rem;
  font-family: ${open_sans};
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${white};
`;
