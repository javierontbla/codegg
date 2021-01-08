import styled, { css } from "styled-components";

import { colors } from "../../../../colors/colors";
import { fonts } from "../../../../fonts/fonts";

const { source_sans_pro, open_sans, roboto } = fonts;
const { grey, black } = colors;

const IconStyles = css`
  width: 1.35rem;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0rem 0rem 0rem 0rem;

  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`;
export const IndividualCommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
  width: 100%;
  padding: 0.6rem 0.75rem 0.6rem 0.75rem;
  border-top: 0.5px solid ${grey};
`;

export const ProfileImageContainer = styled.div`
  height: 100%;
  margin: 0rem 0.5rem 0rem 0rem;
`;

export const ProfileImage = styled.div`
  width: 1.65rem;
  height: 1.65rem;
  border-radius: 50%;
  border: none;
  margin: 0rem 0rem 0rem 0rem;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.profile_image_url});
  background-repeat: no-repeat;

  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  line-height: 100%;
  padding: 0rem 0rem 0rem 0rem;
  height: fit-content;
`;

export const User = styled.div`
  font-family: ${source_sans_pro};
  font-size: 0.9rem;
  line-height: 100%;
  text-transform: capitalize;

  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`;

export const Date = styled.div`
  font-family: ${roboto};
  font-size: 0.65rem;
  color: ${grey};
  letter-spacing: 0.25px;
  margin: 0rem 0rem 0rem 0.5rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Comment = styled.div`
  width: 100%;
  margin: 0.35rem 0rem 0.5rem 0rem;
  line-height: 115%;
  font-size: 0.8rem;
  font-family: ${roboto};
`;

export const TrendsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  margin: 0rem 0rem 0rem -0.15rem;
`;

export const TrendIcon = styled.img`
  ${IconStyles};
`;

export const Votes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: fit-content;
  color: ${black};
  font-size: 0.5rem;
  margin: 0rem 0.25rem 0rem 0.35rem;
  font-family: ${open_sans};
  font-weight: 500;
  letter-spacing: 0.25px;
  opacity: 0.85;
`;
