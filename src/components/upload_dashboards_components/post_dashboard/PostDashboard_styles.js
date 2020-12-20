import styled from "styled-components";

import { colors } from "../../../colors/colors";
import { fonts } from "../../../fonts/fonts";

const { white, grey, black } = colors;
const { open_sans, roboto } = fonts;

export const PostDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  background: ${white};
  border: 1px solid ${grey};
  padding: 0.55rem 0.55rem 0.55rem 0.55rem;
  border-radius: 0.25rem;
  box-shadow: 1.35px 1.35px 1.35px -1px #ced4da;
`;

export const TextInputContainer = styled.input`
  display: flex;
  align-items: center;
  padding: 0rem 0.5rem 0rem 0.5rem;
  font-size: 0.9rem;
  color: ${black};
  height: 2.5rem;
  width: 100%;
  border: 0.5px solid ${grey};
  border-radius: 0.25rem;
  font-family: ${roboto};
  font-size: 0.9rem;

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

export const MediaContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PublishActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UploadImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 1.75rem;
  padding: 0.25rem 0.3rem 0.25rem 0.3rem;
  border-radius: 0.15rem;
  background: rgb(219, 223, 227);
  background: linear-gradient(
    45deg,
    rgba(219, 223, 227, 1) 5%,
    rgba(201, 203, 205, 1) 95%
  );
`;

export const Icon = styled.img`
  width: 1.65rem;
  margin: 0rem 0rem 0rem 0rem;

  &:hover {
    cursor: pointer;
  }
`;

export const PostButton = styled.div`
  display: flex;
  align-items: center;
  line-height: 100%;
  background: ${grey};
  height: 1.75rem;
  width: fit-content;
  background: ${(props) =>
    props.private ? "rgb(33, 33, 32)" : "rgb(219, 223, 227)"};
  background: ${(props) =>
    props.private
      ? "linear-gradient(90deg,rgba(33, 33, 32, 1) 5%,rgba(25, 25, 24, 1) 80%)"
      : "linear-gradient(45deg,rgba(219, 223, 227, 1) 5%,rgba(201, 203, 205, 1) 95%)"};
  color: ${(props) => (props.private ? `${white}` : `${black}`)};
  margin: ${(props) =>
    props.private ? "0rem 0rem 0rem 0rem" : "0rem 0.5rem 0rem 0rem"};
  padding: 0rem 0.5rem 0rem 0.5rem;
  border-radius: 0.15rem;
  font-family: ${open_sans};
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;

  &:hover {
    cursor: pointer;
  }
`;
