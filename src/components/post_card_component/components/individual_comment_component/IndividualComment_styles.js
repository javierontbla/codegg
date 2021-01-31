import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../../../colors/colors";
import { fonts } from "../../../../fonts/fonts";

const { montserrat, open_sans, roboto } = fonts;
const { grey, white, grey_2 } = colors;

const IconStyles = css`
  width: 1.35rem;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0rem 0rem 0rem 0rem;

  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`;

export const HyperLink = styled(Link)`
  color: ${white};
  &:hover {
    color: ${white};
    text-decoration: none;
  }
`;
export const IndividualCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 100%;
  padding: 1rem 1rem 1rem 1rem;
  border-top: 0.5px solid ${grey_2};
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: fit-content;
  width: 100%;
  margin: 0rem 0rem 0rem 0rem;
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
  padding: 0rem 0rem 0rem 0.75rem;
  height: fit-content;
`;

export const User = styled.div`
  font-family: ${montserrat};
  font-size: 0.9rem;
  line-height: 100%;
  text-transform: capitalize;
  color: ${white};

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

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 0rem 0rem 2.4rem;
`;

export const Comment = styled.div`
  width: 100%;
  margin: 0.15rem 0rem 0.75rem 0rem;
  line-height: 115%;
  font-size: 0.8rem;
  font-family: ${roboto};
  color: ${white};
`;

export const Trends = styled.div`
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
  color: ${grey};
  font-size: 0.65rem;
  margin: 0rem 0.4rem 0rem 0.5rem;
  font-family: ${open_sans};
  font-weight: 500;
  letter-spacing: 0.25px;
  opacity: 0.85;
`;
