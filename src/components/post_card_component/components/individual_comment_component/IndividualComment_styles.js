import styled, { css } from "styled-components";

import { colors } from "../../../../colors/colors";
import { fonts } from "../../../../fonts/fonts";

const { source_sans_pro, open_sans, roboto } = fonts;
const { grey, black } = colors;

const IconStyles = css`
  width: 1.35rem;
  height: 1.35rem;
  margin: 0rem 0rem 0rem 0rem;
  padding: 0rem 0rem 0rem 0rem;

  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`;
export const IndividualCommentContainer = styled.div`
  height: fit-content;
  width: 100%;
  border-bottom: 0.25px solid ${grey};
  padding: 0rem 0.75rem 0rem 0.75rem;
  border-left: 1px solid ${grey};
  border-right: 1px solid ${grey};

  &:last-child {
    border-bottom: 1px solid ${grey};
    border-bottom-left-radius: 0.35rem;
    border-bottom-right-radius: 0.35rem;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: fit-content;
  height: 2rem;
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

export const UserDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  line-height: 100%;
  padding: 0rem 0rem 0rem 0.5rem;
  height: fit-content;
`;

export const UserName = styled.div`
  font-family: ${source_sans_pro};
  font-size: 0.925rem;
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
  margin: 0rem 0rem 0rem 0.45rem;
`;

export const MiddleContainer = styled.div`
  width: 100%;
`;

export const CommentText = styled.div`
  width: 100%;
  padding: 0rem 0rem 0.25rem 2.15rem;
  line-height: 100%;
  font-size: 0.8rem;
  font-family: ${roboto};
`;

export const BottomContainer = styled.div`
  width: 100%;
  height: fit-content;
`;

export const TrendsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  padding: 0rem 0rem 0.25rem 2.05rem;
`;

export const UpTrend = styled.img`
  ${IconStyles};
`;

export const VotesCount = styled.div`
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

export const DownTrend = styled.img`
  ${IconStyles};
`;
