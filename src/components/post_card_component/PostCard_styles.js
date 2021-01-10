import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../colors/colors";
import { fonts } from "../../fonts/fonts";

const { grey, black, white } = colors;
const { open_sans, roboto, source_sans_pro } = fonts;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${white};
  margin: 0.75rem 0rem 0.75rem 0rem;
  box-shadow: 0px 1.5px 1.5px -1px #ced4da;
  border-radius: 0.15rem;

  &:first-child {
    margin: 0rem 0rem 0.75rem 0rem;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 4.4rem;
  align-items: center;
  padding: 0rem 0rem 0rem 0.75rem;
  border-top: 1px solid ${grey};
  border-left: 1px solid ${grey};
  border-right: 1px solid ${grey};
  border-top-left-radius: 0.15rem;
  border-top-right-radius: 0.15rem;
`;

export const PremiumContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: fit-content;
  width: fit-content;
  background: transparent;
  margin: 0.75rem 0.5rem 0rem 0rem;

  &:hover {
    cursor: pointer;
  }
`;

export const Premium = styled.img`
  width: 1.65rem;
  height: 1.65rem;
  margin: 0rem 0rem 0rem 0rem;
`;

export const ProfileImageContainer = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  margin: 0rem 0.6rem 0rem 0rem;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.profile_image_url});
  background-repeat: no-repeat;
`;

export const UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NamesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin: 0rem 0rem 0.175rem 0rem;

  &:hover {
    cursor: pointer;
  }
`;

export const Name = styled.div`
  font-family: ${source_sans_pro};
  font-size: 1.2rem;
  line-height: 100%;
  text-transform: capitalize;
`;

export const NameLink = styled.div`
  line-height: 100%;
  font-family: ${open_sans};
  color: ${grey};
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 1px;
  margin: 0rem 0rem 0rem 0.5rem;

  &:hover {
    opacity: 0.95;
  }
`;

export const Date = styled.div`
  line-height: 100%;
  font-family: ${roboto};
  font-size: 0.75rem;
  color: ${grey};
  letter-spacing: 0.25px;
  margin: 0rem 0rem 0rem 0rem;
`;

export const MiddleContainer = styled.div`
  margin: 0rem 0rem 0rem 0rem;
  padding: 0rem 0rem 0rem 0rem;
  border-left: 1px solid ${grey};
  border-right: 1px solid ${grey};
`;

export const Description = styled.div`
  line-height: 118%;
  font-size: 0.925rem;
  font-family: ${roboto};
  padding: 0rem 0.75rem 0rem 0.75rem;
  margin: 0.1rem 0rem 1rem 0rem;
`;

export const PostImageContainer = styled.div`
  display: ${(props) => (props.post_image_url ? "flex" : "none")};
  background-image: url(${(props) => props.post_image_url});
  max-width: 100%;
  height: 23rem;
  background-size: cover;
  background-position: center;
  margin: 0;
  padding: 0;
  position: relative;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: fit-content;
  justify-content: space-between;
  border-top: 0.5px solid ${grey};
  border-left: 1px solid ${grey};
  border-right: 1px solid ${grey};
  border-bottom: 1px solid ${grey};
  border-bottom-left-radius: ${(props) =>
    props.display_comments ? `0rem` : `0.15rem`};
  border-bottom-right-radius: ${(props) =>
    props.display_comments ? `0rem` : `0.15rem`};
  padding: 0.1rem 0.55rem 0.1rem 0.55rem;
`;

export const TrendsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TrendContainer = styled.div`
  padding: 0rem 0rem 0rem 0rem;
  margin: 0rem 0rem 0rem 0rem;
`;

export const TrendIcon = styled.img`
  width: ${(props) => (props.comment ? "1.4rem" : "1.85rem")};
  height: ${(props) => (props.comment ? "1.4rem" : "1.85rem")};
  margin: 0rem 0rem 0rem 0rem;

  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }
`;

export const CountContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: fit-content;
  color: ${black};
  font-size: 0.65rem;
  margin: 0rem 0.25rem 0rem 0.35rem;
  font-family: ${open_sans};
  font-weight: 500;
  letter-spacing: 0.25px;
  opacity: 0.85;
`;

export const CommentsIconContainer = styled.div``;

export const CommentsContainer = styled.div`
  display: ${(props) => (props.display_comments ? "flex" : "none")};
  width: 100%;
  height: fit-content;
`;

export const LoadMoreComments = styled.div`
  display: ${(props) => (props.display_comments ? "flex" : "none")};
  border: 1px solid ${grey};
  background: ${white};
  box-shadow: 0px 1.5px 1.5px -1px #ced4da;
  align-items: center;
  justify-content: center;
  line-height: 100%;
  height: 1.55rem;
  width: 100%;
  margin: -0.5rem 0rem 0.75rem 0rem;
  padding: 0rem 0rem 0rem 0rem;
  border-radius: 0.15rem;
  font-family: ${open_sans};
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: box-shadow 0.2s;
  color: ${black};

  &:hover {
    cursor: pointer;
    box-shadow: 0px 2px 2px -1px #ced4da;
  }
`;

export const LinkContainer = styled(Link)`
  color: ${black};
  text-decoration: none;
`;
