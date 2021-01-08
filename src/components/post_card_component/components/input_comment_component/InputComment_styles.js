import styled from "styled-components";

import { colors } from "../../../../colors/colors";
import { fonts } from "../../../../fonts/fonts";

const { grey, black, white } = colors;
const { roboto, open_sans } = fonts;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  padding: 0.75rem 0.75rem 0.75rem 0.75rem;
`;

export const InputCommentContainer = styled.div`
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
  margin: 0rem 0.6rem 0rem 0rem;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.profile_image_url});
  background-repeat: no-repeat;
`;

export const TextArea = styled.textarea`
  width: 100%;
  resize: none !important;
  border-radius: 0.15rem;
  border: 0.5px solid ${grey};
  font-family: ${roboto};
  font-size: 0.8rem;
  color: ${black};
  padding: 0.25rem 0.4rem 0.25rem 0.4rem;

  &&& {
    ::placeholder {
      font-size: 0.8rem;
    }
  }

  &:focus {
    outline: none !important;
  }
`;

export const CommentButton = styled.div`
  display: flex;
  align-items: center;
  line-height: 100%;
  height: 1.55rem;
  width: fit-content;
  margin: 0.5rem 0rem 0rem 0rem;
  padding: 0rem 0.5rem 0rem 0.5rem;
  border-radius: 0.15rem;
  font-family: ${open_sans};
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${white};
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
